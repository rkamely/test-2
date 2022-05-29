import defaultTheme from "./default";

import { createTheme } from '@material-ui/core/styles'
import { useState } from "react";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
    
  },
};



const themes = {
  default: createTheme({ ...defaultTheme, ...overrides, direction: "rtl",  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }}),
};

export default themes;
