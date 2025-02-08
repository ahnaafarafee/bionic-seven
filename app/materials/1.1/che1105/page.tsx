import AllMaterialsList from "@/components/all-materials-list";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function CHE1105() {
  const links = [
    { href: "/materials/1.1/che1105/lecture-slides", label: "Lecture Slides" },
    { href: "/materials/1.1/che1105/books", label: "Books" },
    { href: "/materials/1.1/che1105/questions", label: "Questions" },
    {
      href: "/materials/1.1/che1105/prev-year-questions",
      label: "Previous Year Questions",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <BreadcrumbNav />

      <h1 className="text-3xl font-bold text-gray-800">CHE 1105 Materials</h1>
      <p className="text-gray-600">
        Explore all resources for Physical and Inorganic Chemistry.
      </p>
      <AllMaterialsList links={links} />
    </div>
  );
}
