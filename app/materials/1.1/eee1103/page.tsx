import BreadcrumbNav from "@/components/breadcrumb-nav";
import Link from "next/link";

export default function EEE1105() {
  return (
    <div className="flex flex-col">
      <BreadcrumbNav />

      <Link href="/materials/1.1/eee1103/lecture-slides">Lecture Slides</Link>
      <Link href="/materials/1.1/eee1103/books">Books</Link>
      <Link href="/materials/1.1/eee1103/questions">Questions</Link>
    </div>
  );
}
