import React from "react";

const GridPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-[60px]">
      <div className="w-[1072px] mx-auto flex flex-col gap-2">
        <p
          className="font-sens text-[24px] mb-0 w-full whitespace-nowrap text-black"
          style={{ fontFamily: "Bold Black" }}
        >
          What’s happening on Instagram
        </p>
        <p
          className="font-sens w-full mb-2 whitespace-nowrap text-black text-[12px]"
          style={{ fontFamily: "Regular  Black" }}
        >
          Don’t miss out on the latest news and updates from Under Armour.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[744px]">
          <div className="col-span-1 row-span-2">
            <video className="w-full h-full object-cover" muted loop autoPlay>
              <source src="/assets/ig_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="row-span-1">
            <img
              src="/assets/IG Image 2_DT.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1">
            <img
              src="/assets/IG Image 3_DT.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="row-span-1">
            <img
              src="/assets/IG Image 4_DT.jpg"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1">
            <img
              src="/assets/IG Image 5_DT.jpg"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
