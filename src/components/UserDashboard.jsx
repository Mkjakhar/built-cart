import React from "react";
import { ChooseIcon } from "./common/Icons";
import { userDashboardData } from "./common/Helper";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserDashboard = () => {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      className: "rounded-[10px]",
    });
  };
  return (
    <>
      <div className="flex items-center ps-9 pb-16">
        <ChooseIcon />
        <p
          onClick={showToastMessage}
          className="text-2xl text-black font-medium ms-[14px] mr-6"
        >
          Choose By
        </p>
        <Select>
          <SelectTrigger className="w-[277px]">
            <SelectValue placeholder="Today" />
          </SelectTrigger>
          <SelectContent width="w-[277px]">
            <SelectItem color="text-black" value="Today">
              Today
            </SelectItem>
            <SelectItem color="text-black" value="Yesterday">
              Yesterday
            </SelectItem>
            <SelectItem color="text-black" value="This week">
              This week
            </SelectItem>
            <SelectItem color="text-black" value="This month">
              This month
            </SelectItem>
            <SelectItem color="text-black" value="Last month">
              Last month
            </SelectItem>
            <SelectItem color="text-black" value="Last 3 month">
              Last 3 month
            </SelectItem>
            <SelectItem color="text-black" value="Last 6 month">
              Last 6 month
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
