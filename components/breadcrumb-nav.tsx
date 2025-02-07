"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BreadcrumbNav() {
  const pathname = usePathname(); // E.g., "/materials/1.1/bme1101/books"
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <Breadcrumb className="text-sm font-medium text-gray-500">
      <BreadcrumbList className="flex items-center space-x-2">
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const segmentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLastSegment = index === pathSegments.length - 1;

          return (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator className="text-gray-400">
                <ChevronRight />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                {isLastSegment ? (
                  <BreadcrumbPage className="text-gray-800">
                    {segment.replace(/-/g, " ").toUpperCase()}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={segmentPath}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {segment.replace(/-/g, " ").toUpperCase()}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
