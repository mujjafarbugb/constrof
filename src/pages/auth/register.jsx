import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import { useForm } from "react-hook-form";
import RegForm from "./common/reg-from";
import { ToastContainer } from "react-toastify";
import constro2 from "../../assets/images/logo/constro2.jpeg";

const register = () => {
  const [isDark] = useDarkMode();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    try {
      const response = await Axios.post("http://localhost:3001/register", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response);
        setError("email", { message: "Email is already registered" });
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  const password = watch("password", "");

  return (
    <>
      <ToastContainer />
      <div className="loginwrapper flex">
        <div className="lg-inner-column">
          <div
            className="left-column bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${constro2})`,
            }}
          ></div>

          <div className="right-column relative bg-white dark:bg-slate-800 overflow-y-auto">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center pb-0 ">
                <div className="flex mb-5 justify-center"></div>
                <div className="mobile-logo text-center mb-6 lg:hidden block"></div>
                <div className="text-center 2xl:mb-10 mb-5">
                  <h4 className="font-medium">Sign up</h4>
                  <div className="text-slate-500 dark:text-slate-400 text-base">
                    Create an account to start
                  </div>
                </div>
                <RegForm />
                <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-3">
                  <div className=" absolute inline-block bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal ">
                    Or continue with
                  </div>
                </div>
                {/* <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div> */}
                <div className="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm">
                  Already registered ?
                  <Link
                    to="/"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    &nbsp;Login!
                  </Link>
                </div>
              </div>
              <div className="auth-footer text-center pt-4">
                Copyright 2021, ConstroPlus All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
