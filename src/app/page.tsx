
import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import Instructor from '@/components/Instructor'
import UpComingWebinars from "@/components/UpComingWebinars"
import WhyChooseUs from '@/components/WhyChooseUs'

import React from 'react'

const page = () => {
  return (
  <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.06]'>
    <HeroSection/>
    <FeaturedCourses/>
    <UpComingWebinars/>
    <WhyChooseUs/>
    <Instructor/>
  </main>
  )
}

export default page