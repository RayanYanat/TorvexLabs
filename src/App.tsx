import { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

const pageMetadata = {
  home: {
    title: 'Torvex Labs | AI Automation, Mobile & Web Development Solutions',
    description: 'Transform your business with AI automation solutions, mobile app development, web applications, and custom tech solutions. Build. Automate. Scale.',
  },
  services: {
    title: 'Our Services | AI Automation & Custom Development | Torvex Labs',
    description: 'Comprehensive technology services including AI automation solutions, mobile app development, web development, and custom software solutions tailored to your business needs.',
  },
  portfolio: {
    title: 'Portfolio & Case Studies | Torvex Labs Success Stories',
    description: 'Explore our portfolio of successful projects delivering AI automation, mobile apps, and custom tech solutions that drive measurable business results.',
  },
  contact: {
    title: 'Contact Us | Get Free Consultation | Torvex Labs',
    description: 'Ready to transform your business? Contact Torvex Labs for a free consultation on AI automation, mobile app development, web development, and custom solutions.',
  },
  blog: {
    title: 'Blog & Insights | Technology Trends & Best Practices | Torvex Labs',
    description: 'Stay updated with the latest in AI automation, mobile development, web applications, and custom software solutions. Expert insights from Torvex Labs.',
  },
};

function AppContent() {
  const { currentPage } = useRouter();

  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    document.title = metadata.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
