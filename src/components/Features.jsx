import React from "react";
import {
  separator,
  featuresIcon1,
  featuresIcon2,
  featuresIcon3,
  featuresIcon4,
  shape7,
  shape8,
} from "../assets";
const Features = () => {
  const navFeatures = [
    {
      img: featuresIcon1,
      title: "Hygienic Food",
      subTitle: "Lorem Ipsum is simply dummy printing and typesetting",
    },
    {
      img: featuresIcon2,
      title: "Fresh Environment",
      subTitle: "Lorem Ipsum is simply dummy printing and typesetting",
    },
    {
      img: featuresIcon3,
      title: "Skilled Chefs",
      subTitle: "Lorem Ipsum is simply dummy printing and typesetting",
    },
    {
      img: featuresIcon4,
      title: "Event & Party",
      subTitle: "Lorem Ipsum is simply dummy printing and typesetting",
    },
  ];
  return (
    <section className="bg-smoky-black-3">
      <div className="relative">
        <div className="text-sm font-dm-sans uppercase text-gold-crayola tracking-2 pt-20">
          <p className="text-center">Why Choose Us</p>

          <img src={separator} alt="" className="w-24 mx-auto pt-3" />
        </div>

        <h2 className="text-white text-5xl text-center font-forum pt-10 ">
          Our Strength
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-32 py-10 md:py-20">
          {navFeatures.map((item) => (
            <li
              key={item}
              className="bg-eerie-black-3 py-4 flex flex-col items-center gap-4"
            >
              <img
                src={item.img}
                alt=""
                className="w-[100px] h-[80px] object-cover  transition duration-500  hover:animate-spin"
              />

              <div className="text-center">
                <h3 className="font-forum text-white text-2xl py-2">
                  {item.title}
                </h3>

                <p className="text-quick-silver px-2 py-4">{item.subTitle}</p>
              </div>
            </li>
          ))}
        </ul>

        <img
          src={shape7}
          alt=""
          className="absolute right-0 -top-12 hidden lg:block"
        />
        <img
          src={shape8}
          alt=""
          className="absolute left-0 bottom-10 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Features;
