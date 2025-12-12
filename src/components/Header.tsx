import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from '../context/RouterContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, navigateTo } = useRouter();

  const menuItems = [
    { name: 'Home', page: 'home' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Portfolio', page: 'portfolio' as const },
    { name: 'Blog', page: 'blog' as const },
    { name: 'Contact', page: 'contact' as const },
  ];

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Torvex Labs</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`hover:text-blue-400 transition-all duration-300 font-medium relative group ${
                  currentPage === item.page ? 'text-blue-400' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                  currentPage === item.page ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => navigateTo('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden hover:scale-110 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {menuItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => {
                  navigateTo(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 ${
                  currentPage === item.page ? 'text-blue-400' : 'text-white'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigateTo('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
