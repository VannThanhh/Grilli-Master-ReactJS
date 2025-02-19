// src/components/Navbar.jsx
import React, { useState } from "react"; // Nhớ import useState
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { logo } from "../assets"; // Import logo từ thư mục assets
import { navLinks } from "../contants"; // Import danh sách liên kết điều hướng từ contants
import Button from "./canvas/Button"; // Import component Button từ thư mục canvas

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Quản lý trạng thái mở menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Hàm để chuyển đổi trạng thái mở menu
  };

  return (
    <nav className="relative z-50">
      <div className="hidden md:justify-center lg:justify-between md:flex items-center p-4">
        {/* Mục bên trái - Hiển thị thông tin địa chỉ và giờ mở cửa */}
        <div className="sm:hidden md:hidden lg:flex items-center text-white">
          <div className="flex items-center text-sm">
            <div className="flex-shrink-0 pr-2">
              <FaMapMarkerAlt />
            </div>
            <span>Restaurant St, Delicious City, London 9578, UK</span>
          </div>
          <div className="px-5 font-bold">
            <div className="border border-gold-crayola w-2 h-2 rotate-45"></div>
          </div>
          <div className="flex items-center text-sm">
            <div className="flex-shrink-0 pr-2">
              <FaClock />
            </div>
            <span>Daily: 8.00 am to 10.00 pm</span>
          </div>
        </div>

        {/* Mục bên phải - Hiển thị thông tin liên lạc */}
        <div className="  md:flex md:items-center items-center text-white cursor-pointer z-40">
          <div className="flex items-center hover:text-gold-crayola">
            <div className="flex-shrink-0 pr-2 text-sm">
              <FaPhone />
            </div>
            <span>+1 123 456 7890</span>
          </div>
          <div className="px-5">
            <div className="border border-gold-crayola w-2 h-2 rotate-45"></div>
          </div>
          <div className="flex items-center hover:text-gold-crayola cursor-pointer">
            <div className="flex-shrink-0 pr-2 text-sm">
              <FaEnvelope />
            </div>
            <span>booking@restaurant.com</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block border-t border-quick-silver w-full"></div>

      {/* Menu Links và Logo */}
      <div className="pt-6">
        <nav className="hidden lg:flex items-center justify-between p-4">
          <img src={logo} alt="Logo" className="w-40 h-12" />{" "}
          {/* Hiển thị logo */}
          {/* Menu Links */}
          <ul className="md:hidden lg:flex gap-3 space-x-4">
            {navLinks.map((item) => (
              <li key={item.id} className="list-none">
                <a
                  href={`#${item.id}`}
                  className="text-white text-sm hover-underline uppercase font-dm-sans hover:text-gold-crayola"
                  aria-label={`Go to ${item.title}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Nút "Find A Table" chỉ hiển thị trên màn hình lớn */}
          <div className="hidden md:block">
            <Button href="#">Find A Table</Button>
          </div>
        </nav>
      </div>

      <nav className="fixed top-0 left-0 w-full bg-transparent  ">
        <div className="items-center justify-between p-4 hidden">
          <img src={logo} alt="Logo" className="w-40 h-12" />

          {/* Menu Links cho màn hình lớn */}
          <ul className="gap-3 space-x-4 hidden">
            {navLinks.map((item) => (
              <li key={item.id} className="list-none">
                <a
                  href={`#${item.id}`}
                  className="text-white text-sm hover-underline uppercase font-dm-sans hover:text-gold-crayola"
                  aria-label={`Go to ${item.title}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Nút Toggle cho màn hình nhỏ */}
        <div className=" flex items-center justify-between md:pt-16 mt-5 lg:hidden z-40">
          <img src={logo} alt="Logo" className="w-40 h-12" />
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaBars /> : <FaBars />}
          </button>
        </div>

        {/* Overlay Menu cho màn hình nhỏ */}
        {menuOpen && (
          <div className="fixed max-w-[360px] duration-2 inset-0 bg-black bg-opacity-80  flex flex-col items-center justify-center space-y-4 text-white ">
            <button
              className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 rounded-full border border-quick-silver text-white text-sm focus:outline-none"
              onClick={() => setMenuOpen(false)} // Nút đóng menu
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <img src={logo} alt="Logo" className="w-40 h-12 " />

            <ul className="space-y-6 py-10 flex flex-col items-start">
              {navLinks.map((item, index) => (
                <li
                  key={item.id}
                  className="list-none flex items-center gap-2 group"
                >
                  {/* Separator (chỉ hiển thị với mục đầu tiên hoặc khi hover vào các mục khác) */}
                  <div
                    className={`border duration-1 border-gold-crayola w-2 h-2 rotate-45 transition-all ${
                      index === 0 ? "flex" : "hidden group-hover:flex"
                    }`}
                  ></div>

                  <a
                    href={`#${item.id}`}
                    className="text-white transition-duration-1 tracking-1 text-sm hover-underline uppercase font-dm-sans hover:text-gold-crayola"
                    aria-label={`Go to ${item.title}`}
                    onClick={() => setMenuOpen(false)} // Đóng menu khi nhấn vào mục
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Thông tin liên hệ - Ẩn trên màn hình lớn */}
            <div className=" flex flex-col text-white items-center space-y-2 ">
              <p className="text-4xl font-forum font-bold">Visit Us</p>
              <address className="not-italic text-quick-silver text-center">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>
              <p className="text-quick-silver">Open: 9.30 am - 2.30 pm</p>
              <a
                href="mailto:booking@grilli.com"
                className="underline text-quick-silver pb-5"
                aria-label="Email us at booking@grilli.com"
              >
                booking@grilli.com
              </a>
              <div className="border border-gold-crayola w-2 h-2 rotate-45 "></div>
              <p className="font-bold pt-5 ">Booking Request</p>
              <a
                href="tel:+88123123456"
                className="underline text-2xl text-gold-crayola"
                aria-label="Call us at +88-123-123456"
              >
                +88-123-123456
              </a>
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
