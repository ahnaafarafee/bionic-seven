import Nav from "@/components/nav";
import { poppins } from "@/lib/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bionic 7",
  description:
    "Official website of Bionic 7 - Biomedical Engineering batch 7 of Islamic University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
