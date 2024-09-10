import Image from "next/image";
import React from "react";

const Why = () => {
  return (
    <div className="flex_column_center text-center w-full py-4 mx-auto  gap-4 mt-[10%] md:mt-[4%]  justify-center">
      <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-6">
        Why WagesFinance?
      </p>

      <div className="bg-secondary_green py-9  w-full  ">
        <div className="flex flex-col  md:w-[75%]  items-center md:flex-row  gap-[3rem] w-full justify-between mx-auto ">
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/why/w-1.png"
            alt="icn"
          />
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/why/w-2.png"
            alt="icn"
          />
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/why/w-3.png"
            alt="icn"
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
