import BreadcrumbNav from "@/components/breadcrumb-nav";
import Link from "next/link";
import React from "react";

export default function MaterialsPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbNav />
      <Link href="/materials/1.1">Semester 1.1</Link>
      <Link href="/materials/1.2">Semester 1.2</Link>
    </div>
  );
}
