import React from "react";

const TextOverlay: React.FC = () => {
  return (
    <div className="relative mt-[40px] sm:mt-[60px] w-full max-w-[1072px] mx-auto">
      <img
        src="/assets/UA_Theme_2_DT.jpg"
        alt="UA Theme 2"
        className="w-full h-auto object-cover hidden sm:block"
      />
      <img
        src="/assets/UA_Theme_2_MB.jpg"
        alt="UA Theme 2 Mobile"
        className="w-full h-auto object-cover block sm:hidden"
      />

      <div className="absolute top-1/9 right-0 translate-x-12 text-white w-[343px] sm:w-[400px] p-4 sm:p-0 z-10 hidden sm:block">
        <div className="flex flex-col justify-start space-y-2">
          <p
            className="text-[16px]"
            style={{
              fontFamily: "'Neue Plak Bold', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Project Rock
          </p>
          <p
            className="leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Neue Plak Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "64px",
            }}
          >
            EVERY SIDE OF STRONG
          </p>
        </div>

        <p
          className="mt-2 text-[12px] max-w-xs"
          style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
          }}
        >
          The Underground collection is inspired by the idea of a Project Rock
          fight club. A place where we push each other harder to make each other
          stronger. A drop dedicated to you and your crew. The neon colourways
          are a reflection of the energy we bring to every rep, every set and
          every challenge.
        </p>

        <button
          className="mt-4 text-[16px] border border-white text-white py-2 px-4 bg-transparent w-[213px]"
          style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
          }}
        >
          Shop Project Rock
        </button>
      </div>

      <div className="block sm:hidden mt-4 px-4 text-black">
        <p className="text-[12px]" style={{
              fontFamily: "'Neue Plak Bold', sans-serif",
              fontWeight: 700,
            }}>
          Project Rock
        </p>
        <p
          className="text-[36px] leading-[1.1] tracking-tight"
         style={{
              fontFamily: "'Neue Plak Condensed', sans-serif",
            }}
        >
          EVERY SIDE OF STRONG
        </p>

        <p className="mt-4 text-[12px]"   style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
          }}>
          The Underground collection is inspired by the idea of a Project Rock
          fight club. A place where we push each other harder to make each other
          stronger. A drop dedicated to you and your crew. The neon colourways
          are a reflection of the energy we bring to every rep, every set and
          every challenge.
        </p>

        <button
          className="mt-4 text-[14px] bg-black text-white py-2 px-4 w-[355px] max-[450px]:w-full"
          style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
          }}
        >
          Shop Project Rock
        </button>
      </div>
    </div>
  );
};

export default TextOverlay;
