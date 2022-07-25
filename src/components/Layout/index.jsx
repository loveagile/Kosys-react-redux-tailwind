import React from "react";
import { LoadingComponent } from "../Common";
import HeaderSection from "./Header";
import FooterSection from "./Footer";

const LayoutComponent = ({ children }) => {
  return (
    <div className="bg-blue-200 w-full">
      {false && <LoadingComponent />}

      <HeaderSection />
      <div className="pt-16 pb-16 h-full">{children}</div>
      <FooterSection />
    </div>
  );
};

export default LayoutComponent;
