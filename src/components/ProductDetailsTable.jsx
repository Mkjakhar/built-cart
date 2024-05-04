import React, { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { productDetailsData } from "./common/Helper";
import MyContext from "./context/MyContext";
const ProductDetailsTables = () => {
  const { setActiveSubTab } = useContext(MyContext);
  return (
    <>
      <div className="overflow-auto hide_scroll">
        <div className="w-[calc(1920px-265px)]">
          <div className="bg-[#BDBDBD] h-16 flex gap-[65px] items-center">
            <div className="px-[54px]">
              <Checkbox border="border-dark" />
            </div>
            <div className="flex pl-6 items-center gap-2 w-[244px] -ml-[65px]">
              <p className="font-semibold text-nowrap text-2xl leading-5 text-[#282828]">
                Date
              </p>
            </div>
            <p className="font-semibold text-nowrap pl-6 w-[280px] text-2xl leading-5 text-[#282828]">
              Product
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[280px] text-2xl leading-5 text-[#282828]">
              Price per piece
            </p>
            <p className="font-semibold text-nowrap pl-6 w-[280px] text-2xl leading-5 text-[#282828]">
              Total Orders
            </p>
          </div>
          {productDetailsData.map((val, i) => (
            <div
              key={i}
              className={`h-[60px] mt-2 gap-[65px] flex items-center ${
                i % 2 === 0 ? "bg-[#FEF9EB]" : "bg-white"
              }`}
            >
              <div className="px-[54px] w-[136px]">
                <Checkbox border="border-[#686868]" />
              </div>
              <p className="font-medium pl-6 w-[244px] text-nowrap text-2xl leading-5 text-[#282828] -ml-[65px]">
                {val.date}
              </p>
              <p className="font-medium pl-6 w-[280px] text-nowrap text-2xl leading-5 text-[#282828]">
                {val.product}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[280px] text-2xl leading-5 text-[#282828]">
                {val.price}
              </p>
              <p className="font-medium text-nowrap pl-6 w-[280px] text-2xl leading-5 text-[#282828]">
                {val.orders}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsTables;
