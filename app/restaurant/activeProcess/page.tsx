import React from "react";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const Process = () => {
  return (
    <div className="relative my-[20px]">
      <Image
        src="/processBg.png"
        alt="Delicious food with vegetables and meat"
        className="w-full h-auto object-cover opacity-50"
        width={1920}
        height={600}
      />
      <div
        className="absolute inset-0 flex items-right justify-right
          px-[10px] sm:px-[20px] md:px-[40px] lg:pl-[500px] lg:pr-[100px]"
      >
        {" "}
        {/* Padding on different screen sizes */}
        <div
          className="text-right 
            max-w-[350px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1200px] mx-auto"
        >
          {/* Text alignment changes based on screen size */}

          <h2
            className="sm:text-[15px] md:text-[20px] lg:text-[30px] 
              font-flower text-yellow-500 italic"
          >
            {" "}
            {/* Heading size changes */}
            Restaurant Name Process
          </h2>

          <h1
            className="sm:text-[20px] md:text-[25px] lg:text-[40px] 
              font-bold mt-[10px] text-white"
          >
            {" "}
            {/* Main heading size changes */}
            <span className="sm:text-[20px] md:text-[25px] lg:text-[40px] text-yellow-500">
              We
            </span>{" "}
            Document Every Food Bean Process until it is saved
          </h1>

          <p className="text-[10px] sm:text-[10px] md:text-[13px] lg:text-[18px] mt-[12px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna.
          </p>

          <div className="mt-[20px] flex justify-end sm:justify-start lg:justify-end space-x-[12px]">
            {/* Flex alignment changes for buttons on different screen sizes */}

            <button
              className="border-yellow-500 border-2 shadow-sm text-white hover:bg-yellow-500 hover:text-black px-[10px] py-[6px] rounded-full 
                text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px] transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              Read More
            </button>
            <button className=" text-white px-[10px] py-[5px] flex text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]">
              <i>
                <FaPlayCircle className="  text-yellow-500 lg:text-2xl mr-[6px] transform transition duration-300 hover:scale-105 cursor-pointer " />{" "}
              </i>
              Play Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
