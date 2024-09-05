import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex_column_center w-full py-4 mx-auto text- gap-4 mt-[10%] md:mt-[4%] "
    >
      <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-6">
        About Us
      </p>

      <div className="w-full md:w-[80%] mx-auto bg-[#F9F8FF] py-[2rem] px-[0.8rem]  md:py-[3rem] rounded-md md:px-[2rem] flex flex-col  md:flex-row gap-[3rem]">
        <div className="flex-1 flex flex-col gap-3 ">
          <div className="flex-1 rounded-[12px] bg-white p-3 flex items-start gap-3">
            <Image
              width={25}
              height={25}
              src="/about/a-3.svg"
              className="pt-1"
              alt="icn"
            />
            <div className="flex flex-col gap-3">
              <p className="text-[22px] font-[600] text-primary_black">
                We Help You Achieve Your Goals
              </p>
              <p className="text-primary_gray text-[15px] font-[400] leading-[30px]">
                We are a cooperative platform that empowers you to achieve your
                financial goals. WagesFinance simplifies your financial journey.
                We make it easier to manage your money and achieve your goals.
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-[12px] bg-white p-3 flex items-start gap-3">
            <Image
              width={25}
              height={25}
              src="/about/a-4.svg"
              className="pt-1"
              alt="icn"
            />
            <div className="flex flex-col gap-3">
              <p className="text-[22px] font-[600] text-primary_black">
                We are Secure and Reliable
              </p>
              <p className="text-primary_gray text-[15px] font-[400] leading-[30px]">
                We are a cooperative platform that empowers you to achieve your
                financial goals. WagesFinance simplifies your financial journey.
                We make it easier to manage your money and achieve your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex-2">
          <Image
            src="/about/a-1.png"
            alt="icn"
            className="object-cover ml-0 "
            width={400}
            height={400}
          />

          <Image
            src="/about/a-2.png"
            alt="icn"
            className="object-cover top-[11rem] md:top-[13rem] right-[-1rem] absolute"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
