import BreadcrumbNav from "@/components/breadcrumb-nav";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MaterialsPage({ links }: { links: any[] }) {
  return (
    <div className="p-6">
      <BreadcrumbNav />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto py-4">
        <Link
          href="/materials/1.1"
          className="group block bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600">
              Semester 1.1
            </span>
            <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </Link>
        <Link
          href="/materials/1.2"
          className="group block bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600">
              Semester 1.2
            </span>
            <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </Link>
      </div>
    </div>
  );
}
