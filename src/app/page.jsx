import Image from "next/image";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/Feature";
import About from "@/components/home/About";
import ChefsCard from "@/components/home/Chef";
import PopularMenu from "@/components/home/Menu";
import ReservationForm from "@/components/home/ReservationForm";
import TestimonialSlider from "@/components/home/Testimonial";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeatureCards />
      <ChefsCard />
      <ReservationForm />
      <PopularMenu />
      <TestimonialSlider />
    </>
  );
}
