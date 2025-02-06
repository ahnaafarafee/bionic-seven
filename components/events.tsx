import Link from "next/link";

export default function Events() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold text-green-600 mb-4">
        Upcoming Events
      </h3>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="group">
            <Link
              href={event.link}
              className="block p-4 bg-gray-50 rounded-lg border-l-4 border-green-500 hover:bg-green-50 transition hover:underline"
            >
              <h4 className="text-lg font-medium group-hover:text-green-600">
                {event.title}
              </h4>
              <p className="text-sm text-gray-600">{event.date}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* View All Events Button */}
      <div className="mt-6 text-center">
        <Link href="/events">
          <button className="px-5 py-2 text-white bg-green-600 hover:bg-green-700 transition rounded-lg shadow-md">
            View All Events
          </button>
        </Link>
      </div>
    </div>
  );
}

// Dummy Data
const events = [
  { title: "Workshop on Medical Imaging", date: "March 5, 2025", link: "#" },
  {
    title: "Industrial Visit to Biomedical Lab",
    date: "March 12, 2025",
    link: "#",
  },
  { title: "Annual Science Fair", date: "March 20, 2025", link: "#" },
];
