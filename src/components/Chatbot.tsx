import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, ArrowLeft, Home } from 'lucide-react';
import { ChatbotLeadForm } from './ChatbotLeadForm';

type ChatState =
  | 'welcome'
  | 'main_services'
  | 'website_explanation'
  | 'website_budget'
  | 'website_form'
  | 'mobile_explanation'
  | 'mobile_budget'
  | 'mobile_form'
  | 'ai_explanation'
  | 'ai_categories'
  | 'workflow_automation'
  | 'crm_integration'
  | 'appointment_setting'
  | 'automated_support'
  | 'workflow_form'
  | 'crm_form'
  | 'appointment_form'
  | 'support_form'
  | 'success';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  buttons?: { label: string; action: () => void }[];
  component?: JSX.Element;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ChatState>('welcome');
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      showWelcome();
    }
  }, [isOpen]);

  const addMessage = (text: string, isBot: boolean, buttons?: { label: string; action: () => void }[], component?: JSX.Element) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      buttons,
      component,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const showWelcome = () => {
    setState('welcome');
    addMessage(
      "👋 Welcome to Torvex Labs! I'm here to help you find the perfect solution for your business. How can I assist you today?",
      true,
      [
        { label: "Let's Get Started", action: showMainServices }
      ]
    );
  };

  const showMainServices = () => {
    setState('main_services');
    addMessage(
      "Great! Please choose the service you're interested in:",
      true,
      [
        { label: "🌐 Build Website", action: showWebsiteExplanation },
        { label: "📱 Build Mobile App", action: showMobileExplanation },
        { label: "🤖 AI Automation & Lead Capture", action: showAIExplanation }
      ]
    );
  };

  const showWebsiteExplanation = () => {
    setState('website_explanation');
    addMessage(
      "Excellent choice! A modern, responsive website is essential for your digital presence.\n\n✨ Benefits:\n• Professional online presence 24/7\n• Reach customers globally\n• Build credibility and trust\n• Generate leads automatically\n• Mobile-friendly design\n\n📋 Examples:\n• Showcase Sites - Display your portfolio and services\n• E-commerce - Sell products online\n• Portfolios - Highlight your work and achievements\n• Business Websites - Establish your brand online\n\nLet's discuss your project budget to provide the best solution for you.",
      true,
      [
        { label: "Continue to Budget", action: showWebsiteBudget },
        { label: "← Back", action: showMainServices }
      ]
    );
  };

  const showWebsiteBudget = () => {
    setState('website_budget');
    addMessage(
      "What's your estimated budget for this website project?",
      true,
      [
        { label: "< $1,000", action: () => selectWebsiteBudget("< $1,000") },
        { label: "$1,000 - $5,000", action: () => selectWebsiteBudget("$1,000 - $5,000") },
        { label: "$5,000 - $10,000", action: () => selectWebsiteBudget("$5,000 - $10,000") },
        { label: "> $10,000", action: () => selectWebsiteBudget("> $10,000") },
        { label: "← Back", action: showWebsiteExplanation }
      ]
    );
  };

  const selectWebsiteBudget = (budget: string) => {
    setSelectedBudget(budget);
    setState('website_form');
    addMessage(
      `Perfect! You selected: ${budget}\n\nPlease fill out the form below and we'll get back to you within 24 hours with a customized proposal.`,
      true
    );
    addMessage(
      '',
      true,
      undefined,
      <ChatbotLeadForm
        serviceType="website"
        budget={budget}
        onSuccess={handleFormSuccess}
        onBack={showWebsiteBudget}
      />
    );
  };

  const showMobileExplanation = () => {
    setState('mobile_explanation');
    addMessage(
      "Fantastic! Mobile apps can transform how you engage with your customers.\n\n✨ Benefits:\n• Direct access on customer devices\n• Enhanced user experience\n• Offline functionality\n• Push notifications\n• Native performance\n• App store presence\n\n📋 Examples:\n• E-commerce Apps - Mobile shopping experience\n• Productivity Apps - Task management and tools\n• Engagement Apps - Build community and loyalty\n• Service Apps - On-demand services\n\n💡 Options:\n• Native Android/iOS - Best performance\n• Cross-platform - Cost-effective solution\n\nLet's discuss your budget range.",
      true,
      [
        { label: "Continue to Budget", action: showMobileBudget },
        { label: "← Back", action: showMainServices }
      ]
    );
  };

  const showMobileBudget = () => {
    setState('mobile_budget');
    addMessage(
      "What's your estimated budget for this mobile app project?",
      true,
      [
        { label: "< $1,000", action: () => selectMobileBudget("< $1,000") },
        { label: "$1,000 - $5,000", action: () => selectMobileBudget("$1,000 - $5,000") },
        { label: "$5,000 - $10,000", action: () => selectMobileBudget("$5,000 - $10,000") },
        { label: "> $10,000", action: () => selectMobileBudget("> $10,000") },
        { label: "← Back", action: showMobileExplanation }
      ]
    );
  };

  const selectMobileBudget = (budget: string) => {
    setSelectedBudget(budget);
    setState('mobile_form');
    addMessage(
      `Great! You selected: ${budget}\n\nPlease fill out the form below and we'll create a tailored mobile app solution for your business.`,
      true
    );
    addMessage(
      '',
      true,
      undefined,
      <ChatbotLeadForm
        serviceType="mobile_app"
        budget={budget}
        onSuccess={handleFormSuccess}
        onBack={showMobileBudget}
      />
    );
  };

  const showAIExplanation = () => {
    setState('ai_explanation');
    addMessage(
      "Excellent choice! AI Automation can revolutionize your business operations and save countless hours.\n\n✨ Key Benefits:\n• Automate repetitive tasks\n• Reduce manual work by up to 80%\n• Improve response times\n• Scale without hiring\n• 24/7 automated operations\n• Increase conversion rates\n• Better customer experience\n\nWe offer four specialized categories to transform your business:",
      true,
      [
        { label: "View AI Categories", action: showAICategories },
        { label: "← Back", action: showMainServices }
      ]
    );
  };

  const showAICategories = () => {
    setState('ai_categories');
    addMessage(
      "Choose the AI automation category that interests you:",
      true,
      [
        { label: "⚙️ Workflow Automation", action: showWorkflowAutomation },
        { label: "🔗 CRM Integration", action: showCRMIntegration },
        { label: "📅 Appointment Setting", action: showAppointmentSetting },
        { label: "💬 Automated Support Systems", action: showAutomatedSupport },
        { label: "← Back", action: showAIExplanation },
        { label: "�� Main Services", action: showMainServices }
      ]
    );
  };

  const showWorkflowAutomation = () => {
    setState('workflow_automation');
    addMessage(
      "🔄 Workflow Automation\n\nTransform your business processes with intelligent automation that works 24/7.\n\n✨ What We Automate:\n• Data entry and processing\n• Document generation and routing\n• Email and notification workflows\n• Report generation\n• Task assignment and tracking\n• Integration between multiple tools\n• File organization and backup\n\n💼 Value for Your Business:\n• Save 15-25 hours per week on manual tasks\n• Eliminate human errors in repetitive processes\n• Faster completion of routine operations\n• Free your team for high-value work\n• Consistent execution every time\n• Real-time tracking and reporting\n\n💡 Real Examples:\n• Auto-generate invoices when projects complete\n• Sync data between platforms automatically\n• Create reports and send them on schedule\n• Route customer inquiries to the right team\n\nReady to automate your workflows?",
      true,
      [
        { label: "Get Started - Submit Details", action: showWorkflowForm },
        { label: "← Back to Categories", action: showAICategories }
      ]
    );
  };

  const showWorkflowForm = () => {
    setState('workflow_form');
    addMessage(
      "Perfect! Let's discuss your workflow automation needs.",
      true
    );
    addMessage(
      '',
      true,
      undefined,
      <ChatbotLeadForm
        serviceType="workflow_automation"
        onSuccess={handleFormSuccess}
        onBack={showWorkflowAutomation}
      />
    );
  };

  const showCRMIntegration = () => {
    setState('crm_integration');
    addMessage(
      "🔗 CRM Integration & Lead Management\n\nConnect your tools and manage leads intelligently with automated CRM workflows.\n\n✨ What We Integrate:\n• CRM platforms (HubSpot, Salesforce, Zoho)\n• Email marketing tools\n• Contact forms and landing pages\n• Communication channels (WhatsApp, SMS, Email)\n• Payment processors\n• Analytics and tracking tools\n• Social media platforms\n\n💼 Value for Your Business:\n• Never lose a lead again\n• Automatic lead capture from all sources\n• Instant lead notifications\n• Automated follow-up sequences\n• Complete customer journey tracking\n• Centralized contact management\n• Better sales pipeline visibility\n• Data-driven decision making\n\n💡 Real Examples:\n• Website form → Auto-create CRM contact → Send welcome email\n• Missed call → Create task → Send WhatsApp follow-up\n• New sale → Update CRM → Generate invoice → Send receipt\n• Lead scoring based on engagement\n\nReady to supercharge your CRM?",
      true,
      [
        { label: "Get Started - Submit Details", action: showCRMForm },
        { label: "← Back to Categories", action: showAICategories }
      ]
    );
  };

  const showCRMForm = () => {
    setState('crm_form');
    addMessage(
      "Excellent! Let's set up your CRM integration.",
      true
    );
    addMessage(
      '',
      true,
      undefined,
      <ChatbotLeadForm
        serviceType="crm_integration"
        onSuccess={handleFormSuccess}
        onBack={showCRMIntegration}
      />
    );
  };

  const showAppointmentSetting = () => {
    setState('appointment_setting');
    addMessage(
      "📅 Automated Appointment Setting\n\nLet AI handle your scheduling while you focus on delivering great service.\n\n✨ What We Automate:\n• Calendar management and availability\n• Appointment booking and confirmation\n• Automatic reminders (email, SMS, WhatsApp)\n• Reschedule and cancellation handling\n• Time zone coordination\n• Buffer time management\n• Meeting room/resource booking\n• Video call link generation\n\n💼 Value for Your Business:\n• Eliminate scheduling back-and-forth\n• Reduce no-shows by up to 60%\n• 24/7 booking availability\n• Professional automated reminders\n• Sync with Google Calendar, Outlook, etc.\n• Instant booking confirmations\n• Free staff from scheduling tasks\n• Better calendar utilization\n\n💡 Real Examples:\n• Client books consultation → Auto-confirm → Send reminders → Create Zoom link\n• AI chatbot schedules appointments based on availability\n• Send reminder 24hrs and 1hr before appointment\n• Automatically reschedule if conflicts arise\n• Collect pre-meeting information\n\nReady to automate your scheduling?",
      true,
      [
        { label: "Get Started - Submit Details", action: showAppointmentForm },
        { label: "← Back to Categories", action: showAICategories }
      ]
    );
  };

  const showAppointmentForm = () => {
    setState('appointment_form');
    addMessage(
      "Great! Let's set up your automated appointment system.",
      true
    );
    addMessage(
      '',
      true,
      undefined,
      <ChatbotLeadForm
        serviceType="appointment_setting"
        onSuccess={handleFormSuccess}
        onBack={showAppointmentSetting}
      />
    );
  };

  const showAutomatedSupport = () => {
    setState('automated_support');
    addMessage(
      "💬 Automated Support Systems\n\nProvide instant, intelligent customer support with AI-powered assistants.\n\n✨ What We Build:\n• AI chatbots for websites and apps\n• WhatsApp Business automation\n• FAQ automation and knowledge base\n• Multi-language support bots\n• Intelligent ticket routing\n• Customer inquiry classification\n• Order status and tracking bots\n• Payment and invoice assistants\n\n💼 Value for Your Business:\n• Instant responses 24/7/365\n• Handle unlimited conversations simultaneously\n• Reduce support tickets by 40-60%\n• Response time from hours to seconds\n• Consistent, accurate information\n• Escalate complex issues to humans\n• Multi-channel support (Web, WhatsApp, Messenger)\n• Cost-effective scaling\n• Collect customer insights automatically\n\n💡 Real Examples:\n• Answer FAQs instantly on your website\n• Track orders via WhatsApp automatically\n• Guide customers through product selection\n• Handle returns and exchanges\n• Provide technical troubleshooting\n• Collect feedback and reviews\n\n🎯 Integration Options:\n• Website chat widget\n• WhatsApp Business API\n• Facebook Messenger\n• Instagram DMs\n• Custom channels\n\nReady to provide instant support?",
      true,
      [
        { label: "Get Started - Submit Details", action: showSupportForm },
        { label: "← Back to Categories", action: showAICategories }
      ]
    );
  };

  const showSupportForm = () => {
    setState('support_form');
    addMessage(
      "Perfect! Let's build your automated support system.",
      true
    );
    addMessage(
      '',
      true,
      undefined,
      <ChatbotLeadForm
        serviceType="automated_support"
        onSuccess={handleFormSuccess}
        onBack={showAutomatedSupport}
      />
    );
  };

  const handleFormSuccess = () => {
    setState('success');
    addMessage(
      "🎉 Thank you! Your information has been submitted successfully.\n\nOur team will review your requirements and get back to you within 24 hours with a customized proposal.\n\nWe're excited to help transform your business! 🚀",
      true,
      [
        { label: "🏠 Back to Main Services", action: resetChat }
      ]
    );
  };

  const resetChat = () => {
    setMessages([]);
    setSelectedBudget('');
    showWelcome();
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Torvex Labs</h3>
                <p className="text-xs text-blue-100">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] ${message.isBot ? 'bg-white border border-gray-200' : 'bg-blue-600 text-white'} rounded-2xl p-4 shadow-sm`}>
                  {message.text && (
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {message.text}
                    </p>
                  )}
                  {message.component && (
                    <div className="mt-2">
                      {message.component}
                    </div>
                  )}
                  {message.buttons && message.buttons.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.buttons.map((button, idx) => (
                        <button
                          key={idx}
                          onClick={button.action}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
                        >
                          {button.label.includes('←') && <ArrowLeft className="w-4 h-4" />}
                          {button.label.includes('🏠') && <Home className="w-4 h-4" />}
                          <span>{button.label.replace('←', '').replace('🏠', '').trim()}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
}
