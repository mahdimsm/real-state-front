import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black ">
      <div
        className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 
      border-b-[1.5px] border-white border-opacity-20"
      >
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              HomeHub
            </h1>
          </div>
          <p className="text-gray-300 mt-6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id perferendis maxime nihil, rerum obcaecati.</p>
          <p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">+123 456 789</p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600"/>
            <FaTwitter className="w-6 h-6 text-sky-500"/>
            <FaYoutube className="w-6 h-6 text-red-700"/>
            <FaInstagram className="w-6 h-6 text-pink-600"/>
          </div>
        </div>
        {/* second part */}
        <div className="md:mx-auto">
            <h1 className="footer_heading"> Popular Search</h1>
            <p className="footer_link">Apartment Low to High</p>
            <p className="footer_link">Apartment For Rent</p>
            <p className="footer_link">Offices For Buy</p>
            <p className="footer_link">Offices For Rent</p>
        </div>
        {/* 3rd part*/}
        <div className="lg:mx-auto">
            <h1 className="footer_heading"> Quick Link</h1>
            <p className="footer_link">Term of use</p>
            <p className="footer_link">Privacy Policy</p>
            <p className="footer_link">Pricing Plan</p>
            <p className="footer_link">Our Services</p>
            <p className="footer_link">Privacy Policy</p>
            <p className="footer_link">Pricing Plan</p>
            <p className="footer_link">FAQs</p>
        </div>
        {/* 4rd part */}
        <div className="md:mx-auto">
            <h1 className="footer_heading"> Discover</h1>
            <p className="footer_link">Miami</p>
            <p className="footer_link">Los Angeles</p>
            <p className="footer_link">Chicago</p>
            <p className="footer_link">New York</p>
            <p className="footer_link">London</p>
       
        </div>
      </div>
      <p className="text-center mt-4 text-base text-white opacity-70">@Copyright 2024 by wbdev warriors</p>
    </div>
  );
};

export default Footer;
