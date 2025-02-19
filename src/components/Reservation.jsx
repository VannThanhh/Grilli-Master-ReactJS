import React from "react";
import { testimonialBg, testiAvatar, formPattern } from "../assets";
import { FaUser, FaCalendarAlt, FaClock, FaChevronDown } from "react-icons/fa";
import Button from "./canvas/Button";

const personOptions = Array.from({ length: 7 }, (_, i) => `${i + 1} Person`);
const timeOptions = [
  "08:00 am",
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
  "06:00 pm",
  "07:00 pm",
  "08:00 pm",
  "09:00 pm",
  "10:00 pm",
];

const Reservation = () => {
  const ReservationForm = () => (
    <div className="relative flex flex-col lg:grid lg:grid-cols-customFrom -mt-[240px] px-10 lg:px-36 py-16 z-30">
      {/* Reservation Form */}
      <form className="bg-smoky-black-1 md:px-10 lg:px-20 space-y-8">
        <h2 className="text-white text-center font-forum text-3xl md:text-6xl pt-10">
          Online Reservation
        </h2>
        <p className="text-white  text-center font-dm-sans px-2">
          Booking request{" "}
          <a href="tel:+88123123456" className="text-gold-crayola">
            +88-123-123456
          </a>{" "}
          or fill out the order form
        </p>

        {/* Name and Phone Fields */}
        <div className="flex flex-col sm:flex-row text-white gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="off"
            className="bg-eerie-black-2 h-14 px-4 w-full text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            autoComplete="off"
            className="bg-eerie-black-2 h-14 px-4 w-full text-white"
          />
        </div>

        {/* Selection Fields */}
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          {/* Person Selection */}
          <div className="relative w-full">
            <FaUser
              className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            <select
              name="person"
              className="bg-eerie-black-2 h-14 pl-10 pr-8 w-full text-white appearance-none"
            >
              {personOptions.map((option, index) => (
                <option key={index} value={`${index + 1}-person`}>
                  {option}
                </option>
              ))}
            </select>
            <FaChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              aria-hidden="true"
            />
          </div>

          {/* Date Selection */}
          <div className="relative w-full">
            <FaCalendarAlt
              className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="date"
              name="reservation-date"
              className="bg-eerie-black-2 h-14 pl-10 pr-8 w-full text-white appearance-none"
            />
            <FaChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              aria-hidden="true"
            />
          </div>

          {/* Time Selection */}
          <div className="relative w-full">
            <FaClock
              className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            <select
              name="time"
              className="bg-eerie-black-2 h-14 pl-10 pr-8 w-full text-white appearance-none"
            >
              {timeOptions.map((time, index) => (
                <option
                  key={index}
                  value={time.replace(" ", "-").toLowerCase()}
                >
                  {time}
                </option>
              ))}
            </select>
            <FaChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Message"
          autoComplete="off"
          className="bg-eerie-black-2 w-full h-36 p-4 text-white"
        ></textarea>
        <div className="text-center w-full py-5">
          <button className="border-2 uppercase font-dm-sans bg-gold-crayola hover:bg-black-alpha-80 hover:text-white w-full  text-text-black-alpha-80 px-8 py-5">
            Book A Table
          </button>
        </div>
      </form>

      {/* Contact Information Section */}
      <div className="relative bg-smoky-black-1 md:top-5 lg:top-0 text-white space-y-8">
        <img
          src={formPattern}
          alt="Contact Pattern"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 inset-0 flex flex-col items-center space-y-6 lg:px-5 lg:pt-">
          <h2 className="font-forum text-5xl text-center">Contact Us</h2>

          <div className="flex flex-col items-center space-y-2">
            <p className="font-dm-sans text-lg">Booking Request</p>
            <a
              href="tel:+88123123456"
              className="text-gold-crayola text-xl font-bold"
            >
              +88-123-123456
            </a>
          </div>

          <div>
            <div className="border border-gold-crayola w-2 h-2 t-5 rotate-45"></div>
          </div>

          <div className="text-center space-y-2">
            <p className="font-dm-sans text-lg">Location</p>
            <address className="not-italic text-quick-silver">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
          </div>

          <div className="text-center space-y-2">
            <p className="font-dm-sans text-lg">Lunch Time</p>
            <p className="text-lg text-quick-silver">
              Monday to Sunday <br />
              11.00 am - 2.30 pm
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="font-dm-sans text-lg">Dinner Time</p>
            <p className="text-lg text-quick-silver">
              Monday to Sunday <br />
              05.00 pm - 10.00 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-smoky-black-1 relative">
      <div className="relative">
        <figure className="relative">
          <img
            src={testimonialBg}
            alt="Background of testimonials"
            className="w-full min-h-[1000px] object-fill"
          />
        </figure>
        <div className="absolute top-10 inset-0 flex flex-col items-center justify-center  px-4">
          {/* Quotation mark */}
          <div className="text-center text-white text-5xl font-forum">”</div>

          {/* Testimonial text */}
          <p className="font-forum text-white text-2xl md:text-5xl text-center max-w-3xl mx-auto">
            I wanted to thank you for inviting me down for that amazing dinner
            the other night. The food was extraordinary.
          </p>

          {/* Decorative diamonds */}
          <div className="flex py-6 items-center text-center ">
            <div className="border border-gold-crayola w-2 h-2 animate-rotate360 rotate-45"></div>
            <div className="border border-gold-crayola w-2 h-2 animate-rotate360 rotate-45"></div>
            <div className="border border-gold-crayola w-2 h-2 animate-rotate360 rotate-45"></div>
          </div>

          {/* Avatar and name */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={testiAvatar}
              alt="Testimonial Avatar"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
            <p className="text-xl text-gold-crayola py-5 uppercase font-forum ">
              Sam Johnson
            </p>
          </div>
        </div>
      </div>

      <ReservationForm />
    </section>
  );
};

export default Reservation;
