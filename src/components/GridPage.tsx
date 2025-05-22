import React from "react";

const GridPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-[40px] sm:mt-[60px] px-4">
      <div className="w-full max-w-[1072px] mx-auto flex flex-col gap-2">
        <p
          className="font-sens text-[24px] mb-0 w-full text-black 2xl:text-[28px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] max-[480px]:text-[18px] max-[375px]:text-[16px] max-[320px]:text-[14px]"
          style={{
            fontFamily: "'Neue Plak Bold', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
          }}
        >
          What's happening on Instagram
        </p>
        <p
          className="font-sens w-full mb-2 text-black text-[12px] 2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[11px] sm:text-[10px] max-[480px]:text-[10px] max-[375px]:text-[9px] max-[320px]:text-[8px]"
          style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Don't miss out on the latest news and updates from Under Armour.
        </p>
        <div className="hidden sm:grid grid-cols-3 grid-rows-2 gap-2 h-[744px]">
          <div className="col-span-1 row-span-2">
            <video
  className="w-full h-full object-cover"
  controls
  muted
  preload="metadata"
>
  <source src="/public/assets/ig_video.mp4" type="video/mp4" />
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
        <div className="sm:hidden flex flex-col gap-2">
          <div className="w-full h-[248px]">
            <video className="w-full h-full object-cover" controls
  muted
  preload="metadata">
              <source src="/assets/ig_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/assets/IG Image 2_DT.jpg"
              alt="Image 2"
              className="w-full h-full object-contain"
            />
            <img
              src="/assets/IG Image 3_DT.jpg"
              alt="Image 3"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/assets/IG Image 4_DT.jpg"
              alt="Image 4"
              className="w-full h-full object-contain"
            />
            <img
              src="/assets/IG Image 5_DT.jpg"
              alt="Image 5"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
