import AllMaterialsList from "@/components/all-materials-list";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function BME1101() {
  const links = [
    { href: "/materials/1.1/bme1101/lecture-slides", label: "Lecture Slides" },
    { href: "/materials/1.1/bme1101/books", label: "Books" },
    { href: "/materials/1.1/bme1101/questions", label: "Questions" },
    {
      href: "/materials/1.1/bme1101/prev-year-questions",
      label: "Previous Year Questions",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <BreadcrumbNav />

      <h1 className="text-3xl font-bold text-gray-800">BME 1101 Materials</h1>
      <p className="text-gray-600">
        Explore all resources for Introduction to Biomedical Engineering.
      </p>
      <AllMaterialsList links={links} />
    </div>
  );
}
