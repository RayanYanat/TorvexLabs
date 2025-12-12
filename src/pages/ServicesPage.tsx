import { Bot, Smartphone, Globe, Sparkles, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ServicesPage() {
  const { navigateTo } = useRouter();
  const servicesSection = useScrollAnimation();

  const services = [
    {
      icon: Bot,
      title: 'AI & Automation Solutions',
      slug: 'ai-automation-solutions',
      description: 'Streamline your operations and boost productivity with intelligent automation powered by cutting-edge AI technology.',
      longDescription: 'Our AI and automation solutions transform how businesses operate by eliminating repetitive tasks, reducing errors, and freeing your team to focus on strategic initiatives. We design and implement intelligent systems that learn and adapt to your business needs.',
      features: [
        {
          name: 'Workflow Automation',
          description: 'Automate repetitive tasks and complex workflows to save time and reduce human error. From data entry to approval processes, we streamline operations.',
        },
        {
          name: 'CRM Integration',
          description: 'Seamlessly connect your customer relationship management systems with automated workflows for enhanced customer engagement and sales efficiency.',
        },
        {
          name: 'Appointment Setting',
          description: 'Intelligent booking systems that manage schedules, send reminders, and handle rescheduling automatically across multiple platforms.',
        },
        {
          name: 'Automated Support Systems',
          description: 'AI-powered chatbots and ticket management systems that provide 24/7 customer support and route complex issues to the right team.',
        },
      ],
      benefits: [
        'Reduce operational costs by up to 60%',
        'Increase team productivity and efficiency',
        'Improve accuracy and eliminate human error',
        'Scale operations without proportional cost increases',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      description: 'Create engaging mobile experiences that users love with native iOS and Android applications built for performance and scalability.',
      longDescription: 'We specialize in developing high-performance mobile applications that deliver exceptional user experiences. Our team builds native apps for iOS and Android that leverage platform-specific features while maintaining consistency across devices.',
      features: [
        {
          name: 'iOS Development',
          description: 'Native iPhone and iPad apps built with Swift, optimized for the Apple ecosystem with seamless integration of iOS features.',
        },
        {
          name: 'Android Development',
          description: 'Powerful Android applications using Kotlin and Java, designed to work flawlessly across the diverse Android device ecosystem.',
        },
        {
          name: 'Cross-Platform Solutions',
          description: 'Efficient development using React Native or Flutter to deploy to both platforms while maintaining native performance.',
        },
        {
          name: 'App Store Optimization',
          description: 'Complete support for app store submission, optimization, and ongoing updates to maximize visibility and downloads.',
        },
      ],
      benefits: [
        'Reach millions of mobile users worldwide',
        'Increase customer engagement and retention',
        'Generate new revenue streams through mobile',
        'Build brand loyalty with exceptional UX',
      ],
    },
    {
      icon: Globe,
      title: 'Web Development',
      slug: 'web-development',
      description: 'Build powerful web applications and SaaS platforms with modern frameworks that scale with your business growth.',
      longDescription: 'Our web development services deliver fast, secure, and scalable web applications that drive business results. From custom web apps to full-featured SaaS platforms, we build solutions that grow with your needs.',
      features: [
        {
          name: 'Custom Web Applications',
          description: 'Tailored web applications built with React, Vue, or Angular that provide rich, interactive experiences for your users.',
        },
        {
          name: 'SaaS Platforms',
          description: 'Complete SaaS solutions with subscription management, multi-tenancy, and scalable architecture for sustainable growth.',
        },
        {
          name: 'Progressive Web Apps',
          description: 'Modern PWAs that work offline, load instantly, and provide app-like experiences without requiring installation.',
        },
        {
          name: 'E-commerce Solutions',
          description: 'Full-featured online stores with payment processing, inventory management, and seamless checkout experiences.',
        },
      ],
      benefits: [
        'Expand your market reach globally',
        'Reduce infrastructure and maintenance costs',
        'Improve conversion rates with optimized UX',
        'Scale seamlessly as your business grows',
      ],
    },
    {
      icon: Sparkles,
      title: 'Custom Tech Solutions',
      slug: 'custom-tech-solutions',
      description: 'Get bespoke technology solutions perfectly aligned with your unique business challenges and strategic objectives.',
      longDescription: 'Every business has unique challenges that require tailored solutions. We work closely with you to understand your specific needs and develop custom technology solutions that address your pain points and drive competitive advantage.',
      features: [
        {
          name: 'Digital Transformation',
          description: 'Comprehensive strategies and implementations to modernize legacy systems and transition your business to digital-first operations.',
        },
        {
          name: 'API Development & Integration',
          description: 'Build robust APIs or integrate third-party services to create seamless data flow between your systems and partners.',
        },
        {
          name: 'Business Intelligence',
          description: 'Custom analytics dashboards and reporting tools that turn your data into actionable insights for better decision-making.',
        },
        {
          name: 'Enterprise Solutions',
          description: 'Scalable, secure enterprise applications designed to handle complex workflows and large-scale operations.',
        },
      ],
      benefits: [
        'Gain competitive advantage through innovation',
        'Optimize processes unique to your industry',
        'Future-proof your technology stack',
        'Maximize ROI on technology investments',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
              Comprehensive technology solutions designed to accelerate your digital transformation, streamline operations, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.slug}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-8 hover:bg-blue-100 transition-all duration-300 hover:shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-300">
                        <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigateTo('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
                >
                  Get Started with {service.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  What We Offer
                </h3>
                <div className="space-y-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can transform your business. Schedule a free consultation with our experts today.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-colors"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
