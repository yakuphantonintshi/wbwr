import React from "react";

const PictureOne: React.FC = () => {
  const gearItems = [
    { src: "/assets/Train.jpg", alt: "Train" },
    { src: "/assets/Run.jpg", alt: "Run" },
    { src: "/assets/Golf.jpg", alt: "Golf" },
    { src: "/assets/Accessories.jpg", alt: "Accessories" },
  ];

  return (
    <div className="mt-[40px] sm:mt-[60px] px-4 w-full">
      <div className="max-w-[1072px] mx-auto flex flex-col">
        <p
          className=" mb-[5px] text-black"
          style={{
            fontFamily: "'Neue Plak Bold', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
          }}
        >
          Our best gear
        </p>
        <p className="text-[14px] mb-4 text-black"   style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
          }}>
          Unlock your potential with the best UA Gear
        </p>
        <div className="hidden sm:flex gap-4 flex-wrap justify-start">
          {gearItems.map((item, index) => (
            <div className="flex flex-col items-start" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-64 h-auto mb-2 object-cover"
              />
              <p className="text-[12px] underline text-black" 
            style={{
            fontFamily: "'Neue Plak Semi', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
          }}>Shop now</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden flex overflow-x-auto gap-4 py-2 scrollbar-hide">
          {gearItems.map((item, index) => (
            <div className="flex-shrink-0 w-[256px]" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureOne;
