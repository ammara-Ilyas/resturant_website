import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-gray-900 min-h-screen text-white">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left px-5 font-sans">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Enjoy Our <br /> Delicious Meal
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Tempor erat elitr rebus at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg">
          BOOK A TABLE
        </button>
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
  );
}
