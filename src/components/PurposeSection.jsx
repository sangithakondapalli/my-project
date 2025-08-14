import React from 'react'

function PurposeSection() {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];
  return (
    <div className="w-full bg-gray-50 px-4 py-16 sm:px-6 md:px-8" id="about">
      <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          <div className=''>
            <p className='text-purple-600 font-medium md-2 text-sm'>ACHIEVE MORE</p>
            <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a <br/> convoy is to keep <br/>your team</h2>

          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 col-span-2 justify-between gap-8'>
            {
              features.map((feature,index)=>(<div key={index} className='flex space-x-4'>
                <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{feature.icon}</div>
                <div>
                   <h3 className='text-gray-900 font-semibold text-xl mb-2'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                    
                </div>
                
                
                </div>))
            }

          </div>
          </div>
      </div>
    </div>
  )
}

export default PurposeSection