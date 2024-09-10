"use client";
import Image from "next/image";
import React from "react";
import Dapp from "../contact/Dapp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Blog = () => {
  const blogRef = useRef(null);
  const financialRef = useRef(null);
  const literacyRef = useRef(null);
  const budgetRef = useRef(null);
  const helpRef = useRef(null);
  const dappRef = useRef(null);

  const blogRefView = useInView(blogRef, { once: false });
  const financialRefView = useInView(financialRef, { once: false });
  const literacyRefView = useInView(literacyRef, { once: false });
  const budgetRefView = useInView(budgetRef, { once: false });
  const helpRefView = useInView(helpRef, { once: false });
  const dappRefView = useInView(dappRef, { once: false });

  const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex_column_center text-center w-[90%]  md:w-[1200px] py-4 mx-auto  gap-4 mt-[10%] md:mt-[3%]  justify-center">
      <motion.div
        ref={blogRef}
        initial="hidden"
        animate={blogRefView ? "visible" : "hidden"}
        variants={fadeVariant}
        className="flex_column_center text-center w-full"
      >
        <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-1 ">
          Blog Posts
        </p>
        <p className="text-[14px] font-[400] md:text-[20px] md:font-[400] mb-6 max-w-[97%] md:max-w-[67%]">
          Welcome to WagesFinance blog, where we empower you to take control of
          your financial future.
        </p>
        <p className="text-[20px] font-[600] md:text-[25px] md:font-[600] mb-1">
          Financial Literacy
        </p>
      </motion.div>

      <div className="w-full mt-[10%] md:mt-[4%]">
        <motion.div
          ref={financialRef}
          initial="hidden"
          animate={financialRefView ? "visible" : "hidden"}
          variants={fadeVariant}
          className="flex flex-col md:flex-row md:gap-4 w-full"
        >
          <div className="flex flex-col md:flex-row md:flex-1 items-center justify-between ">
            <div className="order-1 md:order-1 md:flex-1">
              <div className="flex_column gap-5 mb-7 md:mb-0">
                <p className="  text-[17px] md:text-[20px] font-[600] text-primary_black">
                  Understanding Financial Literacy🤔
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 md:max-w-[80%]">
                  Financial literacy is the ability to understand and
                  effectively use various financial skills, including personal
                  financial management, budgeting, and investing.
                </p>
              </div>
            </div>
            <div className="order-2 md:order-2 md:flex-2">
              <div className="h-full w-full">
                <Image
                  className="object-contain pt-1"
                  src="/blog/b-1.svg"
                  alt="icon"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={literacyRef}
          initial="hidden"
          animate={literacyRefView ? "visible" : "hidden"}
          variants={fadeVariant}
          className="flex flex-col md:flex-row md:gap-4 mt-[10%]"
        >
          <div className="flex flex-col md:flex-row md:flex-1 items-center justify-between ">
            <div className="order-2 md:order-1 md:flex-1">
              <div className="h-full w-full">
                <Image
                  className="object-contain pt-1"
                  src="/blog/b-2.svg"
                  alt="icon"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
            <div className="order-1 md:order-2 md:flex-1 ">
              <div className="flex_column gap-5 mb-7 mt-9 md:mb-0 ">
                <p className="  text-[17px] md:text-[20px] font-[600] text-primary_black">
                  Why You should Be Financial Literate👀
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  1. Being financially literate helps you make informed
                  decisions about saving, investing, and spending.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  2. It allows you to understand the risks and rewards
                  associated with different financial decisions With better
                  financial literacy, you can manage your finances more
                  effectively, avoid unnecessary debt, and plan for future
                  financial needs.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  3. Understanding financial principles helps you set realistic
                  financial goals and create a plan to achieve them.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={budgetRef}
          initial="hidden"
          animate={budgetRefView ? "visible" : "hidden"}
          variants={fadeVariant}
          className="flex flex-col md:flex-row md:gap-4 mt-[10%]"
        >
          <div className="flex flex-col md:flex-row md:flex-1 items-center justify-center  md:gap-4">
            <div className="order-2 md:order-2 md:flex-2">
              <div className="h-full w-full">
                <Image
                  className="object-contain pt-1"
                  src="/blog/b-3.svg"
                  alt="icon"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
            <div className="order-1 md:order-1 md:flex-1">
              <div className="flex_column gap-5 mb-7 mt-9 md:mb-0">
                <p className="  text-[17px] md:text-[20px] font-[600] text-primary_black">
                  Key Components of Financial Literacy📌
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 md:max-w-[90%]">
                  <span className="font-[500]"> 1. Budgeting</span>: Learn to
                  create and maintain a budget that tracks your income and
                  expenses.A good budget helps you live within your means.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 md:max-w-[90%]">
                  <span className="font-[500]">2. Saving</span>: Discover the
                  importance of saving and different strategies to build your
                  savings.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 md:max-w-[90%]">
                  <span className="font-[500]">3. Investing</span>: Gain
                  insights into various investment options and how they can help
                  grow your wealth. Learn about the stock market, bonds, mutual
                  funds, and other investment vehicles, and understand the
                  concept of risk versus reward.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 md:max-w-[90%]">
                  <span className="font-[500]"> 4. Debt Management</span>:
                  Understand how to manage debt effectively. Learn about
                  different types of debt, strategies for paying off debt, and
                  how to avoid falling into debt traps.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 md:max-w-[90%]">
                  <span className="font-[500]">5. Financial Planning</span>:
                  Explore the importance of financial planning and how to create
                  a comprehensive financial plan. This includes setting
                  financial goals, and making retirement plans.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={helpRef}
          initial="hidden"
          animate={helpRefView ? "visible" : "hidden"}
          variants={fadeVariant}
          className="flex flex-col md:flex-row md:gap-4 mt-[10%]"
        >
          <div className="flex flex-col md:flex-row md:flex-1 items-center justify-center  md:gap-4">
            <div className="order-2 md:order-1 md:flex-1">
              <div className="h-full w-full">
                <Image
                  className="object-contain pt-1"
                  src="/blog/b-4.svg"
                  alt="icon"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
            <div className="order-1 md:order-2 md:flex-1">
              <div className="flex_column gap-5 mb-7 mt-9 md:mb-0">
                <p className="  text-[17px] md:text-[20px] font-[600] text-primary_black">
                  How WagesFinance Can Help😌
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  At WagesFinance, we are committed to helping you enhance your
                  financial literacy and achieve your financial goals. Our
                  cooperative system offers a range of tools and resources
                  designed to support you on your financial journey:
                </p>
                <p className=" text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  <span className="font-[500]">. Savings Tools:</span> Our app
                  provides personalized savings plans and automated savings
                  features to help you save more effectively.
                </p>
                <p className=" text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  <span className="font-[500]">. Investment Guidance:</span>{" "}
                  Access expert investment advice and tools to make informed
                  investment decisions that align with your goals.
                </p>
                <p className=" text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  <span className="font-[500]">. Goal Tracking:</span>Set and
                  track your financial goals with our intuitive goal-setting
                  features, ensuring you stay on the path to success.
                </p>
                <p className=" text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  <span className="font-[500]">. Educational Resources:</span>{" "}
                  Benefit from a wealth of educational materials, including
                  articles, tutorials, and webinars on various financial topics.
                </p>
                <p className="text-[15px] font-[400] text-primary_gray text-start leading-5 ">
                  Financial literacy is not just about understanding money; it's
                  about making your money work for you. With WagesFinance, you
                  have taken the first step towards a secure and prosperous
                  financial future.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={dappRef}
        initial="hidden"
        animate={dappRefView ? "visible" : "hidden"}
        variants={fadeVariant}
        className="w-full"
      >
        <Dapp />
      </motion.div>
    </div>
  );
};

export default Blog;
