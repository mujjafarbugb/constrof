import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ForgotPass from "./common/forgot-pass";
import Verify_Otp from "./common/verifyOtp";

import useDarkMode from "@/hooks/useDarkMode";

import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import Illustration from "@/assets/images/auth/ils1.svg";
import Login_bg_02 from "../../assets/images/all-img/Login_bg_02.png";
import otp_verifyImg from "../../assets/images/all-img/otp_verifyImg.avif";
import otp1 from "../../assets/images/icon/otp1.png";
import axios from "axios";

const verifyOtp = () => {
  const { email } = useParams();
  const [isDark] = useDarkMode();
  console.log(email);

  return (
    <div className="loginwrapper ">
      <div className="lg-inner-column">
        {/* <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            <Link to="/">
              <img src={isDark ? LogoWhite : Logo} alt="" className="mb-10" />
            </Link>
          </div>
          <div className="absolute left-0 top-0 position-fixed">
            <img
              src={otp_verifyImg}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div> */}
        <div className="right-column relative">
          <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div className="auth-box2 flex flex-col justify-center h-full">
              <div className="mobile-logo text-center mb-6  block">
                <Link to="">
                  <img
                    src={otp1}
                    alt=""
                    className="mx-auto"
                    style={{ height: "3.4rem" }}
                  />
                </Link>
              </div>
              <div className="text-center 2xl:mb-6 ">
                <h4 className="font-medium mb-2">Verification</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Verify Your Account with ConstroPlus.
                </div>
              </div>
              <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-2 mt-8">
                Please Enter the OTP provided on your Phone number and on your
                email for verification !
              </div>

              <Verify_Otp email={email} />
            </div>
            <div className="auth-footer text-center ">
              Copyright 2021, ConstroPlus All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default verifyOtp;
