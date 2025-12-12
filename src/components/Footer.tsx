import { Github, Linkedin, Twitter, Zap } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Footer() {
  const { navigateTo } = useRouter();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold">Torvex Labs</span>
            </div>
            <p className="text-gray-400 text-sm">
              Build. Automate. Scale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  Custom Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => navigateTo('portfolio')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4 hover:text-blue-400 transition-colors duration-300">
              contact.torvexlabs@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Torvex Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
