"use client";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: `${montserrat.style.fontFamily}, Arial, sans-serif`, // Set Montserrat as the global font
  },
});

interface ThemeProviderComponentProps {
  children: React.ReactNode;
}

const ThemeProviderComponent: React.FC<ThemeProviderComponentProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
