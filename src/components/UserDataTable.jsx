import React, { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { DateRangeIcon } from "./common/Icons";
import { userData } from "./common/Helper";
import MyContext from "./context/MyContext";

const UserDataTable = () => {
  const { setActiveSubTab } = useContext(MyContext);
  return (
    <>
      <div className="overflow-auto hide_scroll">
        <div className="w-[1740px]">
          <div className="bg-[#BDBDBD] h-16 flex items-center">
            <div className="px-[54px]">
              <Checkbox border="border-dark" />
            </div>
            <div className="flex pl-6 items-center gap-2 w-[178px]">
              <p className="font-semibold text-nowrap text-2xl leading-5 text-[#282828]">
                Join Date
              </p>
              <DateRangeIcon />
            </div>
            <p className="font-semibold text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
              User
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[237px] text-2xl leading-5 text-[#282828]">
              Mobile
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[270px] text-2xl leading-5 text-[#282828]">
              Email
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[266px] text-2xl leading-5 text-[#282828]">
              Location
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
              Referral
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[243px] text-2xl leading-5 text-[#282828]">
              Status
            </p>
          </div>
          {userData.map((val, i) => (
            <div
              key={i}
              className={`h-[60px] mt-2 flex items-center ${
                i % 2 === 0 ? "bg-[#FEF9EB]" : "bg-white"
              }`}
            >
              <div className="px-[54px] w-[136px]">
                <Checkbox border="border-[#686868]" />
              </div>
              <p className="font-medium pl-6 w-[178px] text-nowrap text-2xl leading-5 text-[#282828]">
                {val.date}
              </p>
              <p
                onClick={() => setActiveSubTab("user-details")}
                className="font-medium cursor-pointer underline text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]"
              >
                {val.user}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[237px] text-2xl leading-5 text-[#282828]">
                {val.mobile}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[270px] text-2xl leading-5 text-[#282828]">
                {val.email}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[270px] text-2xl leading-5 text-[#282828]">
                {val.location}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
                {val.referral}
              </p>
              <p
                className={`font-medium text-nowrap pl-6 w-[243px] text-2xl leading-5 ${
                  val.status === "Pending" ||
                  val.status === "Cancelled" ||
                  val.status === "Inactive"
                    ? "text-[#FF3D00]"
                    : val.status === "Dispatched"
                    ? "text-[#FDC63A]"
                    : val.status === "Delivered" || val.status === "Active"
                    ? "text-[#0FB001]"
                    : ""
                }`}
              >
                {val.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDataTable;
