import Image from "next/image";
import Button from "../miniWidgets/Button";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center mb-52 lg:mb-0"
      style={{
        backgroundImage: "url('/images/bg.gif')",
      }}
    >
      <div className="relative pt-32  flex flex-col md:flex-row items-center  justify-evenly bg-gray-900  bg-opacity-70 min-h-screen text-white">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left px-5 font-serif letter-wide">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Enjoy Our <br /> Delicious Meal
          </h1>
          <p className="text-lg text-gray-300 mb-6 font-serif letter-wide">
            Tempor erat elitr rebus at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos.
          </p>
          <Button text="Book A tabel" />
        </div>

        {/* Rotating Dish */}
        <div className=" w-[500px] h-[500px] p-2 rounded-full overflow-hidden flex items-center justify-center animate-spin-slow">
          <Image
            src="/images/hero.png"
            alt="Delicious Meal"
            width={600}
            height={600}
            className="rounded-full w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
