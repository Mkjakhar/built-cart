import React, { useContext, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import CommonBtn from "./common/CommonBtn";
import CategoriesTable from "./CategoriesTable";
import MyContext from "./context/MyContext";
import { CloseIcon } from "./common/Icons";
import { FiPlusCircle } from "react-icons/fi";
const CategoriesPage = () => {
  const { setActiveSubTab } = useContext(MyContext);
  const [editOverlay, setEditOverlay] = useState(false);
  const [addOverlay, setAddOverlay] = useState(false);
  return (
    <>
      <div className="w-full">
        <div className="flex gap-6 mb-[31px]">
          <p className="text-4xl ps-7 font-bold text-black leading-[80%]">
            Categories
          </p>
          <button
            onClick={() => setAddOverlay(!addOverlay)}
            className="py-5 w-[224px] text-center duration-200 border border-transparent hover:border-current hover:bg-transparent hover:text-current leading-5 ml-9 text-2xl font-medium px-6 rounded-[10px] bg-[#0FA958] text-white"
          >
            Add Category
          </button>
          <button
            onClick={() => setActiveSubTab("add-products")}
            className="py-5 w-[224px] text-center duration-200 border border-transparent hover:border-current hover:bg-transparent hover:text-current leading-5 text-2xl font-medium px-6 rounded-[10px] bg-[#0028B7] text-white"
          >
            Add Product
          </button>
        </div>
        <div className="flex items-center ps-7 mb-10 gap-3 justify-between pr-8">
          <div className="flex items-center gap-[10px] me-4 max-h-[62px] border w-[432px] border-black rounded-[10px] px-[13px]">
            <IoSearchSharp className="text-dark text-[28px]" />
            <input
              type="text"
              placeholder="Search Name, Location..."
              className="text-2xl text-[#6E6E73] leading-5 w-full placeholder:text-[#6E6E73] font-medium outline-none border-0 bg-transparent py-5"
            />
          </div>
          <div className="flex items-center gap-6 2xl:gap-[30px]">
            <CommonBtn
              clickEvent={() => setEditOverlay(!editOverlay)}
              style="text-white bg-[#606060] hover:bg-transparent hover:text-[#606060]"
              btntext="Edit"
            />
            <CommonBtn
              style="text-white bg-[#FF3D00] hover:bg-transparent hover:text-[#FF3D00]"
              btntext="Delete"
            />
            <CommonBtn
              style="text-black bg-[#FDC63A] hover:bg-transparent hover:text-[#FDC63A]"
              btntext="Export"
            />
          </div>
        </div>
        <CategoriesTable />
        {/* edit category */}
        <div
          className={`fixed z-50 duration-300 backdrop-blur-lg inset-0 flex justify-center items-center ${
            editOverlay
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={() => setEditOverlay(!editOverlay)}
            className="fixed inset-0"
          ></div>
          <div className="px-16 pt-3 pb-[75px] rounded-[30px] bg-white relative">
            <button
              onClick={() => setEditOverlay(!editOverlay)}
              className="absolute top-7 right-7"
            >
              <CloseIcon style="w-11" />
            </button>
            <p className="text-[42px] text-center font-semibold text-dark mb-16">
              Edit Category
            </p>
            <input
              type="text"
              placeholder="Category Name"
              className="text-2xl text-black outline-none w-[436px] placeholder:text-black leading-5 p-[19px] rounded-[10px] border-[#686868] border border-spacing-[0.5px]"
            />
            <div className="mb-[77px]">
              <div className="inline-flex mt-9 flex-col items-center gap-4 px-[22px] bg-white rounded-[10px] shadow-sm pb-2 pt-[18px]">
                <FiPlusCircle className="text-[40px] cursor-pointer text-black" />
                <p className="text-2xl text-black font-normal">Add Pic</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setEditOverlay(!editOverlay)}
                className="text-3xxl text-white bg-[#0FA958] w-[266px] px-[67px] leading-[110%] border border-transparent hover:border-current duration-200 hover:bg-transparent hover:text-[#0FA958] font-medium py-3.5 rounded-[10px]"
              >
                Change
              </button>
            </div>
          </div>
        </div>
        {/* add category */}
        <div
          className={`fixed z-50 duration-300 backdrop-blur-lg inset-0 flex justify-center items-center ${
            addOverlay
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={() => setAddOverlay(!addOverlay)}
            className="fixed inset-0"
          ></div>
          <div className="px-16 pt-3 pb-[75px] rounded-[30px] bg-white relative">
            <button
              onClick={() => setAddOverlay(!addOverlay)}
              className="absolute top-7 right-7"
            >
              <CloseIcon style="w-11" />
            </button>
            <p className="text-[42px] text-center font-semibold text-dark mb-16">
              Add Category
            </p>
            <input
              type="text"
              placeholder="Category Name"
              className="text-2xl text-black outline-none w-[436px] placeholder:text-black leading-5 p-[19px] rounded-[10px] border-[#686868] border border-spacing-[0.5px]"
            />
            <div className="mb-[77px]">
              <div className="inline-flex mt-9 flex-col items-center gap-4 px-[22px] bg-white rounded-[10px] shadow-sm pb-2 pt-[18px]">
                <FiPlusCircle className="text-[40px] cursor-pointer text-black" />
                <p className="text-2xl text-black font-normal">Add Pic</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setAddOverlay(!addOverlay)}
                className="text-3xxl text-white bg-[#0FA958] w-[266px] px-[67px] leading-[110%] border border-transparent hover:border-current duration-200 hover:bg-transparent hover:text-[#0FA958] font-medium py-3.5 rounded-[10px]"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
