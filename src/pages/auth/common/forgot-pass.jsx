import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const ForgotPass = () => {
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
    console.log(35,data);
    axios
    .put(`http://localhost:5001/api/updateuserPassword`,data)
    .then((response) => {
      console.log("Password updated successfully:", response.data);
      toast.success("Password updated successfully.");
      navigate(`/`);
    })
    .catch((error) => {
      console.error('An error occurred while updating the password:', error);
      toast.error("Failed to update the password. Please try again.");
    });
  };

  return (
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
        className="btn btn-dark block w-full text-center"
      >
        Update Password
      </button>
    </form>
  );
};

export default ForgotPass;
