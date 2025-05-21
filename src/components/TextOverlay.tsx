import React from "react";

const TextOverlay: React.FC = () => {
  return (
    <div className="relative mt-[60px] w-[1072px] mx-auto">
      <img
        src="/assets/UA_Theme_2_DT.jpg"
        alt="UA Theme 2"
        className="w-full h-auto"
      />

      <div className="absolute top-1/6 right-2 text-white text-left w-[343px] h-[358px]">
        <div className="flex flex-col justify-start space-y-2">
          <p
            className="font-sens text-[16px]"
            style={{ fontFamily: "Bold Black" }}
          >
            Project Rock
          </p>
          <p
            className="text-[60px] w-[343px] h-[103px] p-0 tracking-tight leading-[1.2]"
            style={{ fontFamily: "Condensed Black" }}
          >
            EVERY SIDE OF STRONG
          </p>
        </div>

        <p
          className="font-sens mt-10 text-[12px] max-w-xs"
          style={{ fontFamily: "Regular Black" }}
        >
          The Underground collection is inspired by the idea of a Project Rock
          fight club. A place where we push each other harder to make each other
          stronger. A drop dedicated to you and your crew. The neon colourways
          are a reflection of the energy we bring to every rep, every set and
          every challenge.
        </p>

        <button
          className="mt-6 text-[16px] border-1 border-white text-white py-2 px-4 rounded-[2px] bg-transparent w-[213px]"
          style={{ fontFamily: "Regular Black" }}
        >
          Shop Project Rock
        </button>
      </div>
    </div>
  );
};

export default TextOverlay;
