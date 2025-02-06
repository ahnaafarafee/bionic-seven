import Events from "./events";
import Notices from "./notices";

export default function NoticesAndEvents() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Notices & Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Notices />
        <Events />
      </div>
    </div>
  );
}
