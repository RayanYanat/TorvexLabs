import { ArrowRight, Bot, Smartphone, Globe, Sparkles, CheckCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HomePage() {
  const { navigateTo } = useRouter();
  const servicesSection = useScrollAnimation();
  const whySection = useScrollAnimation();

  const services = [
    {
      icon: Bot,
      title: 'AI & Automation Solutions',
      description: 'Transform your business with intelligent workflow automation, CRM integration, appointment setting, and automated support systems.',
      keywords: ['Workflow Automation', 'CRM Integration', 'AI Support Systems', 'Appointment Booking'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications that deliver exceptional user experiences and drive engagement across all devices.',
      keywords: ['iOS Development', 'Android Development', 'Cross-Platform', 'Native Apps'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Cutting-edge web applications and SaaS platforms built with modern frameworks for scalability and performance.',
      keywords: ['Web Applications', 'SaaS Platforms', 'Progressive Web Apps', 'Custom Dashboards'],
    },
    {
      icon: Sparkles,
      title: 'Custom Tech Solutions',
      description: 'Tailored digital solutions designed specifically for your unique business challenges and growth objectives.',
      keywords: ['Custom Software', 'Digital Transformation', 'Business Solutions', 'API Integration'],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              Build. Automate.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Scale.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Empowering businesses with innovative AI automation solutions, mobile apps, and custom software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <button
                onClick={() => navigateTo('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigateTo('portfolio')}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesSection.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${servicesSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-500 group cursor-pointer hover:-translate-y-2 ${
                  servicesSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={whySection.ref} className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={whySection.isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why Choose Torvex Labs?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We combine cutting-edge technology with proven methodologies to deliver solutions that drive measurable results.
              </p>
              <div className="space-y-4">
                {[
                  'Expert team with 10+ years of experience',
                  'Customized solutions tailored to your needs',
                  'Proven track record of successful projects',
                  'Ongoing support and maintenance',
                  'Competitive pricing and flexible packages',
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-300 hover:translate-x-2 ${
                      whySection.isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 ${
              whySection.isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">
                Schedule a free consultation to discuss your project and discover how we can help you achieve your goals.
              </p>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
