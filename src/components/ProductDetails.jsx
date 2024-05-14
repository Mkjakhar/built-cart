import React, { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import CommonBtn from "./common/CommonBtn";
import ProductDetailsTables from "./ProductDetailsTable";
import MyContext from "./context/MyContext";
import { removeCategory, updateCategory } from "./utils/auth";
const ProductDetails = () => {
  const {
    setActiveSubTab,
    categorySelect,
    setCategoryData,
    setEditOverlay,
    editOverlay,
    categoryData,
  } = useContext(MyContext);
  const deleteCategory = (id) => {
    console.log(id);
    removeCategory(id, setActiveSubTab, setCategoryData);
  };
  const editCategory = (id) => {
    console.log(id);
    updateCategory(id, setActiveSubTab, setCategoryData);
  };

  const dataForCurrTitle = categoryData.filter(
    (currElem) => currElem.id === categorySelect
  );

  return (
    <>
      <div className="w-full">
        <p className="text-4xl ps-7 font-bold text-black leading-[80%] mb-[62px]">
          {dataForCurrTitle[0].name}
        </p>

        <div className="flex items-center ps-7 mb-10 gap-3 justify-between pr-8 hide_scroll overflow-auto">
          <div>
            <div className="flex items-center gap-[10px] me-4 max-h-[62px] border w-[432px] border-black rounded-[10px] px-[13px]">
              <IoSearchSharp className="text-dark text-[28px]" />
              <input
                type="text"
                placeholder="Search Name, Location..."
                className="text-2xl text-[#6E6E73] leading-5 w-full placeholder:text-[#6E6E73] font-medium outline-none border-0 bg-transparent py-5"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 2xl:gap-[30px]">
            <button
              onClick={() => setActiveSubTab("add-products")}
              className="py-5 w-[224px] text-center duration-200 border border-transparent hover:border-current hover:bg-transparent hover:text-current leading-5 text-2xl font-medium px-6 rounded-[10px] bg-[#0028B7] text-white"
            >
              Add Product
            </button>
            <CommonBtn
              clickEvent={() => setEditOverlay(!editOverlay)}
              style="text-white bg-[#606060] hover:bg-transparent hover:text-[#606060]"
              btntext="Edit"
            />
            <CommonBtn
              clickEvent={() => deleteCategory(categorySelect)}
              style="text-white bg-[#FF3D00] hover:bg-transparent hover:text-[#FF3D00]"
              btntext="Delete"
            />
            <CommonBtn
              style="text-black bg-[#FDC63A] hover:bg-transparent hover:text-[#FDC63A]"
              btntext="Export"
            />
          </div>
        </div>
        <ProductDetailsTables />
      </div>
    </>
  );
};

export default ProductDetails;
