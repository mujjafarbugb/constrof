import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./login-form";
import Social from "./social";
import useDarkMode from "@/hooks/useDarkMode";
import { ToastContainer } from "react-toastify";
import Login_bg_02 from "../../../assets/images/all-img/Login_bg_02.png";
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import logo_1 from "../../../assets/images/all-img/logo_1.jpg";
import circle from "../../../assets/images/all-img/circle.png";
import easyLogo from "../../../assets/images/icon/easyLogo.png";
import Illustration from "@/assets/images/auth/ils1.svg";

const Who_R_u = () => {
  const [isDark] = useDarkMode();

  return (
    <>
      <ToastContainer />
      <div className="loginwrapper ">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
              {/* <Link to="/">
                <img src={isDark ? LogoWhite : Logo} alt="" className="mb-10" />
              </Link> */}
              {/* <h4>
                Unlock your Project
                <span className="text-slate-800 dark:text-slate-400 font-bold">
                  performance
                </span>
              </h4> */}
            </div>
            <div className="absolute left-0 top-0">
              <img
                src={Login_bg_02}
                alt=""
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center pb-0 ">
                <div className="flex mb-2 justify-center">
                  <img
                    src={easyLogo}
                    alt=""
                    className="mx-auto"
                    style={{ height: "4rem" }}
                  />
                </div>
                <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2  dark:bg-slate-600">
                <h6 className="font-md text-base text-slate-500 dark:text-slate-400 text-center  dark:bg-slate-600 rounded py-3 mt-6">Register with ConstroPlusand Unlock exclusive benefits</h6>
                </div>
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  <Link to="/">
                    {/* <img
                      src={isDark ? LogoWhite : logo_1}
                      alt=""
                      className="mx-auto"
                    /> */}
                    {/* <img
                      src={logo_1}
                      alt=""
                      className="mx-auto h-25"
                    /> */}
                  </Link>
                </div>
                <div className="text-center 2xl:mb-10 mb-4">
                  <h4
                    className="font-medium mt-3"
                    style={{ fontSize: "1.7rem" }}
                  >
                    Who Are You ?
                  </h4>
                  {/* <div className="text-slate-500 text-base">
                    Sign in to your account to start
                  </div> */}
                </div>
                {/* <LoginForm /> */}

                <div class="row">
                  <div class="col-md-12 mb-2">
                    <Link to="/register">
                      <button
                        class="btn  bg-[#eeb4e7] hover:bg-[#d367cd] hover:text-white focus:outline-none focus:shadow-outline-purple active:bg-purple-800 font-bold text-lg w-full"
                        type="button"
                      >
                        Recruiter
                      </button>
                    </Link>
                  </div>
                  <div class="col-md-12 mb-2">
                    <Link to="/register2">
                      <button
                        class="btn bg-[#eeb4e7] hover:bg-[#d367cd] focus:outline-none hover:text-white focus:shadow-outline-purple active:bg-purple-800 font-bold text-lg w-full"
                        type="button"
                      >
                        Applicant
                      </button>
                    </Link>
                  </div>
                  <div class="col-md-12 mb-2">
                    <Link to="/register3">
                      <button
                        class="btn bg-[#eeb4e7] hover:bg-[#d367cd] focus:outline-none hover:text-white focus:shadow-outline-purple active:bg-purple-800  font-bold text-lg w-full"
                        type="button"
                      >
                        Supplier
                      </button>
                    </Link>
                  </div>
                  <div class="col-md-12 mb-2">
                    <Link to="/register4">
                      <button
                        class="btn bg-[#eeb4e7] hover:bg-[#d367cd] focus:outline-none hover:text-white focus:shadow-outline-purple active:bg-purple-800 font-bold text-lg w-full"
                        type="button"
                      >
                        Intern
                      </button>
                    </Link>
                  </div>
                </div>

                {/* <div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                  <div className="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
                    Or continue with
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div>
                <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </div> */}
              </div>
              <div className="auth-footer text-center pt- overflow-hidden">
                Copyright 2023, ConstroPlusAll Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who_R_u;
