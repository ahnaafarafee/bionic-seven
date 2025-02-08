import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AllMaterialsList({ links }: { links: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="group block bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600">
              {link.label}
            </span>
            <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </Link>
      ))}
    </div>
  );
}
