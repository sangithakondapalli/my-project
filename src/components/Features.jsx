import React from "react";

function Features() {
  const features2 = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-\ngritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from\nengagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing\n billing",
    },
  ];

  return (
    <div className="w-full bg-gray-50 px-4 py-16 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="">
            <h4 className="mb-3 text-3xl font-medium text-gray-900">
              How can we help your business?
            </h4>
            <p className="ml-6 text-sm text-gray-600">
              when you resell besnik,you build trust and increase
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            {features2.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6">
                <div className="flex items-center justify-center h-24 w-24 rounded-full " style={{backgroundColor:index===0?"#F1EFFD":index===1?"#FEE7E7":"#FFF3E4"}}>
                  {feature.icon}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="mb-2 ml-5 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                      
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
          <button className="rounded-full bg-blue-600 cursor-pointer px-8 py-3 relative font-medium text-white transition-colors hover:bg-blue-700">
            Become a Partner
             <div className="absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-blue-600/50 blur-xl" ></div>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
