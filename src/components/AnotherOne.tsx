import React from "react";

const AnotherOne: React.FC = () => {
  const gearItems = [
    { src: "/assets/Promo 1.jpg", alt: "P1" },
    { src: "/assets/Promo 4.jpg", alt: "P2" },
    { src: "/assets/Promo 2.jpg", alt: "P3" },
    { src: "/assets/Promo 3.jpg", alt: "P3" },
  ];

  return (
    <div className="mt-[60px] px-4">
      <div className="max-w-fit mx-auto flex flex-col gap-2">
        <p className="font-sens text-[24px] mb-0 w-full whitespace-nowrap text-black" style={{ fontFamily: "Bold Black" }}>
          Discover our latest promotions
        </p>
        <p className="font-sens text-[14] w-full mb-2 font-normal whitespace-nowrap text-black" style={{ fontFamily: "Regular Black" }}>
          Get the best deals on the best gear.
        </p>
        <div className="flex gap-[12px]">
          {gearItems.map((item, index) => (
            <div className="flex flex-col items-start" key={index}>
              <img src={item.src} alt={item.alt} className="w-64 h-auto mb-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnotherOne;
