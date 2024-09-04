import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex_column_center text-center w-[90%] md:w-[70%] py-4 mx-auto  gap-4 mt-[10%] md:mt-[3%]  justify-center">
      <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-1">
        Contact Us
      </p>
      <p className="text-[14px] font-[400] md:text-[20px] md:font-[400] mb-6">
        Have Questions? Talk to our customer support team.
      </p>

      <div className="w-full flex flex-col  justify-center items-center md:flex-row gap-[3rem] md:gap-[2rem] mx-auto">
        <div className="border-slate-200 w-full border rounded-lg p-4 flex_colunm">
          <div className="flex_start gap-1 w-[90%]">
            <Image
              width={20}
              height={20}
              className="object-fit pt-1"
              src="/contact/c-1.svg"
              alt="icn"
            />

            <div className="flex_column gap-4">
              <p className="text_mlarge">WhatsApp</p>

              <Link href="">
                <p className="text-primary_green text_medium underline">
                  Click here to start chat.
                </p>
              </Link>

              <p className="text-primary_gray text_small">Sunday - Saturday</p>
              <p className="text-primary_gray text_small">9 am - 9 pm</p>
            </div>
          </div>
        </div>
        <div className="border-slate-200 border w-full rounded-lg p-4 flex_colunm">
          <div className="flex_start gap-1 w-[65%]">
            <Image
              width={20}
              height={20}
              className="object-fit pt-1"
              src="/contact/c-2.svg"
              alt="icn"
            />

            <div className="flex_column gap-4">
              <p className="text_mlarge">Call</p>

              <p className="text-primary_black text_medium">0801 234 5678</p>

              <p className="text-primary_gray text_small">Sunday - Saturday</p>
              <p className="text-primary_gray text_small">9 am - 9 pm</p>
            </div>
          </div>
        </div>
        <div className="border-slate-200 w-full border rounded-lg p-4 flex_colunm">
          <div className="flex_start gap-1 w-[90%]">
            <Image
              width={20}
              height={20}
              className="object-fit pt-1"
              src="/contact/c-3.svg"
              alt="icn"
            />

            <div className="flex_column gap-4">
              <p className="text_mlarge">Email</p>

              <p className="text-primary_black text_medium">
                example@domain.com
              </p>

              <p className="text-primary_gray text_small">Sunday - Saturday</p>
              <p className="text-primary_gray text_small">9 am - 9 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
