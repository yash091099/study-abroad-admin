import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import SideMenu1 from "./components/side-menu1";
import Footer from "./components/footer";
import Navbar1 from "./components/navbar1";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <div className="w-full relative bg-whitesmoke-200 h-[71.125rem] text-left text-[0.938rem] font-light-button-2-button-default">
      <div className="absolute top-[-0.125rem] left-[0rem] w-[120rem] h-[71rem] flex flex-row items-start justify-start gap-[2rem]">
        <SideMenu1 />
        <div className="w-[91.875rem] flex flex-col items-start justify-start py-[1rem] px-[0rem] box-border gap-[1.5rem]">
          <Navbar1 search="/search.svg" bell="/bell.svg" />
          <App />
          <Footer
            footerWidth="64.5rem"
            copyright2023FontFamily="'Public Sans'"
          />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
