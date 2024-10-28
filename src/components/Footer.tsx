"use client"

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4 sm:px-6 lg:px-6'>
    <div>
      <h3 className=' text-lg font-bold text-white mb-4'> About us</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem esse ut nam eum impedit aliquid iste. Ut aspernatur vero sunt? Velit quos accusantium rem, eaque veritatis dignissimos. Molestiae, quaerat.</p>
      </div>
      <div >
<h3 className='text-lg font-bold text-white mb-4 '> 
    links
</h3>


<ul>

    <li><a href="/">home</a></li>
    <li><a href="/courses" className=' hover:text-slate-300'>courses</a></li>
    <li><a href="/about"className=' hover:text-slate-300'>about</a></li>
    <li><a href="/contact"className=' hover:text-slate-300'>contact</a></li>
</ul>


      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4 ' > follow us</h3>
        <ul>
    <li><a href="/courses" className=' hover:text-slate-300'>tik tok</a></li>
    <li><a href="/about"className=' hover:text-slate-300'>instagram</a></li>
    <li><a href="/contact"className=' hover:text-slate-300'>facebook</a></li>
    <li><a href="/contact"className=' hover:text-slate-300'>linkedle</a></li>
    <li><a href="/contact"className=' hover:text-slate-300'>twitter</a></li>
</ul>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4 ' > contact us</h3>
        <p>email: <a href="/.mail@gmail.com" className=' hover:text-blue-400'> zainbhaiss356@gmail.com</a></p>
        <p>phone: <span className=' hover:text-white'> 03106618760</span></p>
      </div>
    </div>
    <p className=' flex justify-center p-2 '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga sequi consequatur quis commodi ea, magnam ratione doloribus exercitationem laboriosam. Necessitatibus minus deleniti eligendi voluptatum praesentium, fugit quos quasi enim?</p>
    </footer>
  )
}

export default Footer