import Link from "next/link";

export default function BME1101() {
  return (
    <div className="flex flex-col">
      <Link href="/materials/1.1/bme1101/lecture-slides">Lecture Slides</Link>
      <Link href="/materials/1.1/bme1101/books">Books</Link>
      <Link href="/materials/1.1/bme1101/questions">Questions</Link>
    </div>
  );
}
