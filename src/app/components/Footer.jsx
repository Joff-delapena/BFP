import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4">

        <div className="grid md:grid-cols-4 gap-4 mb-4">

          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/BFP.jpg"
                alt="BFP Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <img
                src="/CDO.jpg"
                alt="Cogon Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <h3 className="text-lg font-bold">BFP - COGON</h3>
            </div>
            <p className="text-sm text-gray-300">
              Bureau of Fire Protection - Cagayan de Oro City, Region X.
              Protecting lives and properties through fire prevention and emergency response.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white">
                  About BFP COGON
                </Link>
              </li>
              <li>
                <Link to="/officers" className="hover:text-white">
                  Our Officers
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold mb-2">Important Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="flex items-center gap-1">
                BFP National Office <ExternalLink className="w-3 h-3" />
              </li>
              <li className="flex items-center gap-1">
                Fire Code of the Philippines <ExternalLink className="w-3 h-3" />
              </li>
              <li className="flex items-center gap-1">
                NDRRMC <ExternalLink className="w-3 h-3" />
              </li>
              <li className="flex items-center gap-1">
                LGU Cagayan de Oro <ExternalLink className="w-3 h-3" />
              </li>
              <li className="flex items-center gap-1">
                Region X Portal <ExternalLink className="w-3 h-3" />
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-2">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Emergency: 911</p>
                  <p>Station: (088) 123-4567</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <p>bfpcdo@fireprotection.gov.ph</p>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <p>
                  Capt. Vicente Roa, Brgy. 33,<br />
                  Cagayan de Oro City, 9000
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-3 text-center">
          <p className="text-sm text-gray-300 mb-1">
            © {currentYear} Bureau of Fire Protection - Cagayan de Oro City, Region X. All rights reserved.
          </p>

          <div className="flex justify-center gap-3 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            This website is for informational purposes only. For fire emergencies, always call 911 immediately.
          </p>
        </div>

      </div>
    </footer>
  );
}
