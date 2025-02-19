import React from "react";
import { footerBg, logo, footerFormBg, footerFormPattern } from "../assets";

import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const navList = [
    {
      nav: "Home",
    },
    {
      nav: "Menus",
    },
    {
      nav: "About Us",
    },
    {
      nav: "Our Chefs",
    },
    {
      nav: "Contact",
    },
  ];

  const navContacts = [
    {
      nav: "Facebook",
    },
    {
      nav: "Instagram",
    },
    {
      nav: "Twitter",
    },
    {
      nav: "Youtube",
    },
    {
      nav: "Google Map",
    },
  ];

  return (
    <footer className="bg-smoky-black-1 relative">
      {/* Hình nền footer */}
      <img
        src={footerBg}
        alt="Background image of footer"
        className="w-full h-[950px]"
        loading="lazy"
      />

      {/* Bố cục 3 cột của footer */}
      <div className="absolute top-0 w-full gap-10 p-8  grid md:grid-cols-1 grid-cols-1 lg:grid-cols-customFooter">
        {/* Menu liên kết */}
        <div className="relative w-full h-full flex items-center justify-center text-quick-silver">
          <ul className="gap-5 lg:flex-col flex items-center justify-center text-center lg:space-y-2">
            {navList.map((item) => (
              <li key={item.nav} className="hover-underline">
                <a
                  href="#"
                  className="hover:text-gold-crayola font-dm-sans font-bold text-sm tracking-wide uppercase"
                >
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Phần logo và thông tin */}
        <div className="bg-eerie-black-3 relative text-center ">
          <figure className="relative">
            <div>
              <img
                src={footerFormBg}
                alt="Form background"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src={footerFormPattern}
              alt="Left pattern border"
              className="absolute left-0 top-0 w-[15px] h-full"
            />
            <img
              src={footerFormPattern}
              alt="Right pattern border"
              className="absolute right-0 top-0 w-[15px] h-full"
            />
          </figure>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="pb-5">
              <img
                src={logo}
                alt="Company Logo"
                className="w-[160px] h-[50px]"
                loading="lazy"
              />
            </div>
            <address className="text-quick-silver not-italic mb-4">
              Restaurant St, Delicious City, London 9578, UK
            </address>
            <a
              href="mailto:booking@grilli.com"
              className="block text-quick-silver hover:text-gold-crayola mb-2"
            >
              booking@grilli.com
            </a>
            <a
              href="tel:+88123123456"
              className="text-quick-silver hover:text-gold-crayola mb-2"
            >
              Booking Request: +88-123-123456
            </a>
            <p className="text-quick-silver mb-4">Open: 09:00 am - 01:00 pm</p>

            <div className="flex py-6 items-center text-center">
              <div className="border border-gold-crayola w-2 h-2 animate-rotate360 rotate-45"></div>
              <div className="border border-gold-crayola w-2 h-2 animate-rotate360 rotate-45"></div>
              <div className="border border-gold-crayola w-2 h-2 animate-rotate360 rotate-45"></div>
            </div>

            {/* Subscription Form */}
            <div className="mt-6 w-full max-w-sm">
              <p className="text-white font-forum text-2xl pb-2 font-bold">
                Get News & Offers
              </p>
              <p className="text-quick-silver font-forum">
                Subscribe to us & Get{" "}
                <span className="text-white">25% Off.</span>
              </p>

              <form className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-center py-5 mt-4">
                <div className="relative flex items-center w-full">
                  <FaEnvelope className="absolute left-3 text-quick-silver" />
                  <input
                    type="email"
                    placeholder="Your Mail"
                    className="pl-10 pr-3 py-2 bg-eerie-black-4 border border-gold-crayola w-full"
                  />
                </div>
                <button className="font-dm-sans  w-full md:w-auto bg-gold-crayola border border-gold-crayola text-black-alpha-80 py-2 px-4 uppercase hover:bg-black-alpha-80 hover:text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Menu liên hệ */}
        <div className="relative w-full h-full flex items-center justify-center text-quick-silver">
          <ul className="gap-5 lg:flex-col flex items-center justify-center text-center lg:space-y-2">
            {navContacts.map((item) => (
              <li key={item.nav} className="hover-underline">
                <a
                  href="#"
                  className="hover:text-gold-crayola font-dm-sans font-bold text-sm tracking-wide uppercase"
                >
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Thông tin bản quyền */}
      <div className="absolute bottom-32 md:bottom-0 w-full items-center justify-center text-center text-quick-silver text-sm ">
        <p>
          &copy; 2022 Grilli. All Rights Reserved | Crafted by{" "}
          <a href="#" className="text-gold-crayola">
            Trương Văn Thanh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
