"use client";
import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex_column_center w-full bg-[#F9FFF9] pt-4 text-center gap-4  md:px-0 px-2'>
      <p className="text-[30px] font-[600] md:text-[40px] md:font-[600] text-primary_black mt-8">
           Digital Cooperative That Works For
            </p>
        <Image width={100} height={100} src="/header/h-1.png" alt="gen-z" />

        <p className='text-medium text-[#2F2F2F] flex-wrap max-w-[450px] leading-5 '>Maximize your earnings and unlock financial growth. 
            Make the most of your money and watch your wealth soar!</p>
        <div className='flex_center gap-6 my-8'>
        <button className="flex gap-1 min-w-[80px]  md:my-0 items-center bg-black py-2 rounded-md px-4 justify-center">
        <Image width={25} height={25} src="/header/h-9.svg" alt="apple" />
              <span className="flex flex-col items-start gap-0">
                <p className="text-white text-[10px] md:text-[12px] ">Download on the</p>
                <p className="text-white text-[15px]  md:text-[20px] ">App Store</p>
              </span>
            </button>
        <button className="flex gap-1 min-w-[80px]  md:my-0 items-center bg-black py-2 rounded-md px-4 justify-center">
        <Image width={25} height={25} src="/header/h-2.svg" alt="playstore" />
              <span className="flex flex-col items-start gap-0">
                <p className="text-white text-[10px]  md:text-[12px] ">Get it on</p>
                <p className="text-white text-[15px]  md:text-[20px] ">Google Play</p>
              </span>
            </button>
        </div>

        <div className='w-full md:w-[70%] mx-auto z-10 relative'>

 
          <Image 
    width={70} 
    height={70} 
    className='object-cover left-[-1rem] top-[2rem]  md:w-[60px] md:h-[60px]  w-[60px] h-[60px] md:left-[6rem] md:top-[-3rem] absolute' 
    src="/header/h-8.svg" 
    alt="pic" 
  />
         <Image 
    width={70} 
    height={70} 
    className='object-cover bottom-[-1rem] left-7  md:w-[60px] md:h-[60px]  w-[50px] h-[50px] md:left-[10rem] md:bottom-[3rem] absolute' 
    src="/header/h-7.svg" 
    alt="pic" 
  />

        <Image 
    width={70} 
    height={70} 
    className='object-cover bottom-[-4rem] right-[0.2rem] md:right-[10rem]  md:w-[60px] md:h-[60px]  w-[60px] h-[60px]  md:bottom-[2rem] absolute' 
    src="/header/h-4.svg" 
    alt="pic" 
  />
          <Image 
    width={70} 
    height={80} 
    className='object-cover right-[2rem] top-[-2rem]  md:w-[60px] md:h-[60px]  w-[60px] h-[60px]  md:right-[6rem] md:top-[-3rem] absolute' 
    src="/header/h-5.svg" 
    alt="pic" 
  />
        </div>

        <div className='w-full h-full flex_center md:mt-0'>
  <Image 
    width={700} 
    height={700} 
    className='object-cover md:mt-0 mt-9' 
    src="/header/h-6.png" 
    alt="pic" 
  />
</div>

    </div>
  )
}

export default Header