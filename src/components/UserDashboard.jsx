import React from "react";
import { ChooseIcon } from "./common/Icons";
import { userDashboardData } from "./common/Helper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const UserDashboard = () => {
  return (
    <>
      <div className="flex items-center ps-9 pb-16">
        <ChooseIcon />
        <p className="text-2xl text-black font-medium ms-[14px] mr-6">
          <a href="#move">Choose By</a>
        </p>
        <Select>
          <SelectTrigger className="w-[277px]">
            <SelectValue placeholder="Today" />
          </SelectTrigger>
          <SelectContent width="w-[277px]">
            <SelectItem color="text-[#6E6E73]" value="Today">
              Today
            </SelectItem>
            <SelectItem color="text-[#6E6E73]" value="Yesterday">
              Yesterday
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="inline-grid grid-cols-2 ps-7 gap-y-11 gap-x-[72px] pb-10">
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
    </>
  );
};

export default UserDashboard;
