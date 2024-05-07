import React, { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { categoriesData } from "./common/Helper";
import MyContext from "./context/MyContext";
import { DateRangeIcon } from "./common/Icons";
const CategoriesTable = () => {
  const { setActiveSubTab } = useContext(MyContext);
  return (
    <>
      <div className="overflow-auto hide_scroll">
        <div className="w-[calc(1920px-265px)]">
          <div className="bg-[#BDBDBD] h-16 flex gap-[62px] items-center">
            <div className="px-[54px]">
              <Checkbox border="border-dark" />
            </div>
            <div className="flex pl-6 items-center gap-2 w-[178px] -ml-[62px]">
              <p className="font-semibold text-nowrap text-2xl leading-5 text-[#282828]">
                Date
              </p>
              <DateRangeIcon />
            </div>
            <p className="font-semibold text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
              Category Pic
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
              Category
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[270px] text-2xl leading-5 text-[#282828]">
              Total Products
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
              Total Orders
            </p>
          </div>
          {categoriesData.map((val, i) => (
            <div
              key={i}
              className={`h-[60px] mt-2 gap-[62px] flex items-center ${
                i % 2 === 0 ? "bg-[#FEF9EB]" : "bg-white"
              }`}
            >
              <div className="px-[54px] w-[136px]">
                <Checkbox border="border-[#686868]" />
              </div>
              <p className="font-medium pl-6 w-[178px] text-nowrap text-2xl leading-5 text-[#282828] -ml-[62px]">
                {val.date}
              </p>
              <div className=" pl-6 w-[204px]">
                <img
                  width={67}
                  src={val.img}
                  className="rounded"
                  alt="category pic"
                />
              </div>
              <p className="font-medium underline text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
                {val.category}
              </p>

              <p
                onClick={() => setActiveSubTab("categories-products")}
                className="font-medium cursor-pointer underline text-nowrap pl-6 w-[270px] text-2xl leading-5 text-[#0028B7]"
              >
                {val.products}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[204px] text-2xl leading-5 text-[#282828]">
                {val.orders}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesTable;
