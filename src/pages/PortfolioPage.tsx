import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PortfolioPage() {
  const { navigateTo } = useRouter();
  const project1 = useScrollAnimation();
  const project2 = useScrollAnimation();
  const project3 = useScrollAnimation();
  const project4 = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const projectRefs = [project1, project2, project3, project4];

  const projects = [
    {
      title: 'Lead Capture System + Automated Follow-Up',
      category: 'AI & Automation',
      description: 'A complete lead generation and nurturing system designed to convert more website visitors into paying clients.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      goal: 'Help a small business convert more visitors into clients and reduce time spent on manual follow-ups.',
      solution: 'Built a modern, conversion-optimized landing page integrated with a CRM system (HubSpot). Configured automated email and WhatsApp follow-up sequences triggered by user actions. Created custom workflows for lead scoring and prioritization.',
      result: '35% increase in recontacted leads within the first 60 days, saving 12+ hours per week on manual follow-ups.',
    },
    {
      title: 'AI Support Assistant for Customer Service',
      category: 'AI Solutions',
      description: 'An intelligent chatbot that handles common customer inquiries automatically, freeing up the team for complex issues.',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200',
      goal: 'Reduce time spent answering repetitive customer questions like order status, shipping info, and FAQs.',
      solution: 'Developed a custom AI assistant using OpenAI API trained on company FAQs and support documentation. Connected to WhatsApp Business API for instant customer responses. Implemented fallback routing to human agents for complex queries.',
      result: '40% reduction in simple support tickets, with average response time dropping from 2 hours to under 2 minutes.',
    },
    {
      title: 'Simple Inventory Management Mobile App',
      category: 'Mobile Development',
      description: 'A lightweight mobile app that makes stock management fast and accurate for retail shops.',
      image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      goal: 'Help a local retail shop update inventory efficiently and reduce stock discrepancies.',
      solution: 'Created a native Android app with barcode scanning capabilities for quick product lookup and updates. Implemented real-time database synchronization using Firebase. Built a simple web dashboard for owners to monitor inventory from anywhere.',
      result: 'Stock errors reduced by 78%, inventory updates now take seconds instead of minutes, improving daily operations.',
    },
    {
      title: 'Modern Company Website + SEO Optimization',
      category: 'Web Development',
      description: 'A professional, fast-loading website that improves online presence and generates quality leads.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      goal: 'Improve online credibility and visibility for a local business struggling with outdated web presence.',
      solution: 'Designed and built a clean, responsive website optimized for speed and SEO. Implemented proper meta tags, structured data, and semantic HTML. Connected contact forms to CRM and email notifications. Optimized images and added caching strategies.',
      result: '+27% increase in organic search visibility in 90 days, 3x more qualified contact form submissions.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
              Real projects built for real businesses. Simple, effective solutions that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20">
            {projects.map((project, index) => {
              const projectRef = projectRefs[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={projectRef.ref}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
                >
                  <div className={`lg:col-span-2 ${!isEven ? 'lg:order-2' : ''} ${
                    projectRef.isVisible ? (isEven ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    />
                  </div>

                  <div className={`lg:col-span-3 ${!isEven ? 'lg:order-1' : ''} ${
                    projectRef.isVisible ? (isEven ? 'animate-slide-in-right' : 'animate-slide-in-left') : 'opacity-0'
                  }`}>
                    <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-blue-700 transition-colors duration-300">
                      {project.category}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div className="group hover:translate-x-2 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="font-bold text-gray-900">Goal</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-7">{project.goal}</p>
                      </div>

                      <div className="group hover:translate-x-2 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="font-bold text-gray-900">Solution</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-7">{project.solution}</p>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg hover:bg-blue-100 hover:border-blue-700 transition-all duration-300 hover:translate-x-2">
                        <div className="flex items-start gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <h3 className="font-bold text-gray-900">Result</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed pl-7">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={ctaSection.ref} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${ctaSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Ready to Start Your Success Story?
          </h2>
          <p className={`text-xl text-blue-100 mb-8 ${ctaSection.isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Let's discuss your project and create a custom solution that delivers measurable results for your business.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className={`bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
              ctaSection.isVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0'
            }`}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
