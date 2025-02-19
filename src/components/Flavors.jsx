import React from "react";
import {
  service1,
  service2,
  service3,
  separator,
  shape1,
  shape2,
  imgPattern,
} from "../assets";

const Flavors = () => {
  const flavorImg = [
    {
      id: "breakfast",
      img: service1,
      title: "Breakfast",
    },
    {
      id: "appetizers",
      img: service2,
      title: "Appetizers",
    },
    {
      id: "drinks",
      img: service3,
      title: "Drinks",
    },
  ];

  return (
    <section className="bg-smoky-black-2 py-16 relative">
      <div className="relative">
        <div className="text-sm font-dm-sans py-10 uppercase text-gold-crayola tracking-2 animate-sliderReveal">
          <p className="text-center">Flavors For Royalty</p>
          <img src={separator} alt="Separator" className="w-24 m-auto py-5" />
        </div>

        <div>
          <h2 className="text-5xl text-center text-white font-bold font-forum py-3">
            We Offer Top Notch
          </h2>
          <p className="text-quick-silver text-lg items-center text-center  font-dm-sans py-2 max-w-[420px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever.
          </p>
        </div>

        <img
          src={shape1}
          alt="Decorative shape"
          className="absolute hidden lg:block top-0 right-0 w-[246px] h-[412px] animate-move"
        />
        <img
          src={shape2}
          alt="Decorative shape"
          className="absolute hidden lg:block left-0 bottom-0 w-[246px] h-[412px] animate-move"
        />

        <ul className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
          {flavorImg.map((item, index) => (
            <li
              key={item.id}
              className={`text-center relative ${
                index === 0 || index === 2
                  ? "lg:transform lg:-translate-y-10 md:translate-y-0"
                  : ""
              } ${
                index === 2
                  ? "md:col-span-2 md:flex  md:flex-col md:items-center lg:block lg:col-span-1"
                  : ""
              }`}
            >
              <div className="relative">
                <img
                  src={imgPattern}
                  alt="img pattern background"
                  className="absolute w-[140px] h-auto -top-7 transform translate-x-full md:translate-x-[82%] lg:translate-x-[115%] bg-contain bg-no-repeat bg-center hover:rotate-360 transition-all duration-300"
                />
                <div className="relative flex justify-center px-10 items-center">
                  <a href={`#${item.id}`} className="block hover:shine">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[285px] h-[336px] object-cover transition-transform duration-300 hover:scale-105 z-10"
                    />
                  </a>
                </div>
              </div>

              <div className="py-10">
                <h3 className="text-white text-center font-forum font-bold text-2xl mb-5">
                  {item.title}
                </h3>
                <a
                  href={`#${item.id}`}
                  className="text-gold-crayola hover-underline text-sm uppercase font-dm-sans hover:text-white"
                >
                  View Menu
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Flavors;
