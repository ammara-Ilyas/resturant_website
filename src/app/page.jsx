import Image from "next/image";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/Feature";
import About from "@/components/home/About";
import ChefsCard from "@/components/home/Chef";
import PopularMenu from "@/components/home/Menu";
import ReservationForm from "@/components/home/ReservationForm";
import TestimonialSlider from "@/components/home/Testimonial";
import EventSlider from "@/components/home/Event";
// import CatSlider from "@/components/miniWidgets/Slider";
import Wrapper from "@/components/miniWidgets/Wrapper";
import Menu from "@/components/home/Menu";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeatureCards />
      <Menu />
      <EventSlider />
      <ChefsCard />
      <ReservationForm />
      <PopularMenu />
      <TestimonialSlider />
    </>
  );
}
