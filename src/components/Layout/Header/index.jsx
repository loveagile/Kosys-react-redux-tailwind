import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../consts";
import { Images } from "../../../assets";

const HeaderSection = () => {
  return (
    <>
      <div className="fixed w-full flex items-end justify-between h-20">
        <Link to={PATH.Home} className="flex items-center ml-[114px]">
          <span className="text-[32px]">KOSYS</span>
          <Images.Svgs.Logo className="mt-2" />
        </Link>
      </div>
    </>
  );
};

export default HeaderSection;
