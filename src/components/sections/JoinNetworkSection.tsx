import React, { useState } from 'react';
import { CustomButton } from '../CustomButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { showSuccess, showError } from '@/utils/toast';
import { submitApplicationToAirtable } from '@/services/airtable';
import { trackApplicationSubmitted } from '@/utils/analytics';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  location: z.string().min(2, { message: 'Location must be at least 2 characters.' }),
  yearsOfExperience: z.enum(['Junior (0-3 years)', 'Associate (3-5 years)', 'Senior (5-8 years)', 'Lead (8+ years)'], {
    errorMap: () => ({ message: 'Please select your years of experience.' }),
  }),
  areasOfExpertise: z.string().min(2, { message: 'Please select your area(s) of expertise.' }),
  linkedinProfile: z.string().url({ message: 'Please enter a valid LinkedIn profile URL.' }).optional().or(z.literal('')),
  resumeFile: z.any()
    .refine((file) => file instanceof FileList ? file.length > 0 : false, 'Resume/CV is required.')
    .refine(
      (file) => {
        if (file instanceof FileList && file.length > 0) {
          const fileSize = file[0].size / 1024 / 1024; // Convert to MB
          return fileSize <= 5; // Max 5MB
        }
        return true;
      },
      'File size must be less than 5MB'
    ),
  whyJoin: z.string().min(10, { message: 'Please tell us why you want to join (at least 10 characters).' }),
});

type ApplicationFormValues = z.infer<typeof formSchema>;

const JoinNetworkSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      location: '',
      yearsOfExperience: undefined,
      areasOfExpertise: '',
      linkedinProfile: '',
      resumeFile: undefined,
      whyJoin: '',
    },
  });

  const onSubmit = async (values: ApplicationFormValues) => {
    setIsSubmitting(true);

    try {
      console.log('Submitting form to Airtable...', values);

      await submitApplicationToAirtable(values);

      // Track successful submission
      trackApplicationSubmitted('hr_professional');

      showSuccess('Application submitted successfully! We will get back to you shortly.');
      form.reset();

      // Reset the file input manually
      const fileInput = document.getElementById('resumeFile') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      console.error('Submission error:', error);
      showError('Failed to submit application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const expertiseOptions = [
    'HR Generalist & Operations',
    'Recruitment & Talent Sourcing',
    'L&D and Training',
    'HR Analytics & Workforce Data',
    'Compensation & Benefits',
    'Employee Relations & Engagement',
    'Employer Branding',
    'Other',
  ];

  return (
    <section id="join-network" className="bg-hr-offwhite py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-8">
          Join The HR Hub Pro Network
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Ready to elevate your HR career? Apply to join Africa's fastest-growing HR talent network. We're excited to learn more about you!
        </p>

        <Card className="max-w-3xl mx-auto shadow-lg border-hr-orange/20">
          <CardHeader className="bg-hr-green text-white rounded-t-lg py-4">
            <CardTitle className="text-2xl font-semibold">Application Form</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6 text-left">
              <div>
                <Label htmlFor="fullName" className="text-hr-green">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  {...form.register('fullName')}
                  className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.fullName ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-hr-green">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  {...form.register('email')}
                  className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.email ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="location" className="text-hr-green">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Lagos, Nigeria"
                  {...form.register('location')}
                  className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.location ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {form.formState.errors.location && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.location.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="yearsOfExperience" className="text-hr-green">Years of Experience</Label>
                <Select
                  onValueChange={(value) => form.setValue('yearsOfExperience', value as ApplicationFormValues['yearsOfExperience'])}
                  value={form.watch('yearsOfExperience')}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className={`w-full mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.yearsOfExperience ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Junior (0-3 years)">Junior (0-3 years)</SelectItem>
                    <SelectItem value="Associate (3-5 years)">Associate (3-5 years)</SelectItem>
                    <SelectItem value="Senior (5-8 years)">Senior (5-8 years)</SelectItem>
                    <SelectItem value="Lead (8+ years)">Lead (8+ years)</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.yearsOfExperience && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.yearsOfExperience.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="areasOfExpertise" className="text-hr-green">Area(s) of Expertise</Label>
                <Select
                  onValueChange={(value) => form.setValue('areasOfExpertise', value)}
                  value={form.watch('areasOfExpertise')}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className={`w-full mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.areasOfExpertise ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select your primary area of expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {expertiseOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.areasOfExpertise && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.areasOfExpertise.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="linkedinProfile" className="text-hr-green">LinkedIn Profile URL (Optional)</Label>
                <Input
                  id="linkedinProfile"
                  type="url"
                  placeholder="https://linkedin.com/in/johndoe"
                  {...form.register('linkedinProfile')}
                  className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.linkedinProfile ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {form.formState.errors.linkedinProfile && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.linkedinProfile.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="resumeFile" className="text-hr-green">Upload Resume/CV</Label>
                <Input
                  id="resumeFile"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...form.register('resumeFile')}
                  className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange file:text-hr-green file:bg-hr-offwhite file:border-hr-green file:hover:bg-hr-green/10 file:cursor-pointer ${form.formState.errors.resumeFile ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">Max file size: 5MB. Accepted formats: PDF, DOC, DOCX</p>
                {form.formState.errors.resumeFile && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.resumeFile.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="whyJoin" className="text-hr-green">Why Do You Want to Join?</Label>
                <Textarea
                  id="whyJoin"
                  placeholder="Tell us why you're interested in joining The HR Hub Pro Network."
                  {...form.register('whyJoin')}
                  className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.whyJoin ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {form.formState.errors.whyJoin && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.whyJoin.message}</p>
                )}
              </div>

              <CustomButton
                type="button"
                variant="secondary"
                className="w-full"
                disabled={isSubmitting}
                onClick={form.handleSubmit(onSubmit)}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </CustomButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JoinNetworkSection;