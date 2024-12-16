import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "@/components/Footer";

const ChefGallery = () => {
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
            <h2 className="text-center text-3xl font-bold ">Our Chef</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-yellow-500 cursor-pointer">
                <Link href="/Error404">Chef</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white py-8 lg:px-[200px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Chef 1 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg1.jpg"
                alt="Chef 1"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-1 text-lg font-semibold">Tanvirul Rumi</h2>
              <p className="text-gray-600">Chef</p>
            </div>

            {/* Chef 2 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg2.jpg"
                alt="Chef 2"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Jorina Begum</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 3 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg3.jpg"
                alt="Chef 3"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Md Mohonmond</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 4 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg4.jpg"
                alt="Chef 4"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Munus Kathy</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 5 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg5.jpg"
                alt="Chef 5"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Tanvirul Rumi</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 6 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg6.jpg"
                alt="Chef 6"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Steve Dwyson</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 7 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg7.jpg"
                alt="Chef 7"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Martin Nicholof</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 8 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg8.jpg"
                alt="Chef 8"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">William Rumi</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 9 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg9.jpg"
                alt="Chef 9"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Kris William Roy</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 10 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg10.jpg"
                alt="Chef 10"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Mahmud Kholi</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 11 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg11.jpg"
                alt="Chef 11"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Alzar Rahman</h2>
              <p className="text-gray-600">Chef</p>
            </div>
            {/* Chef 12 */}
            <div className="text-center">
              <Image
                src="/ChefGalleryimg12.jpg"
                alt="Chef 12"
                className="w-full h-[300px] object-cover rounded-sm"
                height="900"
                width="900"
              />
              <h2 className="mt-4 text-lg font-semibold">Morshed Hofy</h2>
              <p className="text-gray-600">Chef</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ChefGallery;
