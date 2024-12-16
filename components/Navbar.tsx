"use client";
import { useState } from "react";
import Link from "next/link";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col items-center p-4 bg-black">
      <div className="flex items-center justify-between w-full">
        <span className="text-yellow-500 font-bold text-lg flex-grow text-center">
          Food<span className="text-white">tuck</span>
        </span>
        <div className="md:hidden ">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center justify-around w-full p-2 transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className=" text-yellow-500 transform transition duration-100 hover:scale-105 cursor-pointer "
          >
            Home
          </Link>
          <Link
            href="/Menu"
            className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer"
          >
            Menu
          </Link>

          <Link
            href="/Blog"
            className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer"
          >
            Blog
          </Link>

          <div className="text-white">
            <Accordion type="single" collapsible className="w-full border-none">
              <AccordionItem value="items">
                <AccordionTrigger className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer">
                  Pages
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li className="pb-1">
                      <Link
                        href="/Error404"
                        className="hover:text-yellow-500  text-white transform transition cursor-pointer"
                      >
                        Error-404
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link
                        href="/ChefGallery"
                        className="hover:text-yellow-500  text-white transform transition cursor-pointer"
                      >
                        Chef Gallery
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Link
            href="/About"
            className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/Shop"
            className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer"
          >
            Shop
          </Link>
          <Link
            href="/Contact"
            className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
            />
            <Link href="/Error404">
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
            </Link>
          </div>
          <Link href="/Error404">
            <FaShoppingBag className="ml-4 text-white" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden w-full text-center mt-4 grid grid-cols-3 ">
          <Link href="/" className="block text-white py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/Menu"
            className="block text-white py-2"
            onClick={toggleMenu}
          >
            Menu
          </Link>
          <Link
            href="/Blog"
            className="block text-white py-2"
            onClick={toggleMenu}
          >
            Blog
          </Link>

          <Link
            href="/About"
            className="block text-white py-2"
            onClick={toggleMenu}
          >
            About
          </Link>

          <div className="block text-white py-2 ">
            <Accordion type="single" collapsible className="w-full border-none">
              <AccordionItem value="items">
                <AccordionTrigger className="hover:text-yellow-500 text-white transform transition duration-100 hover:scale-105 cursor-pointer">
                  Pages
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1">
                    <li className="pb-1">
                      <Link
                        href="/Contact"
                        className="hover:text-yellow-500  text-white transform transition cursor-pointer"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link
                        href="/ChefGallery"
                        className="hover:text-yellow-500  text-white transform transition cursor-pointer"
                      >
                        Chef Gallery
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link
                        href="/Error404"
                        className="hover:text-yellow-500  text-white transform transition cursor-pointer"
                      >
                        Error-404
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Link
            href="/shop"
            className="block text-white py-2"
            onClick={toggleMenu}
          >
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
