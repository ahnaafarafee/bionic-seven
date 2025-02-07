import BreadcrumbNav from "@/components/breadcrumb-nav";
import Link from "next/link";

export default function HUM1109() {
  return (
    <div className="flex flex-col">
      <BreadcrumbNav />

      <Link href="/materials/1.1/hum1109/lecture-slides">Lecture Slides</Link>
      <Link href="/materials/1.1/hum1109/books">Books</Link>
      <Link href="/materials/1.1/hum1109/questions">Questions</Link>
    </div>
  );
}
