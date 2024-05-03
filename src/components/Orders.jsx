import React, { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChooseIcon } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import OrdersTable from "./OrdersTable";
import MyContext from "./context/MyContext";
const Orders = () => {
  const { showExport, setShowExport } = useContext(MyContext);
  return (
    <>
      <div className="w-full">
        <p className="text-4xl ps-7 font-bold text-black leading-[80%] mb-24">
          Orders
        </p>
        <div className="overflow-auto w-[calc(100%-265px)] hide_scroll">
          <div className="flex items-center ps-7 mb-[18px] gap-3 w-[calc(1920px-265px)]">
            <div className="flex items-center gap-[10px] me-4 max-h-[62px] border max-w-[380px] w-full border-black rounded-[10px] px-[13px]">
              <IoSearchSharp className="text-dark text-[26px]" />
              <input
                type="text"
                placeholder="Search Name, Location..."
                className="text-2xl text-[#6E6E73] leading-5 w-full placeholder:text-[#6E6E73] font-medium outline-none border-0 bg-transparent py-5"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[277px]">
                <SelectValue placeholder="Update Status" />
              </SelectTrigger>
              <SelectContent width="w-[277px]">
                <SelectItem color="text-[#0E39D1]" value="Packed">
                  Packed
                </SelectItem>
                <SelectItem color="text-[#FDC63A]" value="Dispatched">
                  Dispatched
                </SelectItem>
                <SelectItem color="text-[#0FA958]" value="Delivered">
                  Delivered
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <ChooseIcon dimensions="w-6" />
              <p className="text-xl text-black font-medium ">Sort By</p>
            </div>
            <Select>
              <SelectTrigger className="w-[191px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent width="w-[191px]">
                <SelectItem color="text-[#FF3D00]" value="Pending">
                  Pending
                </SelectItem>
                <SelectItem color="text-[#686868]" value="Accepted">
                  Accepted
                </SelectItem>
                <SelectItem color="text-[#0E39D1]" value="Packed">
                  Packed
                </SelectItem>
                <SelectItem color="text-[#FDC63A]" value="Dispatched">
                  Dispatched
                </SelectItem>
                <SelectItem color="text-[#0FA958]" value="Delivered">
                  Delivered
                </SelectItem>
                <SelectItem color="text-[#B22B00]" value="Cancelled">
                  Cancelled
                </SelectItem>
              </SelectContent>
            </Select>
            <CommonBtn
              style="text-white bg-[#0FB001] hover:bg-transparent hover:text-[#0FB001]"
              btntext="Accept"
            />
            <CommonBtn
              style="text-white bg-[#FF3D00] hover:bg-transparent hover:text-[#FF3D00]"
              btntext="Refund"
            />
            <CommonBtn
              clickEvent={() => setShowExport(!showExport)}
              style="text-black bg-[#FDC63A] hover:bg-transparent hover:text-[#FDC63A]"
              btntext="Export"
            />
          </div>
        </div>
        <OrdersTable />
      </div>
    </>
  );
};

export default Orders;
