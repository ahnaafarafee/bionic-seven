"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CR {
  name: string;
  roll: string;
  phone: string;
  email: string;
  photo: string;
  activeSince: string; // Start date of CR duty
  expiryDate: string; // End date of CR duty
  fbId: string; // Facebook ID
}

export default function CRsPage() {
  // Dummy Data
  const crs: CR[] = [
    {
      name: "Md. Zahidul Islam Nahid",
      roll: "2329018",
      phone: "+880 1733 807357, +880 1560 000146",
      email: "nahid210797@gmail.com",
      photo: "/CRs/nahid.webp",
      activeSince: "2 November, 2024",
      expiryDate: "Present",
      fbId: "Nahid.iu.bd",
    },
    {
      name: "Faiza Hossain Nashita",
      roll: "2329025",
      phone: "N/A",
      email: "N/A",
      photo: "/CRs/nashita.jpg",
      activeSince: "2 November, 2024",
      expiryDate: "19 November 2024",
      fbId: "N/A",
    },
    {
      name: "Taufiq Hasan",
      roll: "2329005",
      phone: "+880 1772 607591",
      email: "taufiqhasan435@gmail.com",
      photo: "/CRs/taufiq.webp",
      activeSince: "20 November 2024",
      expiryDate: "Present",
      fbId: "taufiq.hasan.50951",
    },
    {
      name: "Rufaida Rahman",
      roll: "2329046",
      phone: "N/A",
      email: "N/A",
      photo: "/CRs/rufaida.jpg",
      activeSince: "20 November 2024",
      expiryDate: "Present",
      fbId: "N/A",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Class Representatives (CRs)
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Here are the all CRs serving the department.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {crs.map((cr, index) => {
          // If expiry date is "Present", use green; otherwise, use red
          const isActive = cr.expiryDate === "Present";

          // Dynamically set ring and badge colors
          const ringColor = isActive
            ? "ring-green-400 group-hover:ring-green-500"
            : "ring-0 group-hover:ring-red-500";
          const badgeColor = isActive
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700";

          return (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="flex items-center justify-center pt-6">
                <div
                  className={`relative w-24 h-24 rounded-full overflow-hidden ring-2 transition-all ${ringColor}`}
                >
                  <Image
                    src={cr.photo}
                    alt={cr.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 py-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {cr.name}
                </h2>
                <p className="text-gray-500 mt-1">
                  <span className="font-semibold text-gray-700">Roll:</span>{" "}
                  {cr.roll}
                </p>
                <p className="text-gray-500 mt-1">
                  <span className="font-semibold text-gray-700">Phone:</span>{" "}
                  {cr.phone}
                </p>
                <p className="text-gray-500 mt-1">
                  <span className="font-semibold text-gray-700">Email:</span>{" "}
                  <a
                    href={`mailto:${cr.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {cr.email}
                  </a>
                </p>
                <p className="text-gray-500 mt-1">
                  <Button variant={"ghost"} disabled={cr.fbId === "N/A"}>
                    <a href={`https://www.facebook.com/${cr.fbId}`}>
                      <img
                        height="32"
                        width="32"
                        src="https://cdn.simpleicons.org/facebook"
                      />
                    </a>
                  </Button>
                </p>
              </div>

              {/* Active Since Badge */}
              <div className="px-6 pb-4 flex justify-center">
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${badgeColor}`}
                >
                  Active Since: {cr.activeSince} - {cr.expiryDate}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
