import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Officers', path: '/officers' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Emergency Bar */}
      <div className="bg-red-600 text-white py-2">
      
         
         
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logos and Title */}
          <Link to="/" className="flex items-center gap-1 hover:opacity-90 transition-opacity">
            <div className="flex gap-2">
              {/* First Logo */}
              <div className="w-16 h-16 gap-2 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src="/BFP.jpg"
                  alt="BFP Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-xl font-bold text-gray-800">Station 1 Cogon Fire Station</h1>
              <p className="text-sm text-gray-600">Cagayan de Oro Fire District</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block py-2 font-medium ${
                  isActive(item.path)
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>  
    </header>
  );
}
