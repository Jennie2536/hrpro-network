import { useState } from 'react';
import { Check, Upload, X, ChevronRight, Sparkles } from 'lucide-react';

interface OnboardingModalProps {
    onComplete: (formData: any) => void;
}

const OnboardingModal = ({ onComplete }: OnboardingModalProps) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        termsAccepted: false,
        revenueAgreementAccepted: false,
        codeOfConductAccepted: false,
        trainingPolicyAcknowledged: false,
        performancePolicyAcknowledged: false,
        terminationPolicyAcknowledged: false,
        credentialsUploaded: false,
        credentialsFile: null as File | null,
        fullName: '',
        phone: '',
        bio: '',
        specializations: [] as string[],
        yearsExperience: '',
        profilePhoto: null as File | null,
    });

    const [showModal, setShowModal] = useState<string | null>(null);

    const totalSteps = 8;
    const progress = (currentStep / totalSteps) * 100;

    const specializations = [
        'Recruitment',
        'Payroll',
        'Compliance',
        'Training & Development',
        'Employee Relations',
        'Performance Management',
        'HR Policy',
        'Compensation & Benefits'
    ];

    const handleCheckboxChange = (field: keyof typeof formData) => {
        setFormData({ ...formData, [field]: !formData[field] });
    };

    const handleFileUpload = (field: 'credentialsFile' | 'profilePhoto', file: File | null) => {
        if (file) {
            if (field === 'credentialsFile') {
                setFormData({ ...formData, credentialsFile: file, credentialsUploaded: true });
            } else {
                setFormData({ ...formData, profilePhoto: file });
            }
        }
    };

    const handleSpecializationToggle = (spec: string) => {
        const current = formData.specializations;
        const updated = current.includes(spec)
            ? current.filter(s => s !== spec)
            : [...current, spec];
        setFormData({ ...formData, specializations: updated });
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1: return formData.termsAccepted;
            case 2: return formData.revenueAgreementAccepted;
            case 3: return formData.codeOfConductAccepted;
            case 4: return formData.trainingPolicyAcknowledged;
            case 5: return formData.performancePolicyAcknowledged;
            case 6: return formData.terminationPolicyAcknowledged;
            case 7: return formData.credentialsUploaded;
            case 8: return formData.fullName && formData.bio && formData.specializations.length > 0 && formData.yearsExperience && formData.profilePhoto;
            default: return false;
        }
    };

    const handleNext = () => {
        if (canProceed()) {
            if (currentStep === totalSteps) {
                onComplete(formData);
            } else {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const ModalContent = ({ title, children }: { title: string; children: React.ReactNode }) => (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl hide-scrollbar">
                <div className="sticky top-0 bg-gradient-to-r from-[#004921] to-[#006830] p-6 rounded-t-3xl">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white">{title}</h3>
                        <button
                            onClick={() => setShowModal(null)}
                            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="p-8 text-gray-700 leading-relaxed space-y-4">
                    {children}
                </div>
                <div className="p-6 border-t border-gray-100">
                    <button
                        onClick={() => setShowModal(null)}
                        className="w-full bg-[#004921] text-white py-3.5 rounded-full hover:bg-[#003318] transition-all font-semibold"
                    >
                        Got it, Close
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-[#004921] via-[#005a28] to-[#004921] flex items-center justify-center p-4 overflow-y-auto">
            <div className="fixed top-6 right-6 z-10">
                <div className="relative w-28 h-28 bg-white/10 backdrop-blur-md rounded-full p-2 shadow-2xl">
                    <svg className="transform -rotate-90 w-full h-full">
                        <circle cx="56" cy="56" r="48" stroke="#fefae0" strokeWidth="3" fill="none" opacity="0.2" />
                        <circle
                            cx="56" cy="56" r="48" stroke="#ff5914" strokeWidth="3" fill="none"
                            strokeDasharray={`${2 * Math.PI * 48}`}
                            strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}`}
                            className="transition-all duration-700"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-xl">{currentStep}</span>
                        <span className="text-white/70 text-xs">of {totalSteps}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 overflow-hidden">
                <div className="relative bg-gradient-to-br from-[#004921] via-[#005a28] to-[#006830] px-8 py-12 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff5914] rounded-full blur-3xl"></div>
                    </div>
                    <div className="relative">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                            <span className="text-[#fefae0] text-sm font-semibold">Step {currentStep} of {totalSteps}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                            Welcome to<br />HR Hub Pro Network
                        </h1>
                        <p className="text-[#fefae0] text-lg">Complete your onboarding journey</p>
                    </div>
                </div>

                <div className="px-8 py-10 max-h-[60vh] overflow-y-auto hide-scrollbar">
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Terms of Service</h2>
                            <div className="bg-gradient-to-br from-[#fefae0] to-[#fefae0]/50 p-6 rounded-2xl">
                                <h3 className="font-semibold text-[#004921] mb-3">Key Terms:</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Professional conduct and ethical standards</li>
                                    <li>• Data privacy and confidentiality requirements</li>
                                    <li>• Client relationship guidelines</li>
                                    <li>• Quality standards and deliverables</li>
                                </ul>
                                <button onClick={() => setShowModal('terms')} className="mt-4 text-[#ff5914] font-semibold text-sm">
                                    Read Full Terms →
                                </button>
                            </div>
                            <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all">
                                <input
                                    type="checkbox"
                                    checked={formData.termsAccepted}
                                    onChange={() => handleCheckboxChange('termsAccepted')}
                                    className="w-6 h-6 rounded-lg cursor-pointer"
                                />
                                <span className="text-gray-700 font-medium">I have read and accept the Terms of Service</span>
                            </label>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Revenue Share Agreement</h2>
                            <div className="relative bg-gradient-to-br from-[#ff5914] to-[#cc4710] p-10 rounded-3xl">
                                <div className="flex items-center justify-center gap-12 mb-6">
                                    <div className="text-center">
                                        <div className="bg-white/20 rounded-3xl p-6">
                                            <div className="text-5xl font-black text-white">55%</div>
                                            <div className="text-white/90 font-semibold">You</div>
                                        </div>
                                    </div>
                                    <div className="text-4xl text-white">:</div>
                                    <div className="text-center">
                                        <div className="bg-white/20 rounded-3xl p-6">
                                            <div className="text-5xl font-black text-white">45%</div>
                                            <div className="text-white/90 font-semibold">HR Hub</div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowModal('revenue')}
                                    className="w-full bg-white text-[#ff5914] py-3 rounded-full font-bold"
                                >
                                    View Agreement Details
                                </button>
                            </div>
                            <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all">
                                <input
                                    type="checkbox"
                                    checked={formData.revenueAgreementAccepted}
                                    onChange={() => handleCheckboxChange('revenueAgreementAccepted')}
                                    className="w-6 h-6 rounded-lg cursor-pointer"
                                />
                                <span className="text-gray-700 font-medium">I accept the 55/45 revenue sharing agreement</span>
                            </label>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Code of Conduct</h2>
                            <div className="bg-gradient-to-br from-[#fefae0] to-[#fefae0]/50 p-6 rounded-2xl">
                                <h3 className="font-semibold text-[#004921] mb-3">Core Principles:</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Maintain highest professional standards</li>
                                    <li>• Respect client confidentiality at all times</li>
                                    <li>• Deliver quality work within agreed timelines</li>
                                    <li>• Communicate proactively</li>
                                    <li>• Continuous professional development</li>
                                </ul>
                            </div>
                            <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all">
                                <input
                                    type="checkbox"
                                    checked={formData.codeOfConductAccepted}
                                    onChange={() => handleCheckboxChange('codeOfConductAccepted')}
                                    className="w-6 h-6 rounded-lg cursor-pointer"
                                />
                                <span className="text-gray-700 font-medium">I accept and will adhere to the Code of Conduct</span>
                            </label>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Training Requirement</h2>
                            <div className="bg-red-50 border-2 border-red-400 p-6 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">⚠️</div>
                                    <div>
                                        <h3 className="font-bold text-red-900 mb-2">Critical Compliance Rule</h3>
                                        <p className="text-red-800 mb-4">
                                            Complete <strong>3 training sessions per month</strong> to maintain active status.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl text-sm text-gray-700">
                                            <strong>Timeline:</strong><br />
                                            • 1 month: Warning<br />
                                            • 2 months: Probationary<br />
                                            • 3 months: Removal
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all">
                                <input
                                    type="checkbox"
                                    checked={formData.trainingPolicyAcknowledged}
                                    onChange={() => handleCheckboxChange('trainingPolicyAcknowledged')}
                                    className="w-6 h-6 rounded-lg cursor-pointer"
                                />
                                <span className="text-gray-700 font-medium">I understand the monthly training requirement</span>
                            </label>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Performance Tracking</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-6 rounded-2xl">
                                    <div className="text-3xl mb-2">📊</div>
                                    <div className="font-bold text-gray-900">Report Submission</div>
                                    <div className="text-sm text-gray-600">On-time delivery</div>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-2xl">
                                    <div className="text-3xl mb-2">⭐</div>
                                    <div className="font-bold text-gray-900">Client Satisfaction</div>
                                    <div className="text-sm text-gray-600">Feedback scores</div>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl">
                                    <div className="text-3xl mb-2">🎓</div>
                                    <div className="font-bold text-gray-900">Training</div>
                                    <div className="text-sm text-gray-600">Sessions completed</div>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-2xl">
                                    <div className="text-3xl mb-2">💬</div>
                                    <div className="font-bold text-gray-900">Response Time</div>
                                    <div className="text-sm text-gray-600">Communication</div>
                                </div>
                            </div>
                            <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all">
                                <input
                                    type="checkbox"
                                    checked={formData.performancePolicyAcknowledged}
                                    onChange={() => handleCheckboxChange('performancePolicyAcknowledged')}
                                    className="w-6 h-6 rounded-lg cursor-pointer"
                                />
                                <span className="text-gray-700 font-medium">I acknowledge the performance review policy</span>
                            </label>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Termination Policy</h2>
                            <div className="bg-gradient-to-br from-[#fefae0] to-[#fefae0]/50 p-6 rounded-2xl">
                                <h3 className="font-semibold text-[#004921] mb-3">Grounds for Removal:</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Breach of confidentiality</li>
                                    <li>• Consistently poor performance</li>
                                    <li>• Training non-compliance (3+ months)</li>
                                    <li>• Unprofessional conduct</li>
                                    <li>• Failure to meet client commitments</li>
                                </ul>
                            </div>
                            <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all">
                                <input
                                    type="checkbox"
                                    checked={formData.terminationPolicyAcknowledged}
                                    onChange={() => handleCheckboxChange('terminationPolicyAcknowledged')}
                                    className="w-6 h-6 rounded-lg cursor-pointer"
                                />
                                <span className="text-gray-700 font-medium">I acknowledge the termination policy</span>
                            </label>
                        </div>
                    )}

                    {currentStep === 7 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Upload Credentials</h2>
                            <div className="border-2 border-dashed border-[#004921]/30 rounded-3xl p-10 text-center hover:border-[#ff5914] transition-all cursor-pointer">
                                <input
                                    type="file"
                                    id="credentials"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => handleFileUpload('credentialsFile', e.target.files?.[0] || null)}
                                    className="hidden"
                                />
                                <label htmlFor="credentials" className="cursor-pointer">
                                    {formData.credentialsFile ? (
                                        <div className="space-y-3">
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                                <Check className="w-8 h-8 text-green-600" />
                                            </div>
                                            <div className="font-semibold text-[#004921]">{formData.credentialsFile.name}</div>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            <div className="w-16 h-16 bg-[#004921] rounded-full flex items-center justify-center mx-auto">
                                                <Upload className="w-8 h-8 text-white" />
                                            </div>
                                            <p className="text-[#004921] font-bold">Click to upload</p>
                                            <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                                        </div>
                                    )}
                                </label>
                            </div>
                        </div>
                    )}

                    {currentStep === 8 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#004921]">Complete Your Profile</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-full outline-none focus:border-[#ff5914]"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Bio * (200 chars)</label>
                                    <textarea
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value.slice(0, 200) })}
                                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-2xl outline-none focus:border-[#ff5914] resize-none"
                                        rows={3}
                                        placeholder="Brief professional summary..."
                                    />
                                    <p className="text-sm text-gray-500 mt-1">{formData.bio.length}/200</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-3">Specializations *</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {specializations.map(spec => (
                                            <label
                                                key={spec}
                                                className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.specializations.includes(spec)
                                                    ? 'bg-[#004921] border-[#004921] text-white'
                                                    : 'bg-white border-gray-200'
                                                    }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.specializations.includes(spec)}
                                                    onChange={() => handleSpecializationToggle(spec)}
                                                    className="hidden"
                                                />
                                                <Check className={`w-4 h-4 ${formData.specializations.includes(spec) ? 'opacity-100' : 'opacity-0'}`} />
                                                <span className="text-sm font-medium">{spec}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Years of Experience *</label>
                                    <input
                                        type="number"
                                        value={formData.yearsExperience}
                                        onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                                        className="w-full px-5 py-3 border-2 border-gray-200 rounded-full outline-none focus:border-[#ff5914]"
                                        placeholder="e.g., 5"
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Profile Photo *</label>
                                    <div className="border-2 border-dashed border-[#004921]/30 rounded-2xl p-8 text-center cursor-pointer hover:border-[#ff5914]">
                                        <input
                                            type="file"
                                            id="photo"
                                            accept="image/jpeg,image/png"
                                            onChange={(e) => handleFileUpload('profilePhoto', e.target.files?.[0] || null)}
                                            className="hidden"
                                        />
                                        <label htmlFor="photo" className="cursor-pointer">
                                            {formData.profilePhoto ? (
                                                <div className="flex items-center justify-center gap-2 text-green-600">
                                                    <Check className="w-5 h-5" />
                                                    <span className="font-semibold">{formData.profilePhoto.name}</span>
                                                </div>
                                            ) : (
                                                <div>
                                                    <Upload className="w-10 h-10 mx-auto text-[#004921] mb-2" />
                                                    <p className="text-sm text-[#004921] font-semibold">Click to upload photo</p>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-t">
                    <div className="flex justify-center gap-2 mb-6">
                        {Array.from({ length: totalSteps }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 rounded-full transition-all duration-300 ${idx + 1 === currentStep ? 'w-8 bg-[#ff5914]' : idx + 1 < currentStep ? 'w-2 bg-[#004921]' : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className={`px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 ${currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-[#004921] border-2 border-[#004921] hover:bg-[#004921] hover:text-white'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5 rotate-180" />
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!canProceed()}
                            className={`px-10 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 ${canProceed() ? 'bg-gradient-to-r from-[#ff5914] to-[#cc4710] text-white hover:scale-105' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {currentStep === totalSteps ? <><Sparkles className="w-5 h-5" />Complete</> : <>Continue<ChevronRight className="w-5 h-5" /></>}
                        </button>
                    </div>
                </div>
            </div>

            {showModal === 'terms' && (
                <ModalContent title="Terms of Service">
                    <p className="font-semibold text-[#004921]">By accepting these terms, you agree to:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                        <li>Maintain professional conduct at all times</li>
                        <li>Protect client confidentiality and data privacy</li>
                        <li>Deliver quality services according to agreed timelines</li>
                        <li>Comply with Nigerian labor laws and HR best practices</li>
                    </ol>
                </ModalContent>
            )}

            {showModal === 'revenue' && (
                <ModalContent title="Revenue Share Agreement">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-[#004921]">You: 55% | HR Hub: 45%</p>
                    </div>
                    <p className="font-semibold text-[#004921] mb-3">What we provide:</p>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#004921] flex-shrink-0 mt-0.5" />
                            <span>Client acquisition and relationship management</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#004921] flex-shrink-0 mt-0.5" />
                            <span>Payment processing and invoicing</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#004921] flex-shrink-0 mt-0.5" />
                            <span>Continuous training and professional development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#004921] flex-shrink-0 mt-0.5" />
                            <span>Marketing, branding, and platform support</span>
                        </li>
                    </ul>
                </ModalContent>
            )}

            <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
};

export default OnboardingModal;