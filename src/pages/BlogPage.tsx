import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function BlogPage() {
  const { navigateTo } = useRouter();

  const placeholderPosts = [
    {
      title: '10 Ways AI Automation Can Transform Your Business Operations',
      excerpt: 'Discover how artificial intelligence and automation can streamline workflows, reduce costs, and boost productivity across your organization.',
      category: 'AI & Automation',
      date: 'Coming Soon',
      author: 'Torvex Labs',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Mobile App Development Best Practices for 2025',
      excerpt: 'Learn the latest trends and best practices in mobile app development to create apps that users love and that stand out in crowded app stores.',
      category: 'Mobile Development',
      date: 'Coming Soon',
      author: 'Torvex Labs',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Building Scalable SaaS Platforms: A Complete Guide',
      excerpt: 'A comprehensive guide to building SaaS platforms that can handle millions of users while maintaining performance and reliability.',
      category: 'Web Development',
      date: 'Coming Soon',
      author: 'Torvex Labs',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The ROI of Custom Software Development',
      excerpt: 'Understanding the true value and return on investment when choosing custom software solutions over off-the-shelf products.',
      category: 'Custom Solutions',
      date: 'Coming Soon',
      author: 'Torvex Labs',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'How to Choose the Right Technology Stack for Your Project',
      excerpt: 'Navigate the complex world of technology choices with our expert guide to selecting the perfect tech stack for your business needs.',
      category: 'Tech Strategy',
      date: 'Coming Soon',
      author: 'Torvex Labs',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world examples of businesses that successfully transformed their operations through strategic technology implementation.',
      category: 'Case Studies',
      date: 'Coming Soon',
      author: 'Torvex Labs',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest trends, best practices, and insights in AI automation, mobile development, web applications, and custom software solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12 text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Blog Coming Soon!
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're currently working on creating valuable content about technology trends, development best practices, and success stories. Check back soon for insights from our team of experts.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Subscribe for Updates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Articles
            </h2>
            <p className="text-gray-600">
              Here's a preview of the content we'll be publishing soon:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Want to Contribute or Learn More?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Have a topic you'd like us to cover? Interested in guest posting? Get in touch with our team.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
