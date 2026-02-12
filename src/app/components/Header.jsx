import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Officers", path: "/officers" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 shadow-md">

      {/* 🔴 Emergency Bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 font-semibold tracking-wide">
          <Phone size={16} className="animate-pulse" />
          Emergency Hotline: 911
        </div>
      </div>

      {/* ⚪ Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo + Title */}
          <Link
            to="/"
            className="flex items-center gap-4 group transition"
          >
            {/* Logo */}
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-white group-hover:scale-105 transition-transform">
              <img
                src="/BFP.jpg"
                alt="BFP Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                Station 1 Cogon Fire Station
              </h1>
              <p className="text-sm text-gray-500">
                Cagayan de Oro Fire District
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`relative font-semibold transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {item.label}

                {/* Active underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] w-full bg-red-600 rounded transition-transform duration-300 ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-red-600 transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 📱 Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-white rounded-xl shadow-lg p-4 space-y-3 border">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition ${
                    isActive(item.path)
                      ? "bg-red-100 text-red-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Emergency Highlight */}
              <div className="mt-3 pt-3 border-t text-center text-sm text-red-600 font-semibold">
                Emergency: 911
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}
