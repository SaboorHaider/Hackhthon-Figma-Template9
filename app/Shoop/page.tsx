import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSearch, FaStar } from "react-icons/fa";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import { BiRightArrowCircle } from "react-icons/bi";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div>
      <header>
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover "
          />

          <div className="absolute inset-0 lg:m-[70px] justify-center  text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-2xl font-bold ">Our Shop</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Menu</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>

        <div className="bg-gray-100">
          <div className="container mx-auto lg:p-[70px] p-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/4 p-4">
                <div className="flex lg:justify-start justify-between items-center mb-4">
                  <div>
                    <label className="mr-2" htmlFor="sort">
                      Sort By:
                    </label>

                    <select
                      className="border w-[200px] rounded p-2 text-gray-500 mr-4"
                      id="sort"
                    >
                      <option>Newest</option>
                      <option className="text-black">Price: Low to High</option>
                      <option className="text-black">Price: High to Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="mr-2" htmlFor="show">
                      Show:
                    </label>
                    <select
                      className="border lg:w-[200px] md:w-[150px] rounded p-2 text-gray-500 mr-4"
                      id="show"
                    >
                      <option>Default</option>
                      <option className="text-black">10</option>
                      <option className="text-black">20</option>
                    </select>
                  </div>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">
                   <Link href='/ShopDetails'>
                   <Image
                      src="/shopG1.jpg"
                      alt="Product 1"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Fresh Lime </h3>
                    <p className="text-[#FF9F0D] text-sm">
                      $38.00
                      <span className="text-gray-400 line-through">$45.00</span>
                    </p></Link>
                  </div>

                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">
                    <Link href='/ShopDetails'>
                    <Image
                      src="/shopG2.jpg"
                      alt="Product 2"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg">chocolate Muffin</h3>
                    <p className="text-[#FF9F0D] text-sm">$28.00 </p></Link>
                  </div>

                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='/ShopDetails'>

                  <Image
                      src="/shopG3.jpg"
                      alt="Product 3"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Burger</h3>
                    <p className="text-[#FF9F0D] text-sm">
                      $21.00{" "}
                      <span className="text-gray-400 line-through">$45.00</span>
                    </p>
                   </Link>
                    
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                    <Link href='ShopDetails'>
                    <Image
                      src="/shopG4.jpg"
                      alt="Product 4"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Country Burger</h3>
                    <p className="text-[#FF9F0D] text-sm">$45.00</p>
                    </Link>
                    
                  </div>

                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">
                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG5.jpg"
                      alt="Product 5"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Drink</h3>
                    <p className="text-[#FF9F0D] text-sm">
                      $23.00{" "}
                      <span className="text-gray-400 line-through">$45.00</span>
                    </p>
                  </Link>
                   
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG6.jpg"
                      alt="Product 6"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Pizza</h3>
                    <p className="text-[#FF9F0D] text-sm">$43.00</p>
                  </Link>
                    
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG7.jpg"
                      alt="Product 7"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Cheese Butter</h3>
                    <p className="text-[#FF9F0D]text-sm">$10.00</p>
                  </Link>
                   
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG8.jpg"
                      alt="Product 8"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Sandwiches</h3>
                    <p className="text-[#FF9F0D] text-sm">$25.00 </p>
                  </Link>
                  
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG9.jpg"
                      alt="Product 9"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Chicken Chup</h3>
                    <p className="text-[#FF9F0D] text-sm">$12.00</p>
                  </Link>
                  
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG4.jpg"
                      alt="Product 10"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Country Burger</h3>
                    <p className="text-[#FF9F0D] text-sm">$45.00</p>
                  </Link>
                    
                  </div>

                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG5.jpg"
                      alt="Product 11"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Drink</h3>
                    <p className="text-[#FF9F0D] text-sm">
                      $23.00 <span className="text-gray-400">$45.00</span>
                    </p>
                  </Link>
                  
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG6.jpg"
                      alt="Product 12"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Pizza</h3>
                    <p className="text-[#FF9F0D] text-sm">$43.00</p>
                  </Link>
                  
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG7.jpg"
                      alt="Product 13"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg ">Cheese Butter</h3>
                    <p className="text-[#FF9F0D] text-sm">$10.00</p>
                  </Link>
                    
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">

                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG8.jpg"
                      alt="Product 14"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Sandwiches</h3>
                    <p className="text-[#FF9F0D] text-sm">$25.00 </p>
                  </Link>
                   
                  </div>
                  <div className=" p-4  transform transition duration-300 hover:scale-105 cursor-pointer">
                  <Link href='ShopDetails'>
                  <Image
                      src="/shopG9.jpg"
                      alt="Product 15"
                      width={900}
                      height={900}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">Chicken Chup</h3>
                    <p className="text-[#FF9F0D] text-sm">$12.00 </p>
                  </Link>
                    
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-1/4 p-4 shadow-md">
                <div className="mb-4 flex">
                  <input
                    type="text"
                    placeholder="Search Product"
                    className="w-full p-2 text-sm border bg-yellow-300 bg-opacity-40"
                  />

                  <FaSearch className="bg-[#FF9F0D] text-white p-2 text-[40px]" />
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Category</h3>
                  <ul>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Sandwiches</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Burger</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Chicken Chup</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Drinks</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Pizza</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Thi</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Non Veg</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Uncategorized</label>
                    </li>
                  </ul>
                </div>

                {/* Featured Product */}
                <div className="mb-4 ">
                  <h3 className="text-lg font-semibold mb-2">
                    Featured Product
                  </h3>

                  <div className="relative">
                    <Image
                      src="/shopS1.jpg"
                      alt="PerFect Taste 15"
                      width={900}
                      height={900}
                      className="w-[248px] h-[286px] object-cover mb-2"
                    />

                    <div className="absolute inset-0  px-4 text-white">
                      <div className=" p-5 mt-1 ">
                        <p className="font-semibold  text-sm">Perfect Taste</p>
                        <h4 className="font-bold text-lg mt-1">
                          Classic Restaurant
                        </h4>
                        <p className="text-[#FF9F0D] mt-2 text-xs font-semibold">
                          45.00${" "}
                        </p>
                      </div>

                      <div className="lg:mt-28 flex w-[215px] transform transition duration-300 hover:scale-105 cursor-pointer hover:text-orange-500 hover:bg-white">
                        <Link href="/Error404">
                          <p className="flex text-sm ">
                            Shop Now
                            <BiRightArrowCircle className="text-2xl p-1" />
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 ">
                    <h3 className="text-lg font-semibold mb-2">
                      Filter By Price
                    </h3>
                    <input type="range" className="w-full" />
                    <div className="grid grid-cols-2  text-gray-500 text-sm ">
                      <span className="text-left">From $0 to $8000 </span>
                      <span className="text-right">Filter</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4  ">
                  <h3 className="text-lg font-semibold mb-2">
                    Latest Products
                  </h3>

                  <div className="flex items-center mb-4">
                    <Image
                      src="/ShopS2.jpg"
                      alt="Latest Products"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-lg">Pizza</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/shopS2.jpg"
                      alt="Latest Productst"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-lg">Cupcake</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/shopS2.jpg"
                      alt="Latest Products"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-lg">Cookies</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/shopS2.jpg"
                      alt="Latest Products"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-lg">Burger</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                </div>

                <div className=" overflow-hidden mt-2">
                  <div className="p-3">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>

                    <div className="grid grid-cols-2  gap-2  ">
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Services
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Pizza
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left col-span-2">
                        Our menu
                      </div>
                     
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Cupcake
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Burger
                      </div>

                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left  col-span-2">
                        Tandoori Chicken
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Cookies
                      </div>

                      
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Our Shop
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul className="flex justify-center ">
                <li>
                  <RxDoubleArrowLeft className="m-1 cursor-pointer text-orange-500 px-2 border-2 text-4xl" />
                </li>
                <li className="px-2 border-2 text-2xl cursor-pointer text-orange-500 m-1">
                  1
                </li>
                <li className="px-2 border-2 text-2xl cursor-pointer bg-orange-500 m-1 text-white">
                  2
                </li>
                <li className="px-2 border-2 text-2xl cursor-pointer text-orange-500 m-1">
                  3
                </li>
                <li>
                  <RxDoubleArrowRight className="m-1 px-2 border-2 cursor-pointer  text-orange-500 text-4xl " />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductPage;
