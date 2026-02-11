import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[750px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/Fire.jpg"
        alt="Fire Station"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay + blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full items-start">

        <div className="max-w-4xl text-white space-y-6">

          {/* Badge - positioned independently */}
          <div className="mb-18l mt-10">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
              <span className="text-lg font-semibold drop-shadow-lg">
                Protecting Our Community
              </span>
            </div>
          </div>

          {/* Main Text - left aligned */}
          <h2 className="md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
            BFP - STATION 1 <br />
            COGON FIRE STATION
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold drop-shadow-lg mt-4">
            Capt. Vicente Roa, Brgy. 33, Cagayan De Oro City
          </h3>

          <p className="text-lg md:text-xl text-gray-100 drop-shadow-lg mt-2">
            Committed to preventing and suppressing destructive fires, protecting lives and properties, 
            and promoting fire safety awareness throughout Northern Mindanao.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link
              to="/about"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-center shadow-lg transition-transform hover:scale-105"
            >
              About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
