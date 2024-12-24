import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuCirclePlay } from "react-icons/lu";




const FoodPage = () => {
  return (
<div className="">


    {/* Header */}
    <header>
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover opacity-40  "
          />

          <div className="absolute inset-0 lg:m-[70px] justify-center  text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-2xl font-bold "> About Us </h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">About</Link>
              </p>
            </div>
          </div>
        </div>
      </header>


{/* Main */}
    <div className="bg-white text-gray-800">

      <div className="lg:px-[150px] md:px-[100px] p-5 mx-auto md:py-[100px] lg:py-[100px]">




        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {/* Image Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
            
            <div>
              <Image
              src="/blogimg3.jpg"
              alt="Tacos with lime"
              width={900}
              height={900}
            className="w-full h-full lg:w-[336px] lg:h-[420px] md:w-[336px] md:h-[520px]  object-cover rounded-sm"
            />
            </div>

            <div className="mt-[100px]">
            <Image
              src="/AboutD1.png"
              alt="Image 1"
              width={900}
              height={900}
              className="w-full h-auto lg:w-[309px] md:w-[309px] lg:h-[201px] :h-[200px] object-fill rounded-sm my-2"
            />
            <Image
              src="/shopG1.jpg"
              alt="Image 2"
              width={900}
              height={900}
              className="w-full h-auto lg:w-[309px] lg:h-[300px] md:w-[309px] md:h-[300px] object-cover rounded-sm col-span-2"
            />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center lg:ml-10">
            <span className="text-[#FF9F0D] font-bold text-xl font-flower">About us ____</span>
            <h1 className="text-3xl font-bold mt-2 text-[#333333]">
              Food is an important part Of a balanced Diet
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            </p>
            <div className="mt-6 flex space-x-4">
              <span className="bg-[#FF9F0D] text-white px-2 lg:px-7 py-2 rounded-sm">
                Show more
              </span>

              <span className="flex">
              <LuCirclePlay className="bg-[#ff9f0d] text-white rounded-full  lg:text-[45px] md:text-[40px] md:mt-[px] border-2  md:p-2 mt-[5px] p-2 text-[30px] "   />
              <p className="text-[#333333] px-1  py-2 flex font-bold"> Watch video </p>
              </span>
            </div>
          </div>
        </div>




      
        {/* Why Choose Us*/}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold">Why Choose us</h2>
          <p className="text-gray-600 mt-4 lg:px-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum id elementum.
          </p>
          <div className="mt-8">
            <Image
              src="/AboutD2.png"
              alt="Chose Us"
              width={900}
              height={900}
              className="w-full h-[300px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>

    </div>
  );
};

export default FoodPage;
