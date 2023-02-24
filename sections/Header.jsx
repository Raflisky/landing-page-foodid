/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <div className="h-full top-0">
      <img
        src="/assets/bg-hero.png"
        alt=""
        className="absolute -z-10 object-cover"
      />
      <Navbar />
      <header id="home" className="container mx-auto">
        <div className="px-5 md:px-10 pt-36 sm:pt-48 xl:pt-64">
          <Link href="/">
            <span className="py-2 px-5 border border-gray-700 font-semibold rounded-full">
              Hungry?
            </span>
          </Link>
          <h1 className="pt-8 lg:pt-14 text-4xl md:text-5xl lg:text-7xl font-semibold w-full sm:w-7/12 xl:w-6/12">
            JUST COME TO FOODIED & ORDER
          </h1>
          <p className="pt-5 lg:pt-12 text-xl text-gray-500 w-full md:w-6/12">
            Lorem ipsum dolor sit amet consectetur. Lectus sit mauris velit
            tellus ullamcorper neque ultrices id neque.
          </p>
          <div className="pt-7 lg:pt-12 flex items-center justify-arround">
            <Link href="/">
              <span className="py-3 px-5 sm:py-4 sm:px-10 bg-[#85B84E] hover:bg-opacity-80 rounded-full text-lg font-semibold text-white mr-5">
                Order Now
              </span>
            </Link>
            <Link href="/">
              <div className="py-2 px-4 md:py-3 md:px-6 border border-gray-600 rounded-full text-lg font-semibold text-gray-800 flex items-center">
                <p className="mr-1 sm:mr-2">Buy Now</p>
                <BsArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;