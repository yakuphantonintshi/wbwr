import React from "react";

const PictureOne: React.FC = () => {
  const gearItems = [
    { src: "/assets/Train.jpg", alt: "Train" },
    { src: "/assets/Run.jpg", alt: "Run" },
    { src: "/assets/Golf.jpg", alt: "Golf" },
    { src: "/assets/Accessories.jpg", alt: "Accessories" },
  ];

  return (
    <div className="mt-[60px] px-4">
      <div className="max-w-fit mx-auto flex flex-col gap-0">
        <p className="text-xl font-bold mb-[5px] text-black">Our best gear</p>
        <p className="w-full mb-2 font-normal whitespace-nowrap text-black">
          Unlock your potential with the best UA Gear
        </p>
        <div className="flex gap-2">
          {gearItems.map((item, index) => (
            <div className="flex flex-col items-start" key={index}>
              <img src={item.src} alt={item.alt} className="w-64 h-auto mb-2" />
              <p className="underline mt-2 text-black">Shop now</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureOne;