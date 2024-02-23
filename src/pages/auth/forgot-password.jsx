import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const forgotPass = () => {
  const [data, setData] = useState({
    email: "",
    newPassword: "",
  });
  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log(35, data);
    axios
      .put(`http://localhost:5001/api/updateuserPassword`, data)
      .then((response) => {
        console.log("Password updated successfully:", response.data);
        toast.success("Password updated successfully.");
        navigate(`/`);
      })
      .catch((error) => {
        console.error("An error occurred while updating the password:", error);
        toast.error("Failed to update the password. Please try again.");
      });
  };
  const [isDark] = useDarkMode();
  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        {/* <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            <Link to="/"> */}
        {/* <img src={isDark ? LogoWhite : Logo} alt="" className="mb-10" /> */}
        {/* </Link> */}

        {/* <h4>
              Unlock your Project
              <span className="text-slate-800 dark:text-slate-400 font-bold">
                performance
              </span>
            </h4> */}
        {/* </div> */}
        {/* <div className="absolute left-0 top-0" >
              <img
                src={Login_bg_02}
                alt=""
                className="h-full w-full object-contain"
              />
            </div> */}
        {/* </div> */}
        <div className="right-column relative justify-content-center">
          <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div className="auth-box2 flex flex-col justify-center h-full">
              <div className="mobile-logo text-center mb-6 lg:hidden block">
                <Link to="/">
                  {/* <img
                    src={isDark ? LogoWhite : Logo}
                    alt=""
                    className="mx-auto"
                  /> */}
                </Link>
              </div>
              <div className="text-center ">
                <h4 className="font-medium ">Forgot Your Password?</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Reset Password with Constroplus.
                </div>
              </div>
              <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10">
                Enter your Email and instructions will be sent to you!
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                <Textinput
                  name="email"
                  label="email"
                  type="email"
                  placeholder="Enter your email"
                  register={register}
                  error={errors.email}
                  className="h-[48px]"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />

                <Textinput
                  name="password"
                  label="New password"
                  type="password"
                  placeholder="Enter New Password"
                  register={register}
                  error={errors.newPassword}
                  className="h-[48px]"
                  value={data.newPassword}
                  onChange={(e) => {
                    setData({ ...data, newPassword: e.target.value });
                  }}
                />

                <button
                  onClick={() => {
                    setShowVerifyOTP(true);
                    setShowNewPassword(true);
                  }}
                  className="btn bg-[#00adee] hover:bg-[#6fcaeb] text-white block w-full text-center"
                >
                  Update Password
                </button>
              </form>
              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm">
                <Link
                  to="/"
                  className="text-slate-900 hover:text-[#00adee] font-medium underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgotPass;
