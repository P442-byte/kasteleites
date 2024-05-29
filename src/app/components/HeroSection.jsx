"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        > 
          <h1 className="text-white text-1xl sm:text-2xl lg:text-3xl font-regular">
            <span className=" ">Empowering minds</span>
          </h1>
          <h2 className="text-5xl sm:text-4xl lg:text-7xl font-bold pt-8">
            Welcome to KASTELIETES
          </h2>
          <p className="text-white text-1xl sm:text-lg pb-10 lg:text-3xl font-regular">
            <br />
            <TypeAnimation
              sequence={[
                "Where Free Courses Fuel Your Journey to Success!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <div>
            <Link
              href="/courses"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#008DBA] bg-opacity-40 hover:bg-opacity-100 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/updated/test-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={900}
              height={900}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
