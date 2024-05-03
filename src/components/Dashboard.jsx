import React, { useContext, useState } from "react";
import AdminNav from "./common/AdminNav";
import AdminTabBtn from "./common/AdminTabBtn";
import { IoMdHome } from "react-icons/io";
import {
  CategoriesIcon,
  ComplaintsIcon,
  OffersIcon,
  OrdersIcon,
  OrdersLogsIcon,
  UserDataIcon,
} from "./common/Icons";
import UserDashboard from "./UserDashboard";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import MyContext from "./context/MyContext";
import OrderLogs from "./OrderLogs";
import ExportOverlay from "./ExportOverlay";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { activeSubTab } = useContext(MyContext);
  return (
    <>
      <section className="flex min-h-screen flex-col max-w-[1920px] mx-auto">
        <AdminNav />
        <div className="flex flex-grow overflow-x-hidden">
          <div className="rounded-br-[30px] flex flex-col gap-[14px] w-[265px] bg-dark pt-24 2xl:pt-32 pb-12">
            <AdminTabBtn
              btntext="Dashboard"
              icon={<IoMdHome className="text-2xl text-white" />}
              setActiveTab={() => setActiveTab("dashboard")}
              activeTab={activeTab === "dashboard"}
            />
            <AdminTabBtn
              btntext="Orders"
              icon={<OrdersIcon />}
              setActiveTab={() => setActiveTab("orders")}
              activeTab={activeTab === "orders"}
            />
            <AdminTabBtn
              btntext="Order logs"
              icon={<OrdersLogsIcon />}
              setActiveTab={() => setActiveTab("order-logs")}
              activeTab={activeTab === "order-logs"}
            />
            <AdminTabBtn
              btntext="User data"
              icon={<UserDataIcon />}
              setActiveTab={() => setActiveTab("user-data")}
              activeTab={activeTab === "user-data"}
            />
            <AdminTabBtn
              btntext="Categories"
              icon={<CategoriesIcon />}
              setActiveTab={() => setActiveTab("categories")}
              activeTab={activeTab === "categories"}
            />
            <AdminTabBtn
              btntext="Offers"
              icon={<OffersIcon />}
              setActiveTab={() => setActiveTab("offers")}
              activeTab={activeTab === "offers"}
            />
            <AdminTabBtn
              btntext="Complaints"
              icon={<ComplaintsIcon />}
              setActiveTab={() => setActiveTab("complaints")}
              activeTab={activeTab === "complaints"}
            />
          </div>
          <div className="pt-10 w-full">
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
            ) : null}
          </div>
        </div>
        <ExportOverlay />
      </section>
    </>
  );
};

export default Dashboard;
