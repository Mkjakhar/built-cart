import React, { useContext } from "react";
import { CalendarIcon, CloseIcon, DownArrowIcon } from "./common/Icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MyContext from "./context/MyContext";
const ExportOverlay = () => {
  const { showExport, setShowExport } = useContext(MyContext);
  return (
    <>
      <div
        className={`fixed z-50 duration-300 backdrop-blur-lg inset-0 flex justify-center items-center ${
          showExport
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setShowExport(!showExport)}
          className="fixed inset-0"
        ></div>
        <div className="px-7 py-6 rounded-[30px] bg-white relative">
          <button
            onClick={() => setShowExport(!showExport)}
            className="absolute top-5 right-8"
          >
            <CloseIcon />
          </button>
          <p className="text-2xl font-semibold text-black mb-9">Export Files</p>
          <div className="flex justify-between gap-10 mb-4">
            <div className="flex flex-col">
              <p className="text-xl font-normal text-black mb-[10px]">From</p>
              <div className="py-3 pl-6 pr-4 border gap-[55px] flex items-center border-black rounded-[10px]">
                <p className="text-xl font-medium text-dark ">January</p>
                <div className="flex items-center gap-6">
                  <DownArrowIcon />
                  <CalendarIcon />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-normal text-black mb-[10px]">To</p>
              <div className="py-3 pl-6 pr-4 border gap-[55px] flex items-center border-black rounded-[10px]">
                <p className="text-xl font-medium text-dark ">February</p>
                <div className="flex items-center gap-6">
                  <DownArrowIcon />
                  <CalendarIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-normal text-black mb-[10px]">
              File Type
            </p>
            <Select>
              <SelectTrigger
                titleColor="placeholder:!text-dark !text-dark"
                className="w-[255px]"
              >
                <SelectValue placeholder=".doc" />
              </SelectTrigger>
              <SelectContent width="w-[255px]">
                <SelectItem color="text-dark" value=".doc">
                  .doc
                </SelectItem>
                <SelectItem color="text-dark" value="Dispatched">
                  .doc
                </SelectItem>
              </SelectContent>
            </Select>
            <button className="w-full text-center p-4 bg-[#FDC63A] rounded-[10px] mt-[50px] text-xl text-white font-semibold">
              Export
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExportOverlay;
