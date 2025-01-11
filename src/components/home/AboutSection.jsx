import Heading from "../miniWidgets/Heading";
import { PiForkKnifeFill } from "react-icons/pi";
import CountUp from "react-countup";

const AboutSection = () => {
  return (
    <div className="flex flex-col px-4  w-[90%] lg:flex-row items-center mr-10 font-serif letter-wide justify-between ">
      <div className="flex-1">
        <div className="flex items-center ">
          <div>
            {" "}
            <Heading text="About Us" />
          </div>{" "}
          <span className="h-[2px] w-[15%] border-[1px] rounded-md border-yellow-500"></span>{" "}
        </div>

        <h1 className="flex flex-row w-full flex-auto items-center text-4xl font-bold mb-4">
          Welcome to
          <span className=" text-yellow-500 ">
            {" "}
            <PiForkKnifeFill className="inline text-5xl" />
          </span>{" "}
          YumYatch
        </h1>
        <p className="text-gray-500 mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="text-gray-500 mb-6">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="flex gap-8 font-mono">
          <div className="flex flex-row items-center justify-between px-5  w-[44%] border-l-[6px] py-0  border-yellow-500">
            <CountUp
              end={50}
              className="text-primary text-5xl font-bold text-yellow-500"
            />
            <p className="text-gray-500 flex flex-col font-sans letter-wide">
              Years of{" "}
              <span className="font-semibold text-black"> Experience</span>
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-5  w-[47%] border-l-[6px] py-0  border-yellow-500">
            <CountUp
              end={50}
              className="text-primary text-5xl font-bold text-yellow-500"
            />{" "}
            <p className="text-gray-500 flex flex-col font-sans letter-wide">
              Popular{" "}
              <span className="font-semibold text-black">Master Chefs</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
