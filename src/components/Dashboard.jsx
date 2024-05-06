import React, { useContext, useEffect } from "react";
import AdminNav from "./common/AdminNav";

import UserDashboard from "./UserDashboard";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import MyContext from "./context/MyContext";
import OrderLogs from "./OrderLogs";
import ExportOverlay from "./ExportOverlay";
import DashboardSideBar from "./SideBar";
import UserDataPage from "./UserDataPage";
import UserDetails from "./UserDetails";
import CategoriesPage from "./CategoriesPage";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";
import ComplaintsPage from "./ComplaintsPage";
import OffersPage from "./OffersPage";

const Dashboard = () => {
  const { activeSubTab, activeTab } = useContext(MyContext);
  useEffect(() => {
    scrollTo(0, 0);
  }, [activeTab]);

  return (
    <>
      <section className="flex min-h-screen flex-col max-w-[1920px] mx-auto overflow-hidden">
        <AdminNav />
        <div className="flex flex-grow overflow-x-hidden">
          <DashboardSideBar />
          <div className="pt-10 w-[calc(100vw-265px)] h-[calc(100vh-99px)] overflow-auto">
            {activeTab === "dashboard" ? (
              <UserDashboard />
            ) : activeTab === "orders" ? (
              activeSubTab === "order-details" ? (
                <OrderDetails
                  status="Pending"
                  style="after:bg-[#FF3D00] text-[#FF3D00]"
                />
              ) : (
                <Orders />
              )
            ) : activeTab === "order-logs" ? (
              activeSubTab === "order-details" ? (
                <OrderDetails
                  status="Delivered"
                  style="after:bg-[#0FB001] text-[#0FB001]"
                />
              ) : (
                <OrderLogs />
              )
            ) : activeTab === "user-data" ? (
              activeSubTab === "user-details" ? (
                <UserDetails />
              ) : (
                <UserDataPage />
              )
            ) : activeTab === "categories" ? (
              activeSubTab === "categories-products" ? (
                <ProductDetails />
              ) : activeSubTab === "add-products" ? (
                <AddProduct />
              ) : (
                <CategoriesPage />
              )
            ) : activeTab === "complaints" ? (
              <ComplaintsPage />
            ) : activeTab === "offers" ? (
              <OffersPage />
            ) : null}
          </div>
        </div>
        <ExportOverlay />
      </section>
    </>
  );
};

export default Dashboard;
