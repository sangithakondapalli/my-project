import React from 'react'
import slats from "../assets/stats.webp"
    import { FaArrowRight } from 'react-icons/fa';
function ScheduleSection() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
    <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        <div className='md:w-1/2 w-full'>
            <img src={slats} alt="slats image"  />
        </div>
        <div className='md:w-1/2 w-full'>
            <h2 className='text-orange-500 font-semibold'>SCHEDULE</h2>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-500 mt-4 mb-6'>Streamline Your Business<br/>With Smart scheduling Solutions</h2>
            <p className='text-gray-600'>take control of your and boost productivity with our intelligent scheduling <br/> system Automobile Appointments,manage team availability,and deliver <br/> exceptional customer experiences through seamless calendar management</p>
            <a href="#" className='text-blue-500 font-medium gap-2 hover:gap-4 transition-all flex items-center '>Exploring Scheduling Features<FaArrowRight className='size-8'/></a>
        </div>
    </div>
    </div>
  )
}

export default ScheduleSection