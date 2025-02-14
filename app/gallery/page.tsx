"use client";

import {
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  LayoutGrid,
  LayoutList,
  Link,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface GalleryEvent {
  title: string;
  date: string;
  images: { src: string; alt: string }[];
}

export default function GalleryView() {
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [gridStyle, setGridStyle] = useState<"standard" | "dynamic">(
    "standard"
  );

  const events: GalleryEvent[] = [
    {
      title: "Winter Meetup",
      date: "March 20, 2025",
      images: Array(19).fill({ src: "/placeholder.png", alt: "Winter Meetup" }),
    },
    {
      title: "Summer Fest",
      date: "August 5, 2024",
      images: Array(3).fill({ src: "/placeholder.png", alt: "Summer Fest" }),
    },
  ];

  const toggleEvent = (title: string) => {
    setOpenEvent(openEvent === title ? null : title);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Photo Gallery</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setGridStyle("standard")}
            className={`text-gray-600 hover:text-blue-500 ${
              gridStyle === "standard" ? "text-blue-500" : ""
            }`}
          >
            <LayoutGrid className="w-6 h-6" />
          </button>
          <button
            onClick={() => setGridStyle("dynamic")}
            className={`text-gray-600 hover:text-blue-500 ${
              gridStyle === "dynamic" ? "text-blue-500" : ""
            }`}
          >
            <LayoutList className="w-6 h-6" />
          </button>
        </div>
      </div>
      {events.map((event, i) => (
        <div key={i} className="space-y-4 border-b pb-4">
          {/* Event Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleEvent(event.title)}
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-700">
                {event.title}
              </h2>
              <p className="text-gray-500">{event.date}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-600 hover:text-blue-500"
                title="Download All"
              >
                <Download className="w-6 h-6" />
              </button>
              {openEvent === event.title ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </div>
          </div>

          {/* Collapsible Content */}
          {openEvent === event.title && (
            <div
              className={
                gridStyle === "standard"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  : "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6"
              }
            >
              {event.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative group rounded-lg overflow-hidden ${
                    gridStyle === "dynamic" && index % 5 === 0
                      ? "col-span-2 row-span-2"
                      : ""
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <button
                        className="text-white hover:text-blue-300"
                        title="Download"
                      >
                        <Download className="w-6 h-6" />
                      </button>
                      <button
                        className="text-white hover:text-blue-300"
                        title="View"
                      >
                        <Eye className="w-6 h-6" />
                      </button>
                      <button
                        className="text-white hover:text-blue-300"
                        title="Copy Link"
                      >
                        <Link className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
