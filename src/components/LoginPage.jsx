import React, { useContext, useState } from "react";
import pageLogo from "../assets/images/webp/page-logo.webp";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/MyContext";
const LoginPage = () => {
  const { setUserData, setAuthenticated } = useContext(MyContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(
        "https://v3h2dw9k-8002.inc1.devtunnels.ms/superadmin/dashboard-login/",
        formData
      );
      const accessToken = loginResponse.data.access_token;

      const userDataList = await axios.get(
        "https://v3h2dw9k-8002.inc1.devtunnels.ms/superadmin/user-data-list/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setUserData(userDataList.data.response);
      console.log(userDataList.data.response);
      console.log(loginResponse.data.message);
      // show notification
      toast.success("Success!", {
        className: "rounded-[10px]",
      });
      setAuthenticated(true);
      navigate("/dashboard");
      setFormData({ username: "", password: "" });
    } catch (error) {
      console.error("Login error:", error);
      // show notification
      toast.error("Error! Try again", {
        className: "rounded-[10px]",
      });
    }
  };
  return (
    <>
      <section className="min-h-screen bg-primary-gradient flex items-center flex-col justify-center py-14">
        <div className="container px-4 flex justify-center flex-col items-center">
          <img
            className="w-1/3 2xl:w-full md:w-1/5 2xl:max-w-[292px] mb-9"
            src={pageLogo}
            alt="pagelogo"
          />
          <div className="rounded-[30px] border border-white p-5 sm:p-8 2xl:py-[28px] 2xl:px-12 max-w-[547px] 2xl:max-w-[647px] w-full">
            <form onSubmit={handleLogin}>
              <input
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                type="text"
                required
                className="text-black text-[20px] md:text-[24px] 2xl:text-3xl bg-light-gray rounded-[20px] w-full outline-none placeholder:text-black font-normal py-3 px-6 md:py-4 sm:px-8"
                placeholder="User Name"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="text-black mt-4 sm:mt-7 text-[20px] md:text-[24px] 2xl:text-3xl bg-light-gray rounded-[20px] w-full outline-none placeholder:text-black font-normal py-3 px-6 md:py-4 sm:px-8"
                placeholder="Password"
              />
              <button className="w-full mt-5 sm:mt-9 text-center text-[24px] md:text-[30px] 2xl:text-4xl font-semibold p-3 sm:p-[18px] bg-primary text-white rounded-[20px] duration-300 hover:bg-transparent border border-transparent hover:border-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
