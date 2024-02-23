import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const schema = yup
  .object({
    otp: yup
      .string()
      .required("OTP is Required")
      .length(6, "OTP must be exactly 6 characters")
      .matches(/^[0-9]+$/, "OTP must only contain numbers"),
  })
  .required();
const Verify = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(120); // Initial timer value in seconds (2 minutes)
  const [isTimerActive, setIsTimerActive] = useState(true);

  const [data, setData] = useState({
    // email: props.email,
    // contact: props.contact,
    enteredOTP: "",
    mobileNumber: id,
  });
  console.log(data.email);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   let interval;

  //   if (timer > 0) {
  //     interval = setInterval(() => {
  //       setTimer((prevTimer) => prevTimer - 1);
  //     }, 1000);
  //   } else {
  //     setIsTimerActive(false);
  //     setMessage("OTP has expired. Please request a new OTP.");
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [timer]);

  useEffect(() => {
    const interval = setInterval(countdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isTimerActive, timer]);

  const countdown = () => {
    if (isTimerActive && timer > 0) {
      setTimer((prevTimer) => prevTimer - 1);
    } else {
      setIsTimerActive(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (timer <= 0) {
      setMessage("OTP has expired. Please request a new OTP.");
      return;
    }
    console.log(35, data);
    axios
      .post("http://localhost:5001/api/verify-mob-otp", data)
      .then((res) => {
        console.log("OTP verified successfully");
        navigate("/verifySuccessfully");
      })
      .catch((err) => {
        if (
          err.response?.status === 400 ||
          err.response?.data === "Invalid OTP"
        ) {
          setMessage("Invalid OTP. Please enter the correct OTP.");
        } else if (
          err.response?.status === 400 ||
          err.response?.data === "OTP expired"
        ) {
          setMessage("OTP has expired. Please request a new OTP.");
        } else {
          console.log(err);
        }
      });
    console.log(message);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/send-otp", {
        email: data.email,
      });
      setMessage(response.data);
      setTimer(120);
      setIsTimerActive(true);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const sendMobOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/verify-mob-otp",
        data
      );
      setMessage(response.data);
      setTimer(120);
      setIsTimerActive(true);
      navigate("/verifySuccessfully");
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <form className="space-y-4 ">
      <Textinput
        name="otp"
        label="email or phone OTP"
        type="text"
        placeholder="Enter OTP"
        register={register}
        error={errors.otp}
        className="h-[48px]"
        value={data.enteredOTP}
        onChange={(e) => setData({ ...data, enteredOTP: e.target.value })}
      />

      <button
        className="btn btn-primary block w-full text-center"
        //  onClick={(e)=>onSubmit(e)}
        onClick={(e) => sendMobOtp(e)}
        disabled={!timer}
      >
        Verify OTP
      </button>

      {timer > 0 && (
        <div className="text-center text-gray-500">
          Time remaining: {Math.floor(timer / 60)}:{timer % 60} minutes
        </div>
      )}

      {message && (
        <div
          className={`font-normal text-base text-center px-2 py-3 mb-4 mt-10 ${
            message.includes("Invalid OTP") ||
            message.includes("OTP has expired")
              ? "text-red-500 bg-slate-100 dark:bg-slate-600"
              : "text-green-500 bg-green-100 dark:bg-green-600"
          } rounded`}
        >
          <p>{message}</p>
        </div>
      )}

      <div className="md:max-w-[345px] mx-auto font-normal text-center text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm">
        <button
          className="text-slate-900 dark-text-white font-medium hover:underline"
          // onClick={(e)=>sendOtp(e)}
          onClick={(e) => sendMobOtp(e)}
        >
          &nbsp;Resend OTP
        </button>
      </div>
    </form>
  );
};

export default Verify;
