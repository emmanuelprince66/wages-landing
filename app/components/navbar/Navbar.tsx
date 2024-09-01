"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery, useTheme } from "@mui/material";
import { useStateContext } from "@/app/util/StateContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { state, toggleState } = useStateContext();

  const handleHamToggle = () => setOpen((prev) => !prev);
  const theme = useTheme();

  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const links = [
    { id: 1, to: "feature", des: "Feature" },
    { id: 2, to: "about", des: "About Us" },
    { id: 3, to: "contact", des: "Contact Us" },
    { id: 4, to: "blog", des: "Blog" },
  ];
  useEffect(() => {
    if (open !== state) {
      toggleState();
    }
  }, [open, state, toggleState]);

  return (
    <div className="relative w-full bg-[#ffff] py-7">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <Image
          width={100}
          height={100}
          src="/navbar/wages-icon.svg"
          alt="main icon"
        />

        <div className="hidden md:flex md:gap-6">
          {links.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-2}
              duration={500}
            >
              <p className="text-primary_black text-[16px] hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out">
                {link.des}
              </p>
            </ScrollLink>
          ))}
        </div>

        {isTabletOrDesktop && <CustomButton>Get The App</CustomButton>}

        <div
          className="block md:hidden transition-transform duration-300 ease-in-out transform"
          onClick={handleHamToggle}
        >
          {open ? (
            <FaTimes className="text-[18px] text-primary_green  transition-transform duration-300 ease-in-out transform scale-110" />
          ) : (
            <FaBars className="text-[18px] text-primary_green transition-transform duration-300 ease-in-out transform scale-110" />
          )}
        </div>
      </div>

      <div
        className={`absolute top-full left-0 right-0 h-[90vh] bg-[#F9FFF9] z-50 flex flex-col items-center py-6 transition-transform duration-300 ease-in-out ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-full"
        }`}
      >
        <div
          className="flex  flex-col justify-center items-center text-center gap-9 mt-10"
          style={{ marginBottom: "50%" }}
        >
          {links.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-2}
              duration={500}
              className="text-primary_black hover:text-bold_green cursor-pointer text-[30px] text-[400] transition-colors duration-700 ease-in-out"
            >
              {link.des}
            </ScrollLink>
          ))}
        </div>
        <CustomButton className="text-[20px] py-4 w-[70%] capitalize">
          Get The App
        </CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
