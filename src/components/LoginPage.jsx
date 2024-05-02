import React from "react";
import pageLogo from "../assets/images/webp/page-logo.webp";
import { Link } from "react-router-dom";
const LoginPage = () => {
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
            <form>
              <input
                type="text"
                required
                className="text-black text-[20px] md:text-[24px] 2xl:text-3xl bg-light-gray rounded-[20px] w-full outline-none placeholder:text-black font-normal py-3 px-6 md:py-4 sm:px-8"
                placeholder="User Name"
              />
              <input
                type="password"
                required
                className="text-black mt-4 sm:mt-7 text-[20px] md:text-[24px] 2xl:text-3xl bg-light-gray rounded-[20px] w-full outline-none placeholder:text-black font-normal py-3 px-6 md:py-4 sm:px-8"
                placeholder="Password"
              />
              <Link to="/dashboard">
                <button className="w-full mt-5 sm:mt-9 text-center text-[24px] md:text-[30px] 2xl:text-4xl font-semibold p-3 sm:p-[18px] bg-primary text-white rounded-[20px] duration-300 hover:bg-transparent border border-transparent hover:border-primary">
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
