import Link from "next/link";

export default function Notices() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">
        Latest Notices
      </h3>
      <ul className="space-y-4">
        {notices.map((notice, index) => (
          <li key={index} className="group">
            <Link
              href={notice.link}
              className="block p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50 hover:underline transition"
            >
              <h4 className="text-lg font-medium group-hover:text-blue-600">
                {notice.title}
              </h4>
              <p className="text-sm text-gray-600">{notice.date}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* View All Notices Button */}
      <div className="mt-6 text-center">
        <Link href="/notices">
          <button className="px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-md">
            View All Notices
          </button>
        </Link>
      </div>
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
];
