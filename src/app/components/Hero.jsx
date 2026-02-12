import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Phone } from "lucide-react";
import { useData } from "../context/DataContext";

export default function Home() {
  const { reports } = useData();

  // Scroll animation for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[750px] flex items-center overflow-visible">
        <img
          src="/Fire.jpg"
          alt="Fire Station"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/fire-overlay.png"
          alt="Flame Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/60"></div>



        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 flex h-full items-start">
          <div className="max-w-4xl text-white space-y-6 mt-10">

            {/* Badge */}
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
              <span className="text-lg font-semibold drop-shadow-lg">
                Protecting Our Community
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
              BFP - STATION 1 <br />
              COGON FIRE STATION
            </h2>

            {/* Address */}
            <h3 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
              Capt. Vicente Roa, Brgy. 33, Cagayan De Oro City
            </h3>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 drop-shadow-lg max-w-3xl">
              Committed to preventing and suppressing destructive fires,
              safeguarding lives and properties, and promoting fire safety
              awareness throughout Northern Mindanao.
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform hover:scale-105"
              >
                About Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WEEKLY UPDATES (Compact Bottom Section) ================= */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">

          {/* Section Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 fade-up opacity-0 translate-y-10 transition-all duration-700">
              Weekly Updates
            </h2>
            <p className="text-gray-600 fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Official updates from Station 1 Cogon
            </p>
          </div>

          {/* No reports fallback */}
          {!reports || reports.length === 0 ? (
            <p className="text-center text-gray-600">No updates available yet.</p>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {reports.map((report) => (
                <div
                  key={report.id}
                  className="relative h-[220px] rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300 fade-up opacity-0 translate-y-10"
                >
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-0 p-4 text-white">
                    <p className="text-xs opacity-80 mb-1">
                      {new Date(report.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h4 className="font-semibold text-sm md:text-base">
                      {report.title}
                    </h4>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </section>

     

    </div>
  );
}
