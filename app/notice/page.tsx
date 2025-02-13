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

export default function NoticePage() {
  const noticesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(notices.length / noticesPerPage);
  const startIndex = (currentPage - 1) * noticesPerPage;
  const endIndex = startIndex + noticesPerPage;
  const paginatedNotices = notices.slice(startIndex, endIndex);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">All Notices</h1>

      <div className="space-y-6">
        {paginatedNotices.map((notice, index) => (
          <Link
            key={index}
            href={notice.link}
            className="block p-5 bg-white border-l-4 border-blue-500 shadow-sm rounded-lg hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
              {notice.title}
            </h2>
            <p className="text-sm text-gray-600">{notice.date}</p>
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

// Dummy Data
const notices = [
  {
    title: "Midterm Exam Schedule Released",
    date: "February 10, 2025",
    link: "#",
  },
  {
    title: "Lab Report Submission Deadline",
    date: "February 15, 2025",
    link: "#",
  },
  { title: "Class Suspension Notice", date: "February 20, 2025", link: "#" },
  { title: "New Course Registration Open", date: "March 1, 2025", link: "#" },
  {
    title: "Annual Sports Week Announcement",
    date: "March 5, 2025",
    link: "#",
  },
  {
    title: "Internship Application Deadline",
    date: "March 10, 2025",
    link: "#",
  },
  { title: "Faculty Meeting Notice", date: "March 12, 2025", link: "#" },
  { title: "Library Maintenance Notice", date: "March 15, 2025", link: "#" },
  { title: "Graduation Ceremony Schedule", date: "March 20, 2025", link: "#" },
  { title: "Course Withdrawal Deadline", date: "March 25, 2025", link: "#" },
];
