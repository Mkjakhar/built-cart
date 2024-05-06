import React from "react";
import { CalendarTwoIcon } from "./common/Icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const OffersPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-start pr-[26px] mb-[38px]">
          <p className="text-4xl pl-9 font-bold text-black leading-[80%]">
            Offers
          </p>
          <button className="text-2xl font-semibold text-white duration-200 border border-transparent rounded-[10px] hover:text-[#0FB001] px-16 py-3.5 bg-[#0FB001] hover:bg-transparent hover:border-current">
            Send Offer
          </button>
        </div>
        <form>
          <div className="flex pl-9 gap-14 2xl:gap-[90px] w-[95%]">
            <div className="w-full">
              <div className="flex flex-col">
                <label
                  htmlFor="coupon"
                  className="text-2xl font-medium text-black mb-4"
                >
                  Enter Coupon Code
                </label>
                <input
                  id="coupon"
                  type="text"
                  className="text-3xxl font-medium h-[63px] text-[#6E6E73] placeholder:text-[#6E6E73] border border-spacing-[0.5px] border-[#6E6E73] rounded-[10px] py-2 px-5 w-[420px] outline-none"
                  placeholder="Enter Code"
                />
              </div>
              <div className="flex flex-col mt-[46px]">
                <label
                  htmlFor="order-value"
                  className="text-2xl font-medium text-black mb-4"
                >
                  Order value
                </label>
                <div>
                  <input
                    id="order-value"
                    type="number"
                    className="text-3xxl font-medium h-[63px] text-[#6E6E73] placeholder:text-[#6E6E73] border border-spacing-[0.5px] border-[#6E6E73] rounded-[10px] py-2 px-5 w-[420px] outline-none"
                    placeholder="₹"
                  />
                </div>
              </div>
              <p className="text-2xl font-medium text-black mb-6 mt-[53px]">
                Coupon Validity
              </p>
              <div className="flex items-center flex-col min-[1800px]:flex-row gap-8 mb-[72px]">
                <div className="flex items-center gap-5 w-full">
                  <p className="text-2xl font-normal text-black">From</p>
                  <div className="flex relative w-full items-center">
                    <input
                      className="h-[63px] border outline-none border-[#6E6E73] w-full uppercase text-[#6E6E73] rounded-[10px] py-3.5 px-5 leading-5 text-2xl border-spacing-[0.5px]"
                      type="date"
                    />
                    <CalendarTwoIcon style="absolute top-1/2 bg-white -translate-y-1/2 right-[25px] pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center gap-[51px] min-[1800px]:gap-5 w-full">
                  <p className="text-2xl font-normal text-black">To</p>
                  <div className="flex relative w-full items-center">
                    <input
                      className="h-[63px] border outline-none border-[#6E6E73] w-full uppercase text-[#6E6E73] rounded-[10px] py-3.5 px-5 leading-5 text-2xl border-spacing-[0.5px]"
                      type="date"
                    />
                    <CalendarTwoIcon style="absolute top-1/2 bg-white -translate-y-1/2 right-[25px] pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-3">
                <label
                  htmlFor="t&c"
                  className="text-2xl font-medium text-black mb-4"
                >
                  Enter T&C
                </label>
                <textarea
                  name=""
                  id="t&c"
                  rows={8}
                  placeholder="Write here"
                  className="text-xl font-normal max-h-[262px] text-[#6E6E73] placeholder:text-[#6E6E73] border border-spacing-[0.5px] border-[#6E6E73] rounded-[10px] py-[22px] px-[26px] outline-none"
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[28px] font-medium text-black">
                Select Criteria
              </p>
              <p className="text-2xl font-medium text-black mb-7 mt-6">
                Account Creation Date :
              </p>
              <div className="flex items-center flex-col min-[1800px]:flex-row gap-8 mb-[72px]">
                <div className="flex items-center gap-5 w-full">
                  <p className="text-2xl font-normal text-black">From</p>
                  <div className="flex relative w-full items-center">
                    <input
                      className="h-[63px] border outline-none border-[#6E6E73] w-full uppercase text-[#6E6E73] rounded-[10px] py-3.5 px-5 leading-5 text-2xl border-spacing-[0.5px]"
                      type="date"
                    />
                    <CalendarTwoIcon style="absolute top-1/2 bg-white -translate-y-1/2 right-[25px] pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center gap-[51px] min-[1800px]:gap-5 w-full">
                  <p className="text-2xl font-normal text-black">To</p>
                  <div className="flex relative w-full items-center">
                    <input
                      className="h-[63px] border outline-none border-[#6E6E73] w-full uppercase text-[#6E6E73] rounded-[10px] py-3.5 px-5 leading-5 text-2xl border-spacing-[0.5px]"
                      type="date"
                    />
                    <CalendarTwoIcon style="absolute top-1/2 bg-white -translate-y-1/2 right-[25px] pointer-events-none" />
                  </div>
                </div>
              </div>
              <p className="text-2xl font-medium text-black mb-6">
                Number of Referrals :
              </p>
              <div className="flex items-center gap-8 mb-10">
                <div className="flex items-center gap-5">
                  <p className="text-2xl font-normal text-black">From:</p>
                  <input
                    className="border h-[63px] outline-none max-w-[113px] border-[#6E6E73] w-full uppercase text-[#6E6E73] rounded-[10px] py-3.5 px-5 leading-5 text-2xl border-spacing-[0.5px]"
                    type="number"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-2xl font-normal text-black">To:</p>
                  <input
                    className="border h-[63px] outline-none max-w-[113px] border-[#6E6E73] w-full uppercase text-[#6E6E73] rounded-[10px] py-3.5 px-5 leading-5 text-2xl border-spacing-[0.5px]"
                    type="number"
                  />
                </div>
              </div>
              <p className="text-2xl font-medium text-black mb-4">
                Select State
              </p>
              <Select>
                <SelectTrigger className="w-[401px]">
                  <SelectValue placeholder="Choose Location" />
                </SelectTrigger>
                <SelectContent width="w-[401px]">
                  <SelectItem color="text-[#6E6E73]" value="Haryana">
                    Haryana
                  </SelectItem>
                  <SelectItem color="text-[#6E6E73]" value="Karnataka">
                    Karnataka
                  </SelectItem>
                  <SelectItem color="text-[#6E6E73]" value="Maharashtra">
                    Maharashtra
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-[50px] flex flex-col">
                <label
                  htmlFor="total-beneficiaries"
                  className="text-2xl font-medium text-black mb-4"
                >
                  Total Beneficiaries
                </label>
                <input
                  id="total-beneficiaries"
                  className="text-3xxl font-medium h-[63px] text-[#6E6E73] placeholder:text-[#6E6E73] border border-spacing-[0.5px] border-[#6E6E73] rounded-[10px] py-2 px-5 max-w-[365px] outline-none"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OffersPage;
