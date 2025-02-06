"use client";
import { useState, useEffect } from "react";

export default function Classes() {
  const [tomorrowClasses, setTomorrowClasses] = useState<
    { subject: string; instructor: string; time: string }[]
  >([]);

  useEffect(() => {
    // Get tomorrow's day name (e.g., "Monday")
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Cast as keyof typeof classSchedule to satisfy TypeScript
    const dayName = tomorrow.toLocaleDateString("en-US", {
      weekday: "long",
    }) as keyof typeof classSchedule;

    // Filter classes for tomorrow
    const filteredClasses = classSchedule[dayName] || [];
    setTomorrowClasses(filteredClasses);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
        Upcoming Classes
      </h3>

      {tomorrowClasses.length > 0 ? (
        <ul className="space-y-4">
          {tomorrowClasses.map((cls, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500"
            >
              <h4 className="text-lg font-medium text-gray-800">
                {cls.subject}
              </h4>
              <p className="text-sm text-gray-600">
                Instructor: {cls.instructor}
              </p>
              <p className="text-sm text-gray-500">Time: {cls.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No classes scheduled for tomorrow.</p>
      )}
    </div>
  );
}

// Updated Class Schedule Data (Includes Sunday - Saturday)
const classSchedule = {
  Sunday: [
    {
      subject: "Biomedical Signal Processing",
      instructor: "Dr. Rahman",
      time: "10:00 AM - 11:30 AM",
    },
    {
      subject: "Medical Instrumentation",
      instructor: "Prof. Alam",
      time: "1:00 PM - 2:30 PM",
    },
  ],
  Monday: [
    {
      subject: "Biomaterials",
      instructor: "Dr. Ahmed",
      time: "9:00 AM - 10:30 AM",
    },
    {
      subject: "Physiology for Engineers",
      instructor: "Dr. Khan",
      time: "11:00 AM - 12:30 PM",
    },
  ],
  Tuesday: [
    {
      subject: "Biomechanics",
      instructor: "Prof. Sultana",
      time: "10:00 AM - 11:30 AM",
    },
    {
      subject: "Artificial Organs",
      instructor: "Dr. Hasan",
      time: "2:00 PM - 3:30 PM",
    },
  ],
  Wednesday: [
    {
      subject: "Medical Imaging",
      instructor: "Dr. Rahman",
      time: "9:30 AM - 11:00 AM",
    },
    {
      subject: "Neural Engineering",
      instructor: "Dr. Karim",
      time: "1:00 PM - 2:30 PM",
    },
  ],
  Thursday: [
    {
      subject: "Rehabilitation Engineering",
      instructor: "Dr. Alam",
      time: "10:00 AM - 11:30 AM",
    },
    {
      subject: "Tissue Engineering",
      instructor: "Prof. Jahan",
      time: "2:00 PM - 3:30 PM",
    },
  ],
  Friday: [
    {
      subject: "Ethics in Biomedical Engineering",
      instructor: "Dr. Nahar",
      time: "9:00 AM - 10:30 AM",
    },
    {
      subject: "Project Work Discussion",
      instructor: "Dr. Ahmed",
      time: "11:00 AM - 12:30 PM",
    },
  ],
  Saturday: [
    {
      subject: "Research Methodology",
      instructor: "Prof. Karim",
      time: "10:00 AM - 11:30 AM",
    },
    {
      subject: "AI in Healthcare",
      instructor: "Dr. Sultana",
      time: "2:00 PM - 3:30 PM",
    },
  ],
};
