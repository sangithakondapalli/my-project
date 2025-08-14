import React from "react";
import amazon from "../assets/amazon.png";
import meundies from "../assets/meundies.png";
import slack from "../assets/slack.png";
import sitepoint from "../assets/sitepoint.png";
import woocommerce from "../assets/woocommerce.png";
function CompanyLogo() {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="container mx-auto ml-4 flex w-full items-start overflow-hidden py-6 flex-col sm:items-center sm:flex-row gap-8">
      <div className="z-10 w-[300px] shrink-0 border-l-4 border-blue-500 bg-white px-5 py-2 text-left text-xl font-semibold text-gray-600 sm:text-base">
        proud partner At <br /> Hubspot & segment
      </div>
      <div className="animate-marquee flex whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo image"
            className="mx-12 h-8 w-36 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyLogo;
