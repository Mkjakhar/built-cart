import React, { useState } from "react";

const AdminTabBtn = ({ setActiveTab, activeTab, btntext, icon }) => {
  return (
    <button
      className={`p-8 py-6 rounded-tr-[20px] text-xl font-semibold w-full text-white hover:bg-primary duration-200 flex gap-6 items-center rounded-br-[20px] ${
        activeTab ? "bg-primary" : "bg-transparent"
      }`}
      onClick={() => setActiveTab(true)}
    >
      {icon} {btntext}
    </button>
  );
};

export default AdminTabBtn;
