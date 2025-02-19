import React from "react";
import {
  specialDishBanner,
  badge1,
  shape4,
  shape9,
  separator,
} from "../assets";
import Button from "./canvas/Button";

const SpecialDish = () => {
  return (
    <section className="bg-smoky-black-1">
      <div className="grid lg:grid-cols-2  gap-10 pt-28">
        <div className="">
          <img
            src={specialDishBanner}
            alt="specialDishBanner"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative">
          <div>
            <img
              src={badge1}
              alt="badge1"
              className="w-[28px] h-[41px] absolute top-[-20px] left-1/2 transform -translate-x-1/2 
             sm:top-[-20px] sm:left-1/2 
             md:top-[-20px] md:left-1/2 
             lg:top-10 lg:left-32 lg:animate-move"
            />

            <div className="text-sm font-dm-sans py-10 uppercase text-gold-crayola tracking-2 animate-sliderReveal">
              <p className="text-center">Special Dish</p>
              <img
                src={separator}
                alt="Separator"
                className="w-24 m-auto py-5"
              />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="font-forum text-center py-5 text-white text-5xl">
                Lobster Tortellini
              </h2>

              <p className="text-white font-dm-sans lg:max-w-[350px] text-center">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </p>
            </div>

            <div className="flex flex-col items-center ">
              <div className="py-10 items-start font-dm-sans ">
                <del className="text-1xl text-quick-silver">$40.00</del>
                <span className=" text-2xl mx-5 text-gold-crayola">$20.00</span>
              </div>
              <a href="#" className="z-30">
                <Button>View All Menu</Button>
              </a>
            </div>
          </div>
          <img
            src={shape4}
            alt="shape4"
            className=" absolute right-0 top-[25%] hidden lg:block"
          />

          <img
            src={shape9}
            alt="shape9"
            className="absolute right-0 -bottom-[22%] hidden lg:block z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialDish;
