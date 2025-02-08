import AllMaterialsList from "@/components/all-materials-list";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function MATH1107() {
  const links = [
    { href: "/materials/1.1/math1107/lecture-slides", label: "Lecture Slides" },
    { href: "/materials/1.1/math1107/books", label: "Books" },
    { href: "/materials/1.1/math1107/questions", label: "Questions" },
    {
      href: "/materials/1.1/math1107/prev-year-questions",
      label: "Previous Year Questions",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <BreadcrumbNav />

      <h1 className="text-3xl font-bold text-gray-800">MATH 1105 Materials</h1>
      <p className="text-gray-600">
        Explore all resources for Applied Mathematics.
      </p>
      <AllMaterialsList links={links} />
    </div>
  );
}
