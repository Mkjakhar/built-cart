import React from "react";
import { AdminIcon } from "./Icons";
import pageLogo from "../../assets/images/webp/page-logo.webp";
import { IoMdPower } from "react-icons/io";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <>
      <nav className="px-3 sticky top-0 shadow-base lg:px-8 bg-primary py-2 md:py-[13px] flex justify-between items-center">
        <div className="flex gap-2 sm:gap-4 items-center">
          <AdminIcon />
          <p className="text-white text-[20px] md:text-3xl lg:text-3xxl font-medium">
            Admin
          </p>
        </div>
        <Link to="/">
          <img
            className="w-14 md:w-[69px] md:h-[73px]"
            src={pageLogo}
            alt="page logo"
          />
        </Link>
        <Link to="/">
          <button className="py-[6px] md:py-[9px] px-3 md:px-[18px] border border-white flex gap-2 sm:gap-4 items-center text-white text-base sm:text-xl md:text-2xl font-medium rounded-[10px] bg-transparent">
            <IoMdPower className="text-white w-5 sm:w-[31px] h-6 sm:h-[31px]" />
            Log Out
          </button>
        </Link>
      </nav>
    </>
  );
};

export default AdminNav;
