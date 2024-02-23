import React, { useState } from "react";
// import { toast } from "react-toastify";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { handleRegister } from "./store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const schema = yup
  .object({
    fullname: yup.string().required("Full Name is Required"),
    fname: yup.string().required("First Name is Required"),
    lname: yup.string().required("Last Name is Required"),
    ShopActGhumastaShopRegNo: yup.string().required("Feild is Required"),
    phone: yup.string().required("Phone number is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    panNumber: yup.string(),
    password: yup
      .string()
      .min(6, "Password must be at least 8 characters")
      .max(20, "Password shouldn't be more than 20 characters")
      .required("Please enter password"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const RegForm3 = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    hotelName: "",
    contactPersonName: "",
    designation: "",
    FSSAI_NO: "",
    shopRegNo: "",
    panNo: "",
    password: "",
    role: "supplier",
  });
  const [formValue, setFormValue] = useState(data);
  const [checked, setChecked] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(86, "ok", data);
    if (checked) {
      axios
        .post("http://localhost:5001/api/signup", data)
        .then((response) => {
          const signup = response.data;
          console.log(79, response.data);
          sendOtpToContact(data.contact);
        })
        .catch((error) => {
          console.error("API Error:", error.message);
          toast.error("Registration failed. Please try again.");
        });
    }
  };

  const sendOtpToEmail = (email) => {
    axios
      .post("http://localhost:5001/api/send-otp", { email })
      .then((response) => {
        console.log("OTP Sent successfully:", response.data);
        navigate(`/verify/${email}`);
      })
      .catch((error) => {
        console.error("OTP Sending Error:", error.message);
        toast.error("Failed to send OTP. Please try again.");
      });
  };

  const sendOtpToContact = (contact) => {
    axios
      .post("http://localhost:5001/api/send-mob-otp", { mobileNumber: contact })
      .then((response) => {
        console.log("OTP Sent successfully:", response.data);
        navigate(`/verify/${contact}`);
      })
      .catch((error) => {
        console.error("OTP Sending Error:", error.message);
        toast.error("Failed to send OTP. Please try again.");
      });
  };

  return (
    <>
      <form className="space-y-5 ">
        <Textinput
          name="fname"
          label="First Name"
          type="text"
          placeholder=" Enter first name"
          register={register}
          error={errors.fname}
          className="h-[48px]"
          value={data.firstName}
          onChange={(e) => {
            setData({ ...data, firstName: e.target.value });
          }}
        />

        <Textinput
          name="lname"
          label="Last Name"
          type="text"
          placeholder=" Enter last name"
          register={register}
          error={errors.lname}
          className="h-[48px]"
          value={data.lastName}
          onChange={(e) => {
            setData({ ...data, lastName: e.target.value });
          }}
        />

        <Textinput
          name="email"
          label="email"
          type="email"
          placeholder=" Enter your email"
          register={register}
          error={errors.email}
          className="h-[48px]"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />

        <Textinput
          name="phone"
          label="Phone number"
          type="text"
          placeholder=" Enter phone number"
          register={register}
          error={errors.phone}
          className="h-[48px]"
          value={data.contact}
          onChange={(e) => {
            setData({ ...data, contact: e.target.value });
          }}
        />

        <Textinput
          name="ShopActGhumastaShopRegNo"
          label="Shop Act / Ghumasta / Shop Reg No"
          type="number"
          placeholder=" Enter Shop Act / Ghumasta / Shop Reg No"
          register={register}
          error={errors.ShopActGhumastaShopRegNo}
          className="h-[48px]"
          value={data.shopRegNo}
          onChange={(e) => {
            setData({ ...data, shopRegNo: e.target.value });
          }}
        />

        <Textinput
          name="panNumber"
          label="Pan number (Optional)"
          type="text"
          placeholder=" Enter pan number"
          register={register}
          error={errors.panNumber}
          className="h-[48px]"
          value={data.panNo}
          onChange={(e) => {
            setData({ ...data, panNo: e.target.value });
          }}
        />

        <Textinput
          name="password"
          label="passwrod"
          type="password"
          placeholder=" Enter your password"
          register={register}
          error={errors.password}
          className="h-[48px]"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />

        <Checkbox
          label="You accept our Terms and Conditions and Privacy Policy"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <button
          style={{
            backgroundColor: !checked ? "#aaa" : "#333",
            color: !checked ? "#ddd" : "#fff",
          }}
          className="btn block w-full text-center"
          disabled={!checked}
          type="submit"
          onClick={(e) => handleSubmitForm(e)}
        >
          Create an account
        </button>
      </form>
    </>
  );
};

export default RegForm3;
