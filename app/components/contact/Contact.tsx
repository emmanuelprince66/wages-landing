"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dapp from "./Dapp";

const Contact = () => {
  const accordionData = [
    {
      id: 1,
      text: "What is WageFinance?",
      content: "",
    },
    {
      id: 2,
      text: "Who is eligible for loans on WagesFinance?",
      content: "",
    },
    {
      id: 3,
      text: "How many types of savings are there on WagesFinance?",
      content: {
        one: "Share Your Code: Invite friends to join WagesFinance using your unique referral code.",
        two: "They Join: Sign up and start using the app.",
        three: "You Earn: Receive up to #2000 for each successful referral.",
      },
    },
    {
      id: 4,
      text: "Is it mandatory to pay the membership fee?",
      content: "",
    },
    {
      id: 5,
      text: "Can I take advantage of an investment opportunity without having an active savings with the cooperative?",
      content: "",
    },
    {
      id: 6,
      text: "What is the benefit for saving with the cooperative?",
      content: "",
    },
    {
      id: 7,
      text: "Can I save or invest without paying the membership fees?",
      content: "",
    },
    {
      id: 8,
      text: "How much can I access on loan?",
      content: "",
    },
    {
      id: 9,
      text: "When am I eligible to apply for a loan ?",
      content: "",
    },
    {
      id: 10,
      text: "How can I apply for a loan?",
      content: "",
    },
  ];
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="flex_column_center text-center w-[90%] md:w-[75%] py-4 mx-auto  gap-4 mt-[10%] md:mt-[3%]  justify-center">
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
              width={30}
              height={30}
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
              width={30}
              height={30}
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
              width={30}
              height={30}
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
      <div className="w-full  md:w-[65%] flex flex-col items-center mt-5 text-center ">
        <p className="font-[600] text-[25px] md:text-[30px] text-primary_black mb-5">
          Frequently Asked Questions
        </p>
        {accordionData.map((item) => (
          <Accordion key={item.id} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography
                className="text-start text-[14px] md:text-[18px]"
                sx={{
                  fontWeight: "600",
                  color: "#171717",
                }}
              >
                {item.id}. {item.text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.content && typeof item.content === "object" ? (
                  <div>
                    {Object.values(item.content).map((text, index) => (
                      <Typography
                        className="text-start text-[13px] md:text-[15px]"
                        key={index}
                      >
                        . {text}
                      </Typography>
                    ))}
                  </div>
                ) : (
                  item.content
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <Dapp />
    </div>
  );
};

export default Contact;
