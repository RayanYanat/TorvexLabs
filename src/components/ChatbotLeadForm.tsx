import { useState, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { saveLead } from '../lib/supabaseClient';

interface ChatbotLeadFormProps {
  serviceType: string;
  budget?: string;
  onSuccess: () => void;
  onBack: () => void;
}

export function ChatbotLeadForm({ serviceType, budget, onSuccess, onBack }: ChatbotLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return 'Please enter your full name';
    }
    if (!formData.companyName.trim()) {
      return 'Please enter your company name';
    }
    if (!formData.email.trim()) {
      return 'Please enter your email address';
    }
    if (!validateEmail(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (!formData.projectDetails.trim()) {
      return 'Please provide project details';
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        full_name: formData.name.trim(),
        company_name: formData.companyName.trim(),
        email: formData.email.trim().toLowerCase(),
        service: serviceType,
        budget: budget || '',
        message: formData.projectDetails.trim(),
      };

      await saveLead(leadData);

      setFormData({ name: '', companyName: '', email: '', projectDetails: '' });
      onSuccess();
    } catch (err: any) {
      console.error('Error submitting lead:', err);

      if (err.message?.includes('already been submitted')) {
        setError('This email has already been submitted. Please use a different email or contact us directly.');
      } else {
        setError('Failed to submit. Please try again or email us directly at contact.torvexlabs@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-3">
      <div>
        <label htmlFor="chatbot-name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="chatbot-name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="chatbot-company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name *
        </label>
        <input
          type="text"
          id="chatbot-company"
          required
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="chatbot-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="chatbot-email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="chatbot-details" className="block text-sm font-medium text-gray-700 mb-1">
          Project Details *
        </label>
        <textarea
          id="chatbot-details"
          required
          rows={4}
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {budget && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Budget:</span> {budget}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-2 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          disabled={isSubmitting}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit
            </>
          )}
        </button>
      </div>
    </form>
  );
}
