import React from "react";
import {
  menus1,
  menus2,
  menus3,
  menus4,
  menus5,
  menus6,
  shape5,
  shape6,
  separator,
} from "../assets";
import Button from "./canvas/Button";

const Menu = () => {
  const navMenu = [
    {
      img: menus1,
      title: "Greek Salad",
      badge: "Seasonal",
      price: "$25.00",
      subTitle:
        "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    },
    {
      img: menus2,
      title: "Lasagne",
      price: "$40.00",
      subTitle:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    },
    {
      img: menus3,
      title: "Butternut Pumpkin",
      price: "$10.00",
      subTitle:
        "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    },
    {
      img: menus4,
      title: "Tokusen Wagyu",
      badge: "New",
      price: "$39.00",
      subTitle:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
      img: menus5,
      title: "Olivas Rellenas",
      price: "$25.00",
      subTitle:
        "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper",
    },
    {
      img: menus6,
      title: "Opu Fish",
      price: "$49.00",
      subTitle:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
  ];

  return (
    <section className="relative bg-smoky-black-3 py-20">
      <div className="relative z-50">
        {/* Section Title */}
        <div className="text-sm font-dm-sans uppercase text-gold-crayola tracking-2 animate-sliderReveal">
          <p className="text-center">Special Selection</p>
          <img src={separator} alt="Separator" className="w-24 m-auto py-5" />
        </div>

        {/* Menu Heading */}
        <div className="items-center text-center py-20 ">
          <h2 className="font-forum text-5xl text-white">Delicious Menu</h2>
        </div>

        {/* Menu List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 lg:px-36 z-50">
          {navMenu.map((item, index) => (
            <li
              key={index}
              className="text-left rounded-lg shadow-lg overflow-hidden"
            >
              {/* Menu Image */}
              <div className="flex gap-5">
                <div className="items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className=" min-w-[100px] h-[100px] object-cover"
                  />
                </div>

                {/* Menu Content */}
                <div className="lg:py-5">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-5 md:justify-between">
                    <div className="flex gap-5">
                      <h3 className="text-xl text-white font-forum hover:text-gold-crayola lg:whitespace-nowrap">
                        {item.title}
                      </h3>
                    </div>
                    {item.badge && (
                      <span className="w-20 font-forum uppercase text-sm text-eerie-black-1 px-2 py-1 bg-gold-crayola font-bold">
                        {item.badge}
                      </span>
                    )}
                    <span className="hidden md:block horizontal"></span>
                    <span className="font-semibold font-forum text-2xl text-gold-crayola">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-quick-silver pt-2">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center py-10 ">
          <p className="text-white font-bold py-10">
            During winter daily from{" "}
            <span className="text-gold-crayola">7:00 pm</span> to{" "}
            <span className="text-gold-crayola">9:00 pm</span>
          </p>
          <Button>View All Menu</Button>
        </div>
      </div>

      {/* Shapes */}
      <div className="relative">
        <img
          src={shape5}
          alt=""
          className="bottom-0 left-0 w-[50%] absolute animate-move hidden md:block z-0"
        />
        <img
          src={shape6}
          alt=""
          className="bottom-0 right-0 w-[50%] absolute animate-move hidden md:block z-0"
        />
      </div>
    </section>
  );
};

export default Menu;
