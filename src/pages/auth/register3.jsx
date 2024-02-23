import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import RegForm from "./common/reg-from";
import Social from "./common/social";
import { ToastContainer } from "react-toastify";
// image import
import bgImage from "@/assets/images/all-img/login-bg.png";
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import Illustration from "@/assets/images/auth/ils1.svg";
import Login_bg_02 from "../../assets/images/all-img/Login_bg_02.png";
import circle from "../../assets/images/all-img/circle.png";
import RegForm2 from "./common/reg2-form";
import RegForm3 from "./common/reg3-form";

const register3 = () => {
  const [isDark] = useDarkMode();
  return (
    <>
      <ToastContainer />
      <div className="loginwrapper flex">
        <div className="lg-inner-column">
          <div
            className="left-column bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="flex flex-col h-full justify-center">
              <div className="flex-1 flex flex-col justify-center items-center">
                {/* <Link to="/">
                  <img src={LogoWhite} alt="" className="mb-10" />
                </Link> */}
              </div>
              <div>
                <div className="black-500-title max-w-[525px] mx-auto pb-20 text-center">
                  Unlock Your Career with
                  <span className="text-white font-bold  mb-2"> ConstroPlus</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column relative bg-white dark:bg-slate-800 overflow-y-auto">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center pb-0 ">
                <div className="flex mb-5 justify-center">
                  {/* <img
                    src={circle}
                    alt=""
                    className="mx-auto"
                    style={{ height: "8rem" }}
                  /> */}
                </div>
                <div className="mobile-logo text-center mb-6 lg:hidden block"></div>
                <div className="text-center 2xl:mb-10 mb-5">
                  <h4 className="font-medium">Sign up</h4>
                  <div className="text-slate-500 dark:text-slate-400 text-base">
                    Create an account to start
                  </div>
                </div>
                <RegForm3 />
                <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-3">
                  <div className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal ">
                    Or continue with
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div>
                <div className="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm">
                  Already registered?
                  <Link
                    to="/"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="auth-footer text-center pt-4">
                Copyright 2021, ConstroPlusAll Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register3;
