import React, { useState, useEffect } from "react";
import { Target, Eye, ShieldCheck } from "lucide-react";

export function About() {
  const images = ["/Fire.jpg", "/Wall.jpg", "/Cogon.jpg", "/HELP.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* About Text + Slideshow */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Text Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              STATION 1 COGON FIRE STATION - BUREAU OF FIRE PROTECTION
            </h2>
            <p className="text-gray-600 mb-4">
              The Bureau of Fire Protection - Cagayan de Oro City is the primary
              government agency responsible for fire prevention, suppression,
              and auxiliary services.
            </p>
            <p className="text-gray-600 mb-4">
              We serve the residents, businesses, and institutions of Cagayan de
              Oro, providing 24/7 emergency response and fire safety education.
            </p>
            <p className="text-gray-600">
              Our dedicated team works tirelessly to prevent fires, respond to
              emergencies, and promote fire safety awareness throughout the
              city.
            </p>
          </div>

          {/* Slideshow Column */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[currentIndex]}
              alt="Slideshow"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </div>

        {/* WHO ARE WE */}
        <div className="mb-35 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Who Are We</h2>
          </div>

          <p className="text-gray-600 mb-2">
            We are a team of highly trained and dedicated fire protection
            professionals committed to safeguarding lives and properties.
          </p>
          <p className="text-gray-600">
            Our firefighters, rescue personnel, and administrative staff work
            around the clock to provide comprehensive fire protection services.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:justify-items-center">

          {/* Mission */}
          <div className="bg-red-50 p-8 rounded-lg w-full max-w-sm">
            <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Our Mission
            </h3>
            <p className="text-gray-600 text-center">
              To prevent and suppress destructive fires, investigate causes,
              enforce fire code, and provide emergency medical and rescue
              services.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-blue-50 p-8 rounded-lg w-full max-w-sm">
            <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Our Vision
            </h3>
            <p className="text-gray-600 text-center">
              A modern, professional fire service organization recognized for
              excellence in fire protection and emergency response.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
