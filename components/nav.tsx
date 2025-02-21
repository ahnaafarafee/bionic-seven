"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  title: string;
  href: string;
}

interface NavItemType {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItemType[] = [
  {
    title: "Materials",
    href: "#",
    dropdown: [
      { title: "Semester 1.1", href: "/materials/1.1" },
      { title: "Semester 1.2", href: "/materials/1.2" },
    ],
  },
  {
    title: "Instructors",
    href: "#",
    dropdown: [
      { title: "Semester 1.1", href: "/instructors/1.1" },
      { title: "Semester 1.2", href: "/instructors/1.2" },
    ],
  },
  { title: "Notice", href: "/notices" },
  { title: "Events", href: "/events" },
  { title: "CRs", href: "/crs" },
  { title: "Photo Gallery", href: "/gallery" },
];

interface NavItemProps {
  item: NavItemType;
  mobile?: boolean;
  index?: number;
  openDropdownIndex?: number | null;
  setOpenDropdownIndex?: (value: number | null) => void;
}

export default function Nav() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md relative">
      <Link href="/">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
        {/* Clerk UserButton for Signed-In Users */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <h2 className="sr-only">Navigation Menu</h2>
            <nav className="space-y-4 mt-6">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  mobile
                  index={index}
                  openDropdownIndex={openDropdownIndex}
                  setOpenDropdownIndex={setOpenDropdownIndex}
                />
              ))}
              {/* Clerk UserButton in Sidebar for Mobile */}
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function NavItem({
  item,
  mobile,
  index,
  openDropdownIndex,
  setOpenDropdownIndex,
}: NavItemProps) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    const isOpen = openDropdownIndex === index;
    const handleClick = () => {
      if (setOpenDropdownIndex && typeof index === "number") {
        setOpenDropdownIndex(isOpen ? null : index);
      }
    };

    return (
      <div className="relative">
        {item.dropdown ? (
          <div>
            <button
              className="flex justify-between w-full p-2 text-left hover:bg-gray-100 rounded"
              onClick={handleClick}
            >
              {item.title}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white shadow-lg rounded-md overflow-hidden border w-40 z-50 mt-2"
                >
                  {item.dropdown.map((subItem, idx) => (
                    <Link
                      key={idx}
                      href={subItem.href}
                      className="block p-2 text-sm hover:bg-gray-100"
                      onClick={() =>
                        setOpenDropdownIndex && setOpenDropdownIndex(null)
                      }
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            href={item.href}
            className="block p-2 hover:bg-gray-100 rounded"
          >
            {item.title}
          </Link>
        )}
      </div>
    );
  } else {
    return (
      <div
        className="relative"
        onMouseEnter={() => item.dropdown && setOpen(true)}
        onMouseLeave={() => item.dropdown && setOpen(false)}
      >
        {item.dropdown ? (
          <div>
            <button className="flex justify-between items-center w-full p-2 text-left hover:bg-gray-100 rounded">
              {item.title}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden border w-40 z-50"
                >
                  {item.dropdown.map((subItem, idx) => (
                    <Link
                      key={idx}
                      href={subItem.href}
                      className="block p-2 text-sm hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            href={item.href}
            className="block p-2 hover:bg-gray-100 rounded"
          >
            {item.title}
          </Link>
        )}
      </div>
    );
  }
}
