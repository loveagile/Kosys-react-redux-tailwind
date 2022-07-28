import React from "react";
import { LoadingComponent } from "../Common";
import HeaderSection from "./Header";
import FooterSection from "./Footer";

const LayoutComponent = ({ children }) => {
  return (
    <div>
      {/* Main Layout */}
      <HeaderSection />
      <div className="pt-16 pb-16 h-full">{children}</div>
      <FooterSection />
      {/* Side Bars */}
      <div className="fixed top-20 left-0 bottom-0 w-12 bg-[#FF3232]"></div>
      <div className="fixed top-20 right-0 bottom-0 w-12 bg-[#FF3232]"></div>
      {/* Loading */}
      {false && <LoadingComponent />}
    </div>
  );
};

export default LayoutComponent;
