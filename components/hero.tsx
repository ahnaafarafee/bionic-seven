import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      {/* Desktop Hero: full-screen background image */}
      <div className="hidden md:block relative h-screen">
        <Image src="/banner.webp" alt="Hero" fill className="object-cover" />
      </div>

      {/* Mobile Hero: image with natural height */}
      <div className="block md:hidden">
        <Image
          src="/banner.webp"
          alt="Hero"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
