import Image from "next/image";
import React from "react";

const Referral = () => {
  return (
    <div className="flex_column_center text-center w-[90%] md:w-[75%] py-4 mx-auto  gap-4 mt-[10%] md:mt-[4%]  justify-center">
      <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-1">
        WageReferral
      </p>
      <p className="text-[14px] font-[400] md:text-[20px] md:font-[400] mb-6">
        Your earnings are limitless with WagesFinance Referrals
      </p>

      <p className="text-[18px] font-[600] md:text-[25px] md:font-[600] mb-6">
        How it Works
      </p>

      <div className="flex flex-col  items-center md:flex-row  gap-[3rem]   justify-between w-full mx-auto ">
        <Image
          width={350}
          height={350}
          className="object-fit"
          src="/ref/r-1.svg"
          alt="icn"
        />
        <Image
          width={350}
          height={350}
          className="object-fit"
          src="/ref/r-2.svg"
          alt="icn"
        />
        <Image
          width={350}
          height={350}
          className="object-fit"
          src="/ref/r-3.svg"
          alt="icn"
        />
      </div>
    </div>
  );
};

export default Referral;
