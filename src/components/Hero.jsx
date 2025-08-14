import React from "react";
import heroImage from "../assets/hero-image.png"
import { FaStar } from "react-icons/fa";
import { LuAlarmClockCheck } from "react-icons/lu";
import {textVariant} from "../utils/motion"
import {fadeIn} from "../utils/motion"
import { motion } from "framer-motion"
function Hero() {
  return (
    <section id="home"className="container mx-auto flex flex-col items-center justify-between px-4 pt-44 pb-6 sm:px-6 md:flex-row lg:px-8">
      <div className="w-full space-y-8 md:w-1/2">
      <motion.div variants={fadeIn('right',0.2)} initial="hidden" whileInView="show" viewport={{once:true}}>
        <div className="group flex w-fit items-center gap-2 rounded-full bg-gray-50 px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
          <FaStar className="text-blue-600 transition-transform group-hover:scale-110 group-hover:text-blue-400" />
          <span className="text-sm font-medium">Jump Start Your Growth</span>
        </div>
        </motion.div>
        <motion.h1 variants={textVariant(0.3)} initial="hidden" whileInView="show" viewport={{once:true}} className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          We Boost Our growth for
          <span className="relative inline-block text-blue-600">
            StartUp to fortune 500
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-200/60"></span>
          </span>
          <br />
          Companies<span className="ml-2 inline-block">⏰</span>
        </motion.h1>
        <motion.p  variants={fadeIn('up',0.4)} initial="hidden" whileInView="show" viewport={{once:true}} className="max-w-xl text-lg text-gray-600 md:text-xl">
          Get the most accurate Leads,sales people training and
          conversations,tools and more -all within the same one billing.
        </motion.p>
        <motion.div  variants={fadeIn('up',0.5)} initial="hidden" whileInView="show" viewport={{once:true}} className="flex max-w-md gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 rounded-xl border border-gray-200 px-6 py-4 transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
          <button className="cursor-pointer rounded-xl bg-blue-600 px-8 py-4 text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300">
            →
          </button>
        </motion.div>
      </div>
      <motion.div  variants={fadeIn('up',0.6)} initial="hidden" whileInView="show" viewport={{once:true}} className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative ">
          <img src={heroImage}alt="hero image" className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
