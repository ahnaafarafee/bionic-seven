"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useState } from "react";

export default function EventsPage() {
  const eventsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const paginatedEvents = events.slice(startIndex, endIndex);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6">All Events</h1>

      <div className="space-y-6">
        {paginatedEvents.map((event, index) => (
          <Link
            key={index}
            href={event.link}
            className="block p-5 bg-white border-l-4 border-green-500 shadow-sm rounded-lg hover:bg-green-50 transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 hover:text-green-600">
              {event.title}
            </h2>
            <p className="text-sm text-gray-600">{event.date}</p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center cursor-pointer">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    currentPage > 1 && setCurrentPage((prev) => prev - 1)
                  }
                  aria-disabled={currentPage === 1}
                  className={`${
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }`}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < totalPages &&
                    setCurrentPage((prev) => prev + 1)
                  }
                  aria-disabled={currentPage === totalPages}
                  className={`${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

// Dummy Events Data
const events = [
  { title: "Workshop on Medical Imaging", date: "March 5, 2025", link: "#" },
  {
    title: "Industrial Visit to Biomedical Lab",
    date: "March 12, 2025",
    link: "#",
  },
  { title: "Annual Science Fair", date: "March 20, 2025", link: "#" },
  { title: "Medical Robotics Seminar", date: "April 2, 2025", link: "#" },
  { title: "AI in Healthcare Conference", date: "April 10, 2025", link: "#" },
  {
    title: "Neuroscience Research Symposium",
    date: "April 18, 2025",
    link: "#",
  },
  { title: "Biomedical Research Workshop", date: "April 25, 2025", link: "#" },
  { title: "Genetic Engineering Talk", date: "May 2, 2025", link: "#" },
  { title: "Wearable Health Tech Conference", date: "May 10, 2025", link: "#" },
  { title: "Clinical Trials and AI Panel", date: "May 18, 2025", link: "#" },
];
