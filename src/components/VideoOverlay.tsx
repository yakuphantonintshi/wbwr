import { useWindowSize } from "usehooks-ts";
import Video from "./Video";

import mobileVideo from "/assets/UA_Theme_1_MB.mp4";
import desktopVideo from "/assets/UA_Theme_1_DT.mp4";

const VideoOverlay: React.FC = () => {
  const { width } = useWindowSize();

  const video = width < 804 ? mobileVideo : desktopVideo;

  return (
    <div className="relative">
      <Video videoUrl={video} />
      <div className="hidden min-[451px]:flex absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-4/12 flex-col gap-[30.5px] z-10 xl:gap-[30.5px] lg:gap-6 md:gap-4 sm:gap-3">
        <p
          className="leading-[90%] m-0 p-0
             xl:text-[93px] xl:w-[333px] xl:h-[250px]
             lg:text-[56px] lg:w-[280px] lg:h-[200px]
             md:text-[42px] md:w-[220px] md:h-[150px]
             sm:text-[36px] sm:w-[200px] sm:h-[130px]
             text-[30px] w-[333px] h-[250px]"
          style={{
            fontFamily: "'Neue Plak Condensed', sans-serif",
            fontWeight: 800,
          }}
        >
          CHECK OUT OUR LATEST GEAR
        </p>

        <p
          className="font-sans w-[258.8px] h-auto text-[12px] leading-[120%] text-black m-0 p-0 mb-1 xl:w-[258.8px] xl:h-auto xl:text-[14px] lg:w-[230px] lg:h-auto lg:text-[13px] md:w-[200px] md:h-auto md:text-[12px] sm:w-[180px] sm:h-auto sm:text-[11px]"
          style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "1.4",
          }}
        >
          Advanced tech, superior comfort and all performance is what our latest
          UA gear is all about. Built to go further, push hard and break your
          boundaries.
        </p>

        <button
          className="bg-black mt-4 text-white w-[258.8px] h-[43.57px] px-[34.86px] xl:text-[14px] xl:w-[258.8px] xl:h-[43.57px] xl:px-[34.86px] lg:text-[13px] lg:w-[230px] lg:h-[40px] lg:px-[30px] md:text-[12px] md:w-[200px] md:h-[36px] md:px-[24px] sm:text-[11px] sm:w-[180px] sm:h-[32px] sm:px-[20px]"
          style={{
            fontFamily: "'Neue Plak', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Shop UA New Arrivals
        </button>
      </div>
      <div className="min-[451px]:hidden">
        <div className="flex flex-col gap-4 pt-0 px-6">
          <p
            className="text-[50px] leading-[90%] m-0 p-0 font-bold text-black"
            style={{
              fontFamily: "'Neue Plak Condensed', sans-serif",
              fontWeight: 800,
            }}
          >
            CHECK OUT OUR LATEST GEAR
          </p>
          <p
            className="font-sans text-[11px] leading-[120%] text-black m-0 p-0 max-w-[280px]"
            style={{
              fontFamily: "'Neue Plak Regular', sans-serif",
              fontWeight: 400,
            }}
          >
            Advanced tech, superior comfort and all performance is what our
            latest UA gear is all about. Built to go further, push hard and
            break your boundaries.
          </p>
          <button
            className="font-sans text-[12px] bg-black text-white w-full max-[450px]:w-full h-[40px] px-6"
            style={{
              fontFamily: "'Neue Plak', sans-serif",
              fontWeight: 400,
            }}
          >
            Shop UA New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
