import React, { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { DateRangeIcon } from "./common/Icons";
import { ordersLogsdata } from "./common/Helper";
import MyContext from "./context/MyContext";

const OrderLogTable = () => {
  const { setActiveSubTab } = useContext(MyContext);
  return (
    <>
      <div className="overflow-auto hide_scroll">
        <div className="w-[2966px]">
          <div className="bg-[#BDBDBD] h-16 flex items-center">
            <div className="px-[54px]">
              <Checkbox border="border-dark" />
            </div>
            <div className="flex pl-6 items-center gap-9 w-[178px]">
              <p className="font-semibold text-nowrap text-2xl leading-5 text-[#282828]">
                Date
              </p>
              <DateRangeIcon />
            </div>
            <p className="font-semibold text-nowrap pl-6 w-[232px] text-2xl leading-5 text-[#282828]">
              Order ID
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[249px] text-2xl leading-5 text-[#282828]">
              User
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[237px] text-2xl leading-5 text-[#282828]">
              Location
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[315px] text-2xl leading-5 text-[#282828]">
              Referral
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[314px] text-2xl leading-5 text-[#282828]">
              Items
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[240px] text-2xl leading-5 text-[#282828]">
              Vendor
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[119px] text-2xl leading-5 text-[#282828]">
              Qty
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[199px] text-2xl leading-5 text-[#282828]">
              Price
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[244px] text-2xl leading-5 text-[#282828]">
              Payment mode
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[244px] text-2xl leading-5 text-[#282828]">
              Delivery Person
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[244px] text-2xl leading-5 text-[#282828]">
              Status
            </p>
          </div>
          {ordersLogsdata.map((val, i) => (
            <div
              key={i}
              className={`h-[60px] mt-2 flex items-center ${
                i === 0 || i === 2 || i === 4 || i === 7 || i === 9
                  ? "bg-[#FEF9EB]"
                  : "bg-white"
              }`}
            >
              <div className="px-[54px] w-[136px]">
                <Checkbox border="border-[#686868]" />
              </div>
              <p className="font-medium pl-6 w-[178px] text-nowrap text-2xl leading-5 text-[#282828]">
                {val.date}
              </p>
              <p
                onClick={() => setActiveSubTab("order-details")}
                className="font-medium cursor-pointer underline text-nowrap pl-6 w-[232px] text-2xl leading-5 text-dark"
              >
                {val.id}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[249px] text-2xl leading-5 text-[#282828]">
                {val.user}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[237px] text-2xl leading-5 text-[#282828]">
                {val.location}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[315px] text-2xl leading-5 text-[#282828]">
                {val.referral}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[314px] text-2xl leading-5 text-[#282828]">
                {val.items}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[240px] text-2xl leading-5 text-[#282828]">
                {val.vender}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[119px] text-2xl leading-5 text-[#282828]">
                {val.qty}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[199px] text-2xl leading-5 text-[#282828]">
                {val.price}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[244px] text-2xl leading-5 text-[#282828]">
                {val.paymentMode}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[244px] text-2xl leading-5 text-[#282828]">
                {val.person}
              </p>
              <p
                className={`font-medium text-nowrap pl-6 w-[244px] text-2xl leading-5 ${
                  val.status === "Pending" || val.status === "Cancelled"
                    ? "text-[#FF3D00]"
                    : val.status === "Dispatched"
                    ? "text-[#FDC63A]"
                    : val.status === "Delivered"
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

export default OrderLogTable;
