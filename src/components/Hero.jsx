import React, { useEffect, useState } from "react"; // Thêm useEffect
import Button from "./canvas/Button";
import {
  heroSlider1,
  heroSlider2,
  heroSlider3,
  heroIcon,
  separator,
} from "../assets";

const slides = [
  {
    img: heroSlider1,
    subtitle: "Traditional & Hygiene",
    title: "For the love of  delicious food",
    text: "Come with family & feel the joy of mouthwatering food",
  },
  {
    img: heroSlider2,
    subtitle: "Delightful experience",
    title: "Flavors Inspired by the Seasons",
    text: "Come with family & feel the joy of mouthwatering food",
  },
  {
    img: heroSlider3,
    subtitle: "Amazing & Delicious",
    title: "Where every flavor tells a story",
    text: "Come with family & feel the joy of mouthwatering food",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Tính năng tự động chuyển slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Thay đổi mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị tháo rời
  }, []); // Chỉ chạy một lần khi component được mount

  return (
    <section
      className=" min-h-screen overflow-hidden text-center z-10"
      aria-label="home"
      id="home"
    >
      <ul>
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full grid place-content-center transition-opacity duration-1000 z-10
            ${
              index === currentSlide
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full transform scale-115 pointer-events-none select-none -z-10 animate-smoothScale">
              <img
                src={slide.img}
                alt="slider"
                className="w-full md:h-full h-full object-cover"
              />
            </div>

            <p className="text-sm font-dm-sans uppercase text-gold-crayola tracking-1 animate-sliderReveal">
              {slide.subtitle}
              <img src={separator} alt="" className="w-24 m-auto py-5" />
            </p>

            <h1 className="text-8xl font-forum text-white font-bold animate-sliderReveal delay-500">
              {slide.title.split("").slice(0, 15).join("")} <br />
              {slide.title.split("").slice(15).join("")}
            </h1>

            <p className="text-lg font-dm-sans tracking-1 text-white py-14 animate-sliderReveal delay-700">
              {slide.text}
            </p>

            <a
              href="#"
              className="btn btn-primary animate-sliderReveal delay-1000"
            >
              <span className="border-2 uppercase font-dm-sans border-gold-crayola hover:bg-gold-crayola hover:text-black-alpha-80 w-20 text-gold-crayola px-8 py-5">
                View Our Menu
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute w-14 h-14 border border-gold-crayola rotate-45 z-30 left-10 top-1/2 transform -translate-y-1/2 
  items-center justify-center hover:bg-gold-crayola transition-colors"
      >
        <span className="text-gold-crayola hover:text-black text-2xl rotate-[-45deg]">
          &lt;
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute w-14 h-14 border border-gold-crayola rotate-45 z-30 right-10 top-1/2 transform -translate-y-1/2 
  items-center justify-center hover:bg-gold-crayola transition-colors"
      >
        <span className="text-gold-crayola hover:text-black text-2xl rotate-[-45deg]">
          &gt;
        </span>
      </button>

      <a
        href="#"
        className="absolute bottom-4 right-4 bg-gold-crayola w-28 h-28 p-3 z-20 flex flex-col items-center justify-center scale-75"
      >
        {/* Border Effect */}
        <span className="absolute inset-0 border-2 border-gold-crayola scale-90 transform rotate-45 animate-spin" />
        <img src={heroIcon} alt="hero icon" className="mb-2 z-10" />
        <span className="text-md font-semibold text-black uppercase">
          Book A Table
        </span>
      </a>
    </section>
  );
};

export default Hero;
