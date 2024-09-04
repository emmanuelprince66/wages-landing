import React from "react";
import Image from "next/image";
const Features = () => {
  return (
    <div className="flex_column_center w-full py-4 mx-auto text- gap-4 mt-[10%] md:mt-[4%] ">
      <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-6">
        Features
      </p>

      <div className="flex flex-col w-[90%] md:w-[70%] items-center md:flex-row gap-[4rem] justify-center mx-auto ">
        <div className="flex_column_center flex-1 gap-4 bg-[#F9F8FF] p-3 rounded-md text-center">
          <Image
            width={50}
            height={50}
            className="object-fit"
            src="/features/f-1.svg"
            alt="icn"
          />
          <p className="text-[#3F3767] font-[600] text-[20px]">
            WageVault(Cooperative saving)
          </p>
          <p className="text-[#3F3767] font-[400] leading-[20px] text-[15px]">
            Earn a dividend on all your savings. Make up to
            <span className="font-[600] mx-1">15%</span>
            on your savings annually. Your benefits are unlimited.
          </p>
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/features/f-2.svg"
            alt="icn"
          />
        </div>
        <div className="flex_column_center flex-1 gap-4 bg-[#F9FFF9] p-3 rounded-md text-center">
          <Image
            width={50}
            height={50}
            className="object-fit"
            src="/features/f-3.svg"
            alt="icn"
          />
          <p className="text-[#015B11] font-[600] text-[20px]">WageLoan</p>
          <p className="text-[#015B11] font-[400] leading-[20px] text-[15px]">
            Unlock new opportunities with our flexible loan products. Enjoy low
            interest rates, and quit worrying about the interest on your loans.
          </p>
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/features/f-4.svg"
            alt="icn"
          />
        </div>
      </div>
      <div className="flex flex-col w-[90%] md:w-[70%] items-center mt-5 md:flex-row gap-[4rem] justify-center mx-auto ">
        <div className="flex_column_center flex-1 gap-4 bg-[#F9F8FF] p-3 rounded-md text-center">
          <Image
            width={50}
            height={50}
            className="object-fit"
            src="/features/f-5.svg"
            alt="icn"
          />
          <p className="text-[#02981D] font-[600] text-[20px]">
            WageInvestment Opportunities.
          </p>
          <p className="text-[#02981D] font-[400] leading-[20px] text-[15px]">
            Diverse investment opportunities that would grow your wealth in a
            heartbeat.
          </p>
          <Image
            width={280}
            height={200}
            className="object-fit"
            src="/features/f-6.svg"
            alt="icn"
          />
        </div>
        <div className="flex_column_center flex-1 gap-4 bg-[#F9F9F9] p-3 rounded-md text-center">
          <Image
            width={50}
            height={50}
            className="object-fit"
            src="/features/f-7.svg"
            alt="icn"
          />
          <p className="text-[#171717] font-[600] text-[20px]">
            Wageflex (Save on Budget)
          </p>
          <p className="text-[#171717] font-[400] leading-[20px] text-[15px]">
            Enjoy a seamless saving experience. We designed Wageflex to help you
            reach your financial goals faster.
          </p>
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/features/f-8.svg"
            alt="icn"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
