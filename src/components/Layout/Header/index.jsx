import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../consts";
import { Images } from "../../../assets";

const HeaderSection = () => {
  return (
    <>
      <div className="fixed w-full flex items-end justify-between h-20">
        <Link to={PATH.Home} className="flex items-center ml-[114px]">
          <span className="text-[32px] text-[#ff3232]">KOSYS</span>
          <Images.Svgs.Logo className="mt-2" />
        </Link>
        <div className="flex items-end pr-[150px]">
          <div className="relative">
            <Link to={PATH.Projects} className="text-[15px] text-[#5f5f5f] ml-[28px]">Projects</Link>
            <Images.Svgs.Vector className="absolute left-[100%] top-[10%]"/>
          </div>
            <Link to={PATH.UseKosys} className="text-[15px] text-[#5f5f5f] ml-[28px]">Use KOSYS</Link>
            <Link to={PATH.Ico} className="text-[15px] text-[#5f5f5f] ml-[28px]">ICO</Link>
          <div className="relative">
            <Link to={PATH.Entreprenuers} className="text-[15px] text-[#5f5f5f] ml-[28px]">EntrePrenuers</Link>
            <Images.Svgs.Vector className="absolute left-[100%] top-[10%]"/>
          </div>
          <div className="relative">
            <Link to={PATH.Connect} className="text-[15px] text-[#5f5f5f] ml-[28px]">Connect</Link>
            <Images.Svgs.Vector className="absolute left-[100%] top-[10%]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
