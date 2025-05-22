import React from "react";

const AnotherOne: React.FC = () => {
  const gearItems = [
    { src: "/assets/Promo 1.jpg", alt: "P1" },
    { src: "/assets/Promo 4.jpg", alt: "P2" },
    { src: "/assets/Promo 2.jpg", alt: "P3" },
    { src: "/assets/Promo 3.jpg", alt: "P4" },
  ];

  return (
    <div className="mt-[40px] sm:mt-[60px] px-4 w-full">
      <div className="max-w-[1072px] mx-auto flex flex-col gap-2">
        <p
          className="text-[24px] font-bold text-black"
          style={{
            fontFamily: "'Neue Plak Bold', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
          }}
        >
          Discover our latest promotions
        </p>
        <p
          className="text-[14px] font-normal text-black"
          style={{
            fontFamily: "'Neue Plak Regular', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Get the best deals on the best gear.
        </p>
        <div className="hidden sm:flex gap-[12px] flex-wrap justify-start">
          {gearItems.map((item, index) => (
            <div className="flex-shrink-0" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-64 h-auto mb-2 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="sm:hidden flex overflow-x-auto gap-[12px] scrollbar-hide py-2">
          {gearItems.map((item, index) => (
            <div className="flex-shrink-0 w-[256px]" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnotherOne;
