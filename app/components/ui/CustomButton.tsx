"use client";
import React from "react";
import { Button } from "@mui/material";
interface CustomButtonProps {
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  py?: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "contained",
  onClick,
  children,
  className,
  backgroundColor = "#02981D",
  py = "10px",
}) => {
  return (
    <Button
      sx={{
        background: backgroundColor,
        py: py,
        textTransform: "capitalize",
      }}
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
