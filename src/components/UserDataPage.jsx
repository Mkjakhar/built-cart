import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import CommonBtn from "./common/CommonBtn";
import UserDataTable from "./UserDataTable";
const UserDataPage = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-4xl ps-7 font-bold text-black leading-[80%] mb-[62px]">
          User Data
        </p>
        <div className="flex items-center ps-7 mb-[18px] gap-3 justify-between pr-8">
          <div className="flex items-center gap-[10px] me-4 max-h-[62px] border w-[432px] border-black rounded-[10px] px-[13px]">
            <IoSearchSharp className="text-dark text-[28px]" />
            <input
              type="text"
              placeholder="Search Name, Location..."
              className="text-2xl text-[#6E6E73] leading-5 w-full placeholder:text-[#6E6E73] font-medium outline-none border-0 bg-transparent py-5"
            />
          </div>
          <div className="flex items-center gap-7">
            <CommonBtn
              style="text-white bg-[#FF3D00] hover:bg-transparent hover:text-[#FF3D00]"
              btntext="Block"
            />
            <CommonBtn
              style="text-black bg-[#FDC63A] hover:bg-transparent hover:text-[#FDC63A]"
              btntext="Export"
            />
          </div>
        </div>
        <UserDataTable />
      </div>
    </>
  );
};

export default UserDataPage;
