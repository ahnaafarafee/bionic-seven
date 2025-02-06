import Classes from "./classes";
import Exams from "./exams";

export default function ClassesAndExams() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Classes & Exams
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Classes />
        <Exams />
      </div>
    </div>
  );
}
