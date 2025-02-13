import AllMaterialsList from "@/components/all-materials-list";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function HUM1109() {
  const links = [
    { href: "/materials/1.1/hum1109/syllabus", label: "Syllabus" },
    { href: "/materials/1.1/hum1109/lecture-slides", label: "Lecture Slides" },
    { href: "/materials/1.1/hum1109/books", label: "Books" },
    { href: "/materials/1.1/hum1109/questions", label: "Questions" },
    {
      href: "/materials/1.1/hum1109/prev-year-questions",
      label: "Previous Year Questions",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <BreadcrumbNav />

      <h1 className="text-3xl font-bold text-gray-800">HUM 1109 Materials</h1>
      <p className="text-gray-600">
        Explore all resources for Communicative Skill.
      </p>
      <AllMaterialsList links={links} />
    </div>
  );
}
