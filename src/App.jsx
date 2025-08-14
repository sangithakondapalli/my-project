import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/Company-Logo";
import PurposeSection from "./components/PurposeSection";
import Features from "./components/Features"
import ScheduleSection from "./components/ScheduleSection";
import PricingSection from "./components/PricingSection";
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import NewsLettersection from "./components/NewsLettersection"
import Footer from "./components/Footer"
import ProfileCard from "./components/ProfileCard"
import "./App.css";
function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className="-top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 absolute rounded-full blur-[80px] -z-10"></div>
    <div className='overflow-hidden'>
    <Hero/>
    <Navbar/>
    <CompanyLogo/>
    <PurposeSection/>
    <Features/>
    <ScheduleSection/>
    <PricingSection/>
    <Services/>
    <Testimonials/>
    <NewsLettersection/>
    <Footer/>
    {/*<ProfileCard/>*/}

    </div>
   
    
    </main>
  )
}

export default App