"use client";
import React from 'react';
import { Button } from '@mui/material';
interface CustomButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  children: React.ReactNode;
  backgroundColor?:string;
  className?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', onClick, children, className , backgroundColor="#02981D" }) => {
  return (
    <Button
    sx={{
        background:backgroundColor,
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
