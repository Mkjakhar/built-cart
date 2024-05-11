import axios from "axios";
import { toast } from "react-toastify";
export const baseUrl = "https://v3h2dw9k-8002.inc1.devtunnels.ms";

export const fetchUserData = async (
  setUserData,
  setOrderData,
  setStatusData
) => {
  const accessToken = sessionStorage.getItem("accessToken");
  try {
    const userDataList = await axios.get(
      `${baseUrl}/superadmin/add-user-dashboard/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const orderDataList = await axios.get(
      `${baseUrl}/superadmin/orders-list-dashboard/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    fetchStatusData(setStatusData);
    setUserData(userDataList.data);
    setOrderData(orderDataList.data.response);
  } catch (error) {
    console.error("Fetch user data error:", error);
    // Show error message
    toast.error("Error fetching user data. Try again", {
      className: "rounded-[10px]",
    });
  }
};

export const fetchStatusData = async (setStatusData, value) => {
  const accessToken = sessionStorage.getItem("accessToken");
  try {
    const requestData = {
      choose_by: value ? value : "today",
    };
    // Send POST request with Axios
    const response = await axios.post(
      `${baseUrl}/superadmin/dashbaord-view-status/`,
      requestData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    setStatusData(response.data.response);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
