import React from "react";
import { separator, event1, event2, event3 } from "../assets";
import Button from "./canvas/Button";
const Event = () => {
  const navEvent = [
    {
      img: event1,
      time: "15/09/2022",
      title: "Food, Flavour",
      subTitle: " Flavour so good you’ll try to eat with your eyes.",
    },
    {
      img: event2,
      time: "08/09/2022",
      title: "Healthy Food",
      subTitle: " Flavour so good you’ll try to eat with your eyes.",
    },
    {
      img: event3,
      time: "03/09/2022",
      title: "Recipie",
      subTitle: " Flavour so good you’ll try to eat with your eyes.",
    },
  ];

  return (
    <section className="bg-smoky-black-1">
      <div className="py-20">
        <div className="text-sm font-dm-sans uppercase text-gold-crayola tracking-2 pt-20">
          <p className="text-center">Recent Updates</p>

          <img src={separator} alt="" className="w-24 mx-auto pt-3" />
        </div>
        <h2 className="text-white text-5xl text-center font-forum pt-10 ">
          Upcoming Event
        </h2>
        <ul className="relative grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 lg:px-32 py-14">
          {navEvent.map((item, index) => (
            <li
              key={item}
              className={` ${
                index === 2
                  ? "md:col-span-2 md:flex md:flex-col md:items-center lg:block lg:col-span-1"
                  : ""
              }`}
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-[350px] h-[450px] mx-autoobject-cover transition duration-200 hover:scale-105"
                  loading="lazy"
                />
                <time
                  className="bg-eerie-black-1 absolute font-forum font-bold left-4 md:left-10 lg:left-16 top-6 text-gold-crayola px-2"
                  dateTime={item.time}
                >
                  {item.time}
                </time>

                <div className="absolute bottom-0">
                  <p className="text-center text-xl text-gold-crayola font-forum uppercase tracking-1">
                    {item.title}
                  </p>

                  <h3 className="font-forum text-white text-center text-2xl px-10">
                    {item.subTitle}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center ">
          <Button>View Our Blog</Button>
        </div>
      </div>
    </section>
  );
};

export default Event;
