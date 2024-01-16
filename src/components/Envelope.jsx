"use client";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "@/Data/data";
import { kalam, mulish } from "@/app/fonts";

const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
  
    const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
  
    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div className="w-full h-screen flex justify-center items-end pb-28 relative bg-rose-900">
      {/* Complete Enelope */}
      <div className="w-80 h-60 relative">
        {/* Evelope 4 pages */}
        <div
          className="w-80 h-60 ring-4 ring-rose-800 overflow-hidden cursor-pointer  rounded-xl absolute"
          onClick={handleClick}
        >
          <div className="w-60 h-80 -right-[185px] absolute ring-2 ring-rose-800 -rotate-45 bg-white z-20 bg-gradient-to-l from-pink-600 via-pink-700 to-red-800"></div>
          <div className="w-60 h-80 -left-[185px] absolute ring-2 ring-rose-800 rotate-45 bg-white z-20 bg-gradient-to-r from-pink-600 via-pink-700 to-red-800"></div>
          <div className="w-60 h-80 left-3 -bottom-[185px] rounded-t-3xl absolute ring-2 ring-rose-800 rotate-45 z-20 bg-white bg-gradient-to-tr from-pink-600 via-pink-700 to-red-800"></div>
          <div
            className={`w-60 h-80 right-3 -top-[195px] rounded-b-3xl absolute ring-2 ring-rose-800 transition-all ease-out delay-300 bg-gradient-to-b from-pink-600 via-pink-700 to-red-800 ${
              isOpen ? "-z-50" : "rotate-45 z-20"
            }  bg-white`}
          ></div>
        </div>
        {/* Evelope Cards */}
        <div
          className={`w-full h-full absolute bg-black/40 ring-2 ring-white z-10 transition-all ease-out delay-300 rounded-xl p-1 text-white ${
            isOpen ? "-translate-y-32" : "translate-y-0"
          }`}
        >
          <MdChevronLeft
            size={30}
            className="bg-white left-1 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
            onClick={prevCard}
          />
          <div className="w-full h-full border-2 border-white border-dashed rounded-lg p-5 z-10">
            <div className="w-full h-full flex flex-col text-white text-center space-y-2">
              <h1 className={`font-semibold text-lg ${mulish.className}`}>{data[currentIndex].title}</h1>
              <p className={`${kalam.className}`}>{data[currentIndex].desc}</p>
            </div>
          </div>
          <MdChevronRight
            size={30}
            className="bg-white right-1 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
            onClick={nextCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Envelope;
