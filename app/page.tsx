'use client'

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import StepsToUse from "@/components/StepsToUse";
import ConfigurationList from "@/components/ConfigurationList";
import Footer from "@/components/Footer";

const ToastFormClient = dynamic(() => import('@/components/ToastForm'), { 
  ssr: false 
});

export default function Home() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-[50vh] translate-y-[-25vh] w-full left-0 right-0">
        <div className="w-full flex flex-col items-center">
          <Hero/>
          <ToastFormClient/>
          <StepsToUse/>
          <ConfigurationList/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}