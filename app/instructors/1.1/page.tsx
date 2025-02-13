"use client";

import Image from "next/image";

interface Instructor {
  name: string;
  courseCode: string;
  courseTitle: string;
  photo: string;
  department: string;
}

export default function Instructors1stSemester() {
  // Dummy Data
  const instructors: Instructor[] = [
    {
      name: "S M Jahurul Haque",
      courseCode: "BME 1101",
      courseTitle: "Introduction to Biomedical Engineering",
      photo: "/teacher-pics/jahir.png",
      department: "Department of Biomedical Engineering",
    },
    {
      name: "Dr. Md. Khairul Islam",
      courseCode: "EEE 1103",
      courseTitle: "Electrical Fundamentals for Biomedical Engineering",
      photo: "/teacher-pics/khairul.jpg",
      department: "Department of Biomedical Engineering",
    },
    {
      name: "S M Abdur Razzaque",
      courseCode: "CHE 1105",
      courseTitle: "Physical and Inorganic Chemistry",
      photo: "/teacher-pics/razzak.jpg",
      department: "Department of Applied Chemistry & Chemical Engineering",
    },
    {
      name: "Ariful Islam",
      courseCode: "MATH 1107",
      courseTitle: "Applied Mathematics",
      photo: "/teacher-pics/arif.jpg",
      department: "Department of Biomedical Engineering",
    },
    {
      name: "Md. Rabiul Islam",
      courseCode: "HUM 1109",
      courseTitle: "Communicative Skill",
      photo: "/teacher-pics/rabiul.jpg",
      department: "Department of Biomedical Engineering",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Semester 1.1 Instructors
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Meet our dedicated instructors and explore the courses they conduct.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
          >
            {/* Top Section: Circular photo */}
            <div className="flex items-center justify-center pt-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-blue-400 group-hover:ring-blue-500 transition-all">
                <Image
                  src={instructor.photo}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-6 py-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {instructor.name}
              </h2>
              <p className="text-gray-500 mt-2">
                <span className="font-semibold text-gray-700">
                  Course Code:
                </span>{" "}
                {instructor.courseCode}
              </p>
              <p className="text-gray-500 mt-1">
                <span className="font-semibold text-gray-700">
                  Course Title:
                </span>{" "}
                {instructor.courseTitle}
              </p>
            </div>

            {/* Subtle Divider */}
            <hr className="mx-6 border-gray-200" />

            {/* Footer */}
            <div className="p-4 text-center">
              <p className="text-sm text-gray-400">
                {/* Additional info or link can go here */}
                {instructor.department}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
