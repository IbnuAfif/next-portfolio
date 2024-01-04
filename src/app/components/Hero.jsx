"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="lg:py-16 flex flex-col justify-between sm:flex-row">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-center sm:text-left justify-start">
        <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-400">Hello, I&apos;m</span>
          <br />
          <TypeAnimation sequence={["Ibnu Afif", 1000, "Web Developer", 1000, "Front End", 1000, "Back End", 1000]} wrapper="span" speed={50} repeat={Infinity} />
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.</p>
        <div className="">
          <Link href="#contact" className="ml-0 inline-block py-3 w-full sm:w-fit">
            <button className="text-white bg-gradient-to-br from-primary-500 to-secondary-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-[#F3F8FF] font-medium rounded-full text-sm px-5 py-1 text-center mx-2 my-1">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0 ">
        <div className="rounded-full bg-[#020202] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
          <Image src="/image/heroimage.png" alt="logo" width={220} height={220} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
