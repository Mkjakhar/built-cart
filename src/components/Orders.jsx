import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Orders = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-4xl font-bold text-black leading-[80%] mb-24">
          Orders
        </p>
        <div>
          <div className="flex items-center gap-[10px] border max-w-[380px] w-full border-black rounded-[10px] px-[13px]">
            <IoSearchSharp className="text-dark text-[26px]" />
            <input
              type="text"
              placeholder="Search Name, Location..."
              className="text-2xl text-[#6E6E73] leading-[106%] w-full placeholder:text-[#6E6E73] font-medium outline-none border-0 bg-transparent py-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
