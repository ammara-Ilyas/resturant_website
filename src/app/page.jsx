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
import MenuList from "@/components/menu/MenuList";
import MenuSlide from "@/components/menu/MenuSlide";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MenuSlide />
      {/* <CatSlider /> */}
      <MenuList />
      <FeatureCards />
      <EventSlider />
      <ChefsCard />
      <ReservationForm />
      <PopularMenu />
      <TestimonialSlider />
    </>
  );
}
