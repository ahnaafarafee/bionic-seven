import Link from "next/link";
import BreadcrumbNav from "./breadcrumb-nav";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";

export default function SubjectList({ subjects }: { subjects: any[] }) {
  return (
    <div className="p-6">
      <BreadcrumbNav />
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {subjects.map((subject) => (
          <Card key={subject.id} className="hover:shadow-xl transition-shadow">
            <CardHeader className="relative h-40">
              <Image
                src={subject.imgSrc}
                alt={subject.courseCode}
                fill
                className="object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {subject.courseTitle}
              </h2>
              <p className="text-sm text-gray-500">{subject.courseCode}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Link
                href={`/materials/1.1/${subject.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
              >
                <span className="hover:underline">View Materials</span>
                <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
