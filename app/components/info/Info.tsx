import React from "react";
import SwiperComponent from "../swiper/Swiper";

const Info = () => {
  return (
    <div className="flex_column_center  text-center  w-[90%] md:w-[75%] py-4 mx-auto  gap-4 mt-[10%] md:mt-[4%]  justify-center">
      <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-6">
        Hear From Some of Our Users
      </p>

      <div className=" w-full mx-auto">
        <SwiperComponent />
      </div>
    </div>
  );
};

export default Info;
