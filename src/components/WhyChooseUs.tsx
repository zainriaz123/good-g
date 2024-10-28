"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Interactive Digital Marketing Workshops",
      description:
        "Join real-time marketing sessions where you can collaborate with peers, mentors, and industry experts. Share strategies, discuss trends, and get instant feedback to enhance your marketing skills. Our platform makes mastering digital marketing interactive and engaging!",
      content: (
        <div className="h-full w-full bg-orange-300 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Interactive Digital Marketing Workshops
        </div>
      ),
    },
    {
      title: "Real-Time Results",
      description:
        "Track your digital marketing campaigns as they happen. With our platform, monitor every change and update in real time. No more guessing about the impact of your strategies—experience the clarity and simplicity of instant performance insights!",
      content: (
        <div className="h-full w-full  bg-gray-500 flex items-center justify-center text-white">
          Real Time Change
        </div>
      ),
    },
    {
      title: 
"Real-Time Campaign Tracking",
      description:
        "Never worry about outdated data again. Our platform ensures you’re always working with the latest marketing insights, keeping your strategies up to date without manual effort. Stay aligned with your team, monitor progress in real time, and maintain campaign flow without any disruptions.",
      content: (
        <div className="h-full w-full bg-yellow-400 bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        
Real-Time Campaign Tracking
        </div>
      ),
    },
    {
      title: "Never Run Out of Fresh Ideas",
      description:
        "With our platform, you'll always have access to the latest content strategies, eliminating the stress of running out of marketing ideas. Stay ahead of trends, keep your audience engaged, and maintain a consistent flow of content without interruptions.",
      content: (
        <div className="h-full w-full bg-red-500 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Never Run Out of Fresh Ideas

        </div>
      ),
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs