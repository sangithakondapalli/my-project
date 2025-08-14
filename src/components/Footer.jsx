import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 pt-16 pb-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1">
              <div className="flex cursor-pointer items-center gap-1">
                <div className="h-4 w-4 rounded-full bg-blue-600 opacity-75 transition-opacity hover:opacity-100"></div>
                <div className="-ml-2 h-4 w-4 rounded-full bg-red-500 opacity-100 transition-opacity hover:opacity-75"></div>
              </div>
              <span className="ml-1 text-xl font-medium">The Next Design</span>
            </div>
            <p className="mb-6 text-gray-600 md:w-3/4">
              The Copy warned the little bind text,That where it came from it
              would have been rewritten a thousand times
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-200 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebook className="size-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-200 hover:bg-blue-600 hover:text-white"
              >
                <FaTwitter className="size-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-200 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {Object.entries(footerLinks).map(
                ([category, links], categoryindex) => (
                  <div key={category}>
                    <h3 className="mb-4 text-lg font-medium uppercase">
                      {category}
                    </h3>
                    <ul className="space-y-3">{links.map((link,index)=>(<li key={index}><a href="#"  className="text-gray-600 hover:text-gray-900 " >{link.name}</a></li>))}</ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 p-8">
            <p className="text-gray-600 text-sm ">copyright @ {new Date().getFullYear()} codetutorials.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
