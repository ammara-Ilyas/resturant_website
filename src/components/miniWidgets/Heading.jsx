// pages/index.js
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Heading({ text }) {
  return (
    <div className={`${dancingScript.className} flex flex-row items-center `}>
      <h4 className="text-3xl text-orange-600 font-bold">{text}</h4>
    </div>
  );
}

export const Party = ({ text }) => {
  return (
    <h3
      className={`${dancingScript.className} text-[20px] font-semibold uppercase`}
    >
      {text}
    </h3>
  );
};

export const HeadingText = ({ heading, text }) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="flex items-center w-[70%] justify-center">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-auto">
          {" "}
          <div
            className={`${dancingScript.className} flex flex-row items-center `}
          >
            <h4 className="text-3xl text-orange-600 font-bold">{text}</h4>
          </div>{" "}
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black mb-6 text-4xl font-serif font-bold  letter-wide">
        {heading}
      </h2>
    </div>
  );
};
