import React from "react";
import { ChooseIcon } from "./common/Icons";
import { userDashboardData } from "./common/Helper";

const UserDashboard = () => {
  return (
    <>
      <div>
        <div className="flex items-center ps-[10px] pb-16">
          <ChooseIcon />
          <p className="text-2xl text-black font-medium ms-[14px]">Choose By</p>
        </div>
        <div className="grid grid-cols-2 gap-y-11 gap-x-[72px]">
          {userDashboardData.map((val, i) => (
            <div
              key={i}
              className="w-[387px] p-[22px] bg-light shadow-lg text-center rounded-[10px]"
            >
              <p className={`text-2xl font-medium mb-2 ${val.style}`}>
                {val.title}
              </p>
              <p className={`text-5xl font-bold leading-[72px] ${val.style}`}>
                {val.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
