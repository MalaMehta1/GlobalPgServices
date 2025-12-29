import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import App from "./App";
import ScrollText from "./components/common/ScrollText";
import { FaWhatsappSquare } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Suspense>
      <App />
      {/* <ScrollText/> */}
      <div className='social-link-item '>
        <a href='https://wa.me/918424995088' className="social-link ">
          <FaWhatsappSquare className='whatsapp-fixed' />
        </a>
      </div>
    </Suspense>
  </ThemeProvider>
  // </React.StrictMode>
);
