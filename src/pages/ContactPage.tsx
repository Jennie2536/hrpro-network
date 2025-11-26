import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { CustomButton } from '@/components/CustomButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { showSuccess, showError } from '@/utils/toast';
import { submitContactToAirtable } from '@/services/airtable';
import { MapPin, Mail, Phone } from 'lucide-react';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form to Airtable...', values);

      await submitContactToAirtable(values);

      showSuccess('Your message has been sent successfully! We will get back to you shortly.');
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      showError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-hr-green mb-8 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Have questions or want to get in touch? Fill out the form below or reach us at our office.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg border-hr-orange/20">
            <CardHeader className="bg-hr-green text-white rounded-t-lg py-4">
              <CardTitle className="text-2xl font-semibold">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6 text-left">
                <div>
                  <Label htmlFor="fullName" className="text-hr-green">Your Name</Label>
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
                  <Label htmlFor="subject" className="text-hr-green">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Inquiry about HR services"
                    {...form.register('subject')}
                    className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.subject ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-hr-green">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    {...form.register('message')}
                    className={`mt-1 border-hr-green/30 focus:border-hr-orange focus:ring-hr-orange ${form.formState.errors.message ? 'border-red-500' : ''}`}
                    rows={5}
                    disabled={isSubmitting}
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <CustomButton
                  type="button"
                  variant="secondary"
                  className="w-full"
                  disabled={isSubmitting}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </CustomButton>
              </div>
            </CardContent>
          </Card>

          {/* Address and Contact Info */}
          <Card className="shadow-lg border-hr-green/20 bg-hr-offwhite">
            <CardHeader className="bg-hr-orange text-white rounded-t-lg py-4">
              <CardTitle className="text-2xl font-semibold">Our Office</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-left space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-hr-green mb-2 flex items-center">
                  <MapPin size={24} className="mr-2 text-hr-orange" /> Main Branch Office
                </h3>
                <p className="text-gray-700 text-base">
                  Suite B07, Flomax plaza, <br />
                  Franca Afegbua crescent, <br />
                  Gudu District, Abuja
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-hr-green mb-2 flex items-center">
                  <Mail size={24} className="mr-2 text-hr-orange" /> Email
                </h3>
                <a href="mailto:contact@thehrhub.com.ng" className="text-gray-700 hover:text-hr-orange transition-colors text-base">
                  contact@thehrhub.com.ng
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-hr-green mb-2 flex items-center">
                  <Phone size={24} className="mr-2 text-hr-orange" /> Phone
                </h3>
                <a href="tel:+2342013309296" className="text-gray-700 hover:text-hr-orange transition-colors text-base">
                  02013309296
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactPage;