import React from "react";
import Logo from "../../svg/Logo";

const Navbar = () => {
  return (
    <nav className=" py-5 px-20 flex justify-between items-center border-b border-gray-200">
      <Logo />
      <ul className="flex gap-6 font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Contact Sales</li>
      </ul>
      <ul className="flex font-semibold items-center">
        <li className="mr-3 cursor-pointer">Track Shipment</li>
        <span
          className="h-8 mr-3 border border-slate-100"
          style={{
            borderColor:
              "transparent transparent transparent rgba(0, 0, 0, 0.5)",
          }}
        ></span>
        <li className="mr-4 cursor-pointer">Sign in</li>
        <li className="text-red-600 cursor-pointer">العربية</li>
      </ul>
    </nav>
  );
};

export default Navbar;
