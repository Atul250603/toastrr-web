'use client'

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import StepsToUse from "@/components/StepsToUse";
import ConfigurationList from "@/components/ConfigurationList";
import Link from "next/link";
import Footer from "@/components/Footer";
const ToastFormClient = dynamic(() => import('@/components/ToastForm'), { 
  ssr: false 
});
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Hero/>
      <ToastFormClient/>
      <StepsToUse/>
      <ConfigurationList/>
      <Footer/>
    </div>
  );
}