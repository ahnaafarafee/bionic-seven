"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Exam {
  subject: string;
  date: string; // ISO date string
  link: string;
}

// Dummy exam data
const dummyExams: Exam[] = [
  {
    subject: "Biomedical Signal Processing Exam",
    date: "2025-02-07T05:28:36.184Z", // Change these dates as needed
    link: "#",
  },
  {
    subject: "Medical Instrumentation Exam",
    date: "2025-04-01T14:00:00",
    link: "#",
  },
  {
    subject: "Biomaterials Exam",
    date: "2025-04-10T09:00:00",
    link: "#",
  },
];

// Helper function to calculate countdown string
function calculateCountdown(targetDate: Date): string {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) {
    return "Exam has started!";
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function Exams() {
  const [mounted, setMounted] = useState(false);
  const [countdowns, setCountdowns] = useState<string[]>(
    dummyExams.map((exam) => calculateCountdown(new Date(exam.date)))
  );

  useEffect(() => {
    // Mark as mounted on the client so that dynamic content renders only after hydration.
    setMounted(true);

    const interval = setInterval(() => {
      const newCountdowns = dummyExams.map((exam) =>
        calculateCountdown(new Date(exam.date))
      );
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Until the component has mounted on the client, render nothing
  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold text-red-600 mb-4">
        Upcoming Exams
      </h3>
      <ul className="space-y-4">
        {dummyExams.map((exam, index) => (
          <li
            key={index}
            className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-500"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  {exam.subject}
                </h4>
                <p className="text-sm text-gray-600">
                  Exam Date: {new Date(exam.date).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="mt-2 sm:mt-0 text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span>Remaining:</span>
                <span className="text-red-400">{countdowns[index]}</span>
              </div>
              <Link href={exam.link}>
                <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition rounded-lg shadow-md">
                  View Details
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
