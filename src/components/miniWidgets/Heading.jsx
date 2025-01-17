// pages/index.js
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Heading({ text }) {
  return (
    <div className={`${dancingScript.className} flex flex-row items-center `}>
      <h4 className="text-3xl text-custom-color font-bold">{text}</h4>
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
