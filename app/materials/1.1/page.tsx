import BreadcrumbNav from "@/components/breadcrumb-nav";
import Link from "next/link";

export default function FirstYearFirstSemesterMaterials() {
  return (
    <div>
      <BreadcrumbNav />

      <h1>All Subjects</h1>
      <div className="flex flex-col text-blue-800">
        <Link href="/materials/1.1/bme1101" className="hover:underline">
          BME 1101
        </Link>
        <Link href="/materials/1.1/eee1103" className="hover:underline">
          EEE 1103
        </Link>
        <Link href="/materials/1.1/che1105" className="hover:underline">
          CHE 1105
        </Link>
        <Link href="/materials/1.1/math1107" className="hover:underline">
          MATH 1107
        </Link>
        <Link href="/materials/1.1/hum1109" className="hover:underline">
          HUM 1109
        </Link>
      </div>
    </div>
  );
}
