import { useWindowSize } from "usehooks-ts";
import Video from "./Video";

import mobileVideo from '/assets/UA_Theme_1_MB.mp4'
import desktopVideo from '/assets/UA_Theme_1_DT.mp4'

const VideoOverlay: React.FC = () => {
  const { width } = useWindowSize();

  // const videoUrl = width < 804 ? "/assets/UA_Theme_1_MB.mp4" : "/assets/UA_Theme_1_DT.mp4";

  const video = width < 804 ? mobileVideo : desktopVideo

  return (
    <div className="relative">
      {/* <Video videoUrl={videoUrl} /> */}
      <Video videoUrl={video} />

      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-4/12 flex flex-col gap-[30.5px] z-10">
        <p
          className="text-[100px] leading-[90%] w-[333px] h-[350px] m-0 p-0"
          style={{ fontFamily: "Condensed Black" }}
        >
          CHECK OUT OUR LATEST GEAR
        </p>
        <p
          className="font-sans w-[170px] h-[54px] text-[12px] leading-[120%] text-black m-0 p-0 mb-1"
          style={{ fontFamily: "Regular Black" }}
        >
          Advanced tech, superior comfort and all performance is what our latest
          UA gear is all about. Built to go further, push hard and break your
          boundaries.
        </p>
        <button
          className="font-sans text-[14px] bg-black text-white w-[258.8px] h-[43.57px] rounded-[1.74px] px-[34.86px]"
          style={{ fontFamily: "Regular Black" }}
        >
          Shop UA New Arrivals
        </button>
      </div>
    </div>
  );
};

export default VideoOverlay;
