"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";
import zainimage from"@/components/Images/zainimage.jpg"
import asifimage from "@/components/Images/asifimage.jpg"
import broimage from "@/components/Images/broimage.png"
import logoImage from "@/components/Images/gif.jpg"
const Instructors = [
  {
    id: 1,
    name: 'Muhammad zain',
    designation: ' Web Development Mentor',
    image: zainimage, 
  },
  {
    id: 2,
    name: 'Farhan Ali',
    designation: 'Web Development Mentor',
    image: broimage, 
  },

  {
    id: 3,
    name: 'Asif Langrah',
    designation: 'AI Generative Mentor',
    image: asifimage, 
  },
 
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${logoImage.src})`,
        backgroundSize: 'contain', // Change to 'contain' to fit the logo
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10"> {/* Text above overlay */}
        <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-center mb-4 text-white drop-shadow">
          Discover the talented professionals who will guide your coding journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructor