import Image from "next/image";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/Feature";
import About from "@/components/home/About";
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <About />
    </>
  );
}
