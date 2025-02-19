import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      className={`relative inline-block py-3 px-11 text-smoky-black-1  uppercase tracking-wide border-2 border-gold-crayola overflow-hidden max-w-max z-10 transition-all duration-300 ease-in-out bg-gold-crayola group ${className}`}
    >
      <span className="block transition-colors duration-300 ease-in-out">
        {children}
      </span>
      <div className="absolute inset-0 bg-gold-crayola transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:bg-black" />
      <span className="absolute inset-0 flex items-center justify-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        {children}
      </span>
    </a>
  );
};

export default Button;
