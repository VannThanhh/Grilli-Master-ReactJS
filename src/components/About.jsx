import React from "react";
import Button from "./canvas/Button";
import {
  badge2,
  shape3,
  badgeBg2,
  separator,
  imgPattern,
  aboutBanner,
  aboutAbsImage,
} from "../assets";

const About = () => {
  return (
    <section className="bg-smoky-black-3 py-32 relative">
      <div className="relative lg:grid lg:grid-cols-custom flex flex-col gap-10">
        {/* Phần trái */}
        <div className="flex flex-col items-center relative z-20">
          {/* Tiêu đề */}
          <div className="text-sm font-dm-sans  uppercase text-gold-crayola tracking-2 animate-sliderReveal">
            <p className="text-center">Our Story</p>
            <img src={separator} alt="Separator" className="w-24 m-auto py-5" />
          </div>

          {/* Nội dung chính */}
          <div className="flex flex-col items-center z-30">
            <h2 className="text-white text-5xl text-center font-forum py-5">
              Every Flavor Tells a Story
            </h2>
            <p className="text-white text-sm text-center max-w-[420px] mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry’s standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries, but also the leap into.
            </p>
            <div className="text-white text-center text-lg font-bold font-dm-sans py-5">
              Book Through Call
            </div>
          </div>

          {/* Liên hệ và nút */}
          <div className="flex flex-col">
            <a href="tel:+804001234567" className="text-gold-crayola text-2xl">
              +80 (400) 123 4567
            </a>
            <a href="#" className="py-5 flex justify-center">
              <Button>Read More</Button>
            </a>
          </div>
        </div>

        {/* Phần hình ảnh */}
        <figure className="relative sm:pt-10 flex justify-center items-center z-10">
          <div className="">
            <img
              src={imgPattern}
              alt="img pattern background"
              className="absolute w-[140px] h-auto top-[120px] 
       bg-contain bg-no-repeat bg-center hover:rotate-360 transition-all duration-300 "
            />

            <img
              src={aboutAbsImage}
              alt="aboutAbsImage"
              className="absolute w-[285px] h-[285px] left-0 md:left-[80px] -bottom-[69px] z-10"
              loading="lazy"
            />
          </div>

          <img
            src={aboutBanner}
            alt="aboutBanner"
            className="w-[570px] h-[570px] z-0"
            loading="lazy"
          />

          <div>
            <img
              src={badgeBg2}
              alt="badgeBg2"
              className="absolute w-[133px] h-[134px] -top-[56px] right-[122px] z-20 animate-rotate360"
              loading="lazy"
            />
            <img
              src={badge2}
              alt="badge2"
              className="absolute w-[133px] h-[134px] -top-[56px] right-[122px] z-20"
              loading="lazy"
            />
          </div>
        </figure>
      </div>

      {/* Hình ảnh shape3 nằm phía trên nội dung */}
      <div className=" absolute lg:block hidden  top-[34%] -left-1">
        <img
          src={shape3}
          alt="shape3"
          className="w-[197px] h-[197px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
