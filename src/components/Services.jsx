import React from "react";
import { BsStack } from "react-icons/bs";      // Bootstrap Icons
import { HiLightBulb } from "react-icons/hi";  // Heroicons
import { FiSettings } from "react-icons/fi";   // Feather Icons
import { BiTime } from "react-icons/bi";       // BoxIcons

function Services() {
   const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8" id="services">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row lg:gap-24">
        <div className="md:w-1/3 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">Future of support with new shape</h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">Discuss Your Goals,determine success metrics,identify problems</p>
          
            <div className="space-y-3">
              <div  className="flex items-center gap-2 ">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-600"></div>{" "}
                </div>
                <span className="text-gray-600">
                  UX Design Content Strategy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">development Bring</span>
              </div>
            </div>
          
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition:colors">get Started</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
             services.map((service,index)=>(<div key={index} className="max-w-72 p-6 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl cursor-pointer ">
                 <div className="mb-4">{service.icon}</div>
                 <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                 <p className="text-gray-600 mb-4">{service.description}</p>
                 <a href={service.link} className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">LEARN MORE</a>

             </div>))
          }

        </div>
      </div>
    </section>
  );
}

export default Services;
