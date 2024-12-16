import React from "react";
import Image from "next/image";
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { TbGlass } from "react-icons/tb";

const ChoseUs: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-1/2">
          <div className="col-span-1">
            <Image
              src="/chose1.jpg"
              alt="Tacos with various toppings"
              height="362"
              width="356"
              className="w-full h-auto border-4 border-yellow-500"
            />
          </div>
          <div>
            <Image
              src="/chose1.jpg"
              alt="Tacos with various toppings"
              height="362"
              width="356"
              className="w-full h-auto border-4 border-yellow-500"
            />
          </div>
          <div>
             <Image
              
              src="/chose3.jpg"
              alt="Fried chicken being dipped in sauce"
              height="200"
              width="300"
              className="w-full h-auto"
            />
          </div>
          <div>
             <Image
              
              src="/chose4.jpg"
              alt="Burger with fries"
              height="200"
              width="300"
              className="w-full h-auto"
            />
          </div>
          <div>
             <Image
              
              src="/chose5.jpg"
              alt="Bowl of salad"
              height="200"
              width="300"
              className="w-full h-auto"
            />
          </div>

          <div>
             <Image
              
              src="/chose6.png"
              alt="plate of beef"
              height="200"
              width="300"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h2 className="text-yellow-500 font-flower ">Why Choose us</h2>
          <h1 className="text-4xl font-bold text-white mt-2 ">
            Extra ordinary taste
            <br />
            And Experienced
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, at sit sit debitis
            et ut wisi in consequat.
          </p>

          <div className="flex flex-wrap mt-6">
            <div className="text-center mr-6 mb-2">
              <div className="bg-orange-500 p-4">
                <PiHamburgerLight className="text-4xl cursor-pointer text-white" />
              </div>

              <span className="ml-2 text-white">Fast Food</span>
            </div>

            <div className="text-center items-center cursor-pointer mr-6 mb-2">
              <div className="bg-orange-500  p-4  ">
                <PiCookieLight className=" text-4xl text-white" />
              </div>
              <span className="ml-2 text-white">Lunch</span>
            </div>

            <div className=" text-center mb-2 cursor-pointer">
              <div className="bg-orange-500 p-4  ">
                <TbGlass className="text-4xl text-white" />
              </div>
              <span className="ml-2 text-white ">Dinner</span>
            </div>
          </div>

          <div className="flex items-center mt-2 mb-10 bg-white w-[300px] border-l-8 border-orange-500 rounded-lg">
            <div className=" p-5 text-4xl font-bold text-orange-500 ">30+</div>
            <span className="ml-4 text-black">Years of Experienced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
