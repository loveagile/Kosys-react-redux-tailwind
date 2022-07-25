import React from "react";
import { Images } from "../../../assets";

const LoadingComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute z-10 bg-gray-800/75">
      <Images.Svgs.Spinning />
    </div>
  );
};

export default LoadingComponent;
