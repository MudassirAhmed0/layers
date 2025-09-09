import Hero from "@/components/hero";
import MockImage from "@/components/mock-image";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Hero/>
    <MockImage/>
      <div className="h-screen">
      </div>
      
    </main>
  );
}
