"use client";
import React from "react";
import { useStateContext } from "@/app/util/StateContext";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { Divider } from "@mui/material";

const Footer = () => {
  const { state } = useStateContext();

  const links = [
    { id: 1, to: "feature", des: "Feature" },
    { id: 2, to: "about", des: "About Us" },
    { id: 3, to: "contact", des: "Contact Us" },
    { id: 4, to: "blog", des: "Blog" },
  ];

  return (
    <>
      {!state && (
        <div className="w-full px-5  md:px-0 py-5 bg-[#001E06] mt-[10%]  h-full">
          <div className="flex flex-col h-full md:h-[15rem] w-full md:max-w-[75%] md:min-w-[75%]  items-center md:flex-row gap-[3rem]  justify-between mx-auto">
            <div className="flex_column gap-5 ">
              <Image
                width={140}
                height={140}
                src="/footer/f-1.svg"
                alt="main icon"
              />

              <p className="text-[#E6F5E8] text-[14px] font-[400] flex-wrap  w-full md:max-w-[70%] ">
                Maximize your earnings and unlock financial growth. Make the
                most of your money and watch your wealth soar!
              </p>

              <div className="flex flex-col  items-start md:items-center md:flex-row gap-[3rem] md:gap-[2rem]  justify-center ">
                {links.map((link) => (
                  <ScrollLink
                    key={link.id}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-2}
                    duration={500}
                  >
                    <p className="text-white text-[16px] hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out">
                      {link.des}
                    </p>
                  </ScrollLink>
                ))}
              </div>
            </div>
            <div className="flex-col  w-full md:w-[40%] gap-8 ">
              <div className="flex-col flex   w-full justify-end gap-5 ">
                <div className=" flex md:justify-end ">
                  <p className="font-[500] text-[16px] text-white ">
                    Get The App
                  </p>
                </div>
                <div className="flex md:flex-col md:gap-4  gap-[1rem] ">
                  <button className="flex gap-1 md:ml-auto md:min-w-[180px] max-w-[180px]  md:my-0 items-center bg-white py-2 rounded-md px-4 justify-center">
                    <Image
                      width={25}
                      height={25}
                      src="/dapp/d-2.svg"
                      alt="apple"
                    />
                    <span className="flex flex-col items-start gap-0">
                      <p className="text-black text-[10px] md:text-[12px] ">
                        Download on the
                      </p>
                      <p className="text-black text-[15px]  md:text-[20px] ">
                        App Store
                      </p>
                    </span>
                  </button>
                  <button className="flex gap-1 md:ml-auto   md:my-0 items-center bg-white py-2 rounded-md px-4 justify-center">
                    <Image
                      width={25}
                      height={25}
                      src="/dapp/d-3.svg"
                      alt="playstore"
                    />
                    <span className="flex flex-col items-start gap-0">
                      <p className="text-black text-[10px]  md:text-[12px] ">
                        Get it on
                      </p>
                      <p className="text-black text-[15px]  md:text-[20px] ">
                        Google Play
                      </p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[75%] mt-10 mx-auto gap-[3rem] md:gap-[2rem] ">
            <Divider
              sx={{ color: "white", background: "white", width: "100%" }}
            />
            <p className="text-[#E6F5E8]  text-[14px] font-[400] ">
              © 2024 WagesFinance. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
