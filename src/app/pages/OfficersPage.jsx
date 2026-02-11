import { Link } from "react-router-dom";
import { useData } from "../../app/context/DataContext";

export default function OfficersPage() {
  const { officers } = useData();

  const groupedOfficers = officers.reduce((groups, officer) => {
    const key = officer.rank || "Others";
    if (!groups[key]) groups[key] = [];
    groups[key].push(officer);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">MEET THE OFFICERS</h1>
        <p className="text-gray-300 mb-12">
          Fire District Station 1 – Cogon
        </p>

        {Object.entries(groupedOfficers).map(([rank, list]) => (
          <div key={rank} className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">{rank}</h2>

            <div className="flex flex-wrap justify-center gap-8">
              {list.map(officer => (
                <Link
                  key={officer.id}
                  to={`/officers/${officer.id}`}
                  className="group flex flex-col items-center w-40 hover:scale-105 transition"
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={officer.image}
                      alt={officer.fullName}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />
                  </div>

                  <h3 className="mt-4 font-bold">
                    {officer.fullName}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {officer.position}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {officers.length === 0 && (
          <p className="text-gray-400 text-lg">
            No officers added yet.
          </p>
        )}
      </div>
    </div>
  );
}
