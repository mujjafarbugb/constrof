import React from "react";
import { Link } from "react-router-dom";
import ForgotPass from "./common/forgot-pass";
import Verify_Otp from "./common/verifyOtp";

import useDarkMode from "@/hooks/useDarkMode";

import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import Illustration from "@/assets/images/auth/ils1.svg";
import Login_bg_02 from "../../assets/images/all-img/Login_bg_02.png";
import otp_verifyImg from "../../assets/images/all-img/otp_verifyImg.avif";
import check from "../../assets/images/icon/check.png";

const VerifySuccessfully = () => {
  const [isDark] = useDarkMode();
  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        {/* <div className="left-column relative z-[1]">
          <div className="absolute left-0 top-0">
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
                    src={check}
                    alt=""
                    className="mx-auto"
                    style={{ height: "6rem" }}
                  />
                </Link>
              </div>
              <div className="text-center 2xl:mb-10 mb-5">
                <h3 className="font-medium mb-4">Congratulations !</h3>
                <div className="text-slate-500 dark:text-slate-400 text-lg text-base">
                  Your account is verified{" "}
                </div>
                <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-12 uppercase text-sm">
                 Continue with,
                  <Link
                    to="/"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    &nbsp;Sign in
                  </Link>
                  {/* &nbsp;to The Sign In */}
                </div>
              </div>
            </div>
            <div className="auth-footer text-center">
              Copyright 2021, ConstroPlusAll Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccessfully;
