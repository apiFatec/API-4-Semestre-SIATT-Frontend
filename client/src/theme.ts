// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
    "9xl": "8rem", // 128px
  },
  colors: {
    customBackground: "#12161C",
    customButtonBackground: "#ffffff",
    customInputBackground: "#20272d",
    customTextColor: "#ffffff",
  },
  styles: {
    global: {
      body: {
        bg: "customBackground",
        color: "customTextColor",
        fontFamily: "body",
      },
      button: {
        borderRadius: "4px",
        backgroundColor: "customButtonBackground",
      },
      input: {
        borderRadius: "4px",
        backgroundColor: "customInputBackground",
        border: "none",
        borderColor: "transparent", 
        color: "white",
        _focus: {
          color: "white",
          border: "none",
          borderColor: "transparent", 
        },
        "::placeholder": {
          color: "#6F7277", 
        },
      },
    },
  },
});

export default theme;