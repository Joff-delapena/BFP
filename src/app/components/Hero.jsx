import { Link } from "react-router-dom";
import { Shield, Phone } from "lucide-react";
import { useData } from "../context/DataContext";

export default function Home() {
  const { reports } = useData();

  // Slice reports for display
  const mainReport = reports && reports[0];
  const rightReports = reports ? reports.slice(1, 5) : [];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[750px] flex items-center overflow-visible">

        {/* Background Image */}
        <img
          src="/Fire.jpg"
          alt="Fire Station"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Flame Overlay */}
        <img
          src="/fire-overlay.png"
          alt="Flame Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Spark Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-yellow-400 absolute animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Floating Icons */}
        <Phone className="absolute top-10 right-10 w-12 h-12 text-red-500 drop-shadow-xl animate-bounce z-20" />
        <Shield className="absolute bottom-10 left-10 w-14 h-14 text-yellow-400 drop-shadow-xl animate-pulse z-20" />

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

      {/* ================= WEEKLY REPORTS ================= */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Weekly Reports
            </h2>
            <p className="text-gray-600">
              Official updates from Station 1 Cogon
            </p>
          </div>

          {/* Check if reports exist */}
          {!reports || reports.length === 0 ? (
            <p className="text-center text-gray-600">No reports available yet.</p>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">

              {/* Main Report */}
              {mainReport && (
                <div className="lg:col-span-2 relative h-[520px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={mainReport.image}
                    alt={mainReport.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute bottom-0 p-8 text-white">
                    <p className="text-sm mb-2 opacity-80">
                      {new Date(mainReport.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="text-3xl font-bold mb-3">
                      {mainReport.title}
                    </h3>
                    <p className="text-sm max-w-xl opacity-90">
                      {mainReport.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Right Side */}
              <div className="grid grid-rows-2 gap-6">
                {/* Top Right */}
                {rightReports[0] && (
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src={rightReports[0].image}
                      alt={rightReports[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute bottom-0 p-4 text-white">
                      <h4 className="font-semibold text-lg">
                        {rightReports[0].title}
                      </h4>
                    </div>
                  </div>
                )}

                {/* Bottom Three */}
                <div className="grid grid-cols-3 gap-6">
                  {rightReports.slice(1).map((report) => (
                    <div
                      key={report.id}
                      className="relative h-[200px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                      <img
                        src={report.image}
                        alt={report.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute bottom-0 p-3 text-white">
                        <h5 className="text-sm font-semibold">{report.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* Tailwind Custom Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 1; }
          50% { transform: translateY(-20px); opacity: 0.5; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>

    </div>
  );
}
