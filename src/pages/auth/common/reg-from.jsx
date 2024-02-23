import { toast } from "react-toastify";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import axios from "axios";

const schema = yup
  .object({
    registerr: yup.string().required("This field is Required"),
    firm: yup.string().required("Firm Name is Required"),
    phone: yup.string().required("Phone number is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
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

const RegForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Client");
  const [secondDropdownOptions, setSecondDropdownOptions] = useState({
    Client: [
      "Corporate",
      "Developer",
      "Architect",
      "Structural Consultant",
      "MEP Consultant",
      "PMC",
      "Other",
    ],
    Contractor: [
      "H Hydra",
      "H Pocklain + JCB",
      "H Towercrane",
      "H Tractor",
      "L BBM Plaster",
      "L Carpentry Works",
      "L Corecutting",
      "L Demolition",
      "L Department Supply",
      "L Earthwork",
      "L Electrical",
      "L Fabrication",
      "L Firefighting",
      "L Glass Works",
      "L Gypsum",
      "L Interior",
      "L Painting",
      "L Piling",
      "L Plumbing",
      "L RCC",
      "L Rebarring",
      "L Rockanchoring",
      "L Structural Steel",
      "L Swimming Pool",
      "L Tiling Works",
      "L Tremix",
      "L Waterproofing",
      "L+M BBM Plaster",
      "L+M Carpentry Works",
      "L+M Electrical-LT",
      "L+M Fabrication",
      "L+M Ferrocrete",
      "L+M FireFighting",
      "L+M Glass Works",
      "L+M Gypsum",
      "L+M HVAC",
      "L+M Hardscape",
      "L+M Interior",
      "L+M Lock N Key",
      "L+M MEP",
      "L+M Painting",
      "L+M Plumbing",
      "L+M RCC",
      "L+M RoadWorks",
      "L+M Shell and Core",
      "L+M Solar",
      "L+M Structural Steel",
      "L+M Tiling Works",
      "L+M Waterproofing",
      "Other",
      "Surveyor",
    ],
    Individual: ["Individual"],
  });

  const [data, setData] = useState({
    registerr: "",
    firm: "",
    email: "",
    contact: "",
    password: "",
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

  const onSubmit = () => {
    if (checked) {
      axios
        .post("http://localhost:5001/api/signup", data)
        .then((response) => {
          const signup = response.data;
          console.log(79, response.data);
          // sendOtpToEmail(data.email);
          sendOtpToContact(data.contact);
        })
        .catch((error) => {
          console.error("API Error:", error.message);
          toast.error("Registration failed. Please try again.");
        });
    }
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setSelectedCategory(selectedValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div className="grid grid-cols-1">
        <div className="">
          <label
            htmlFor="inputState"
            className="block text-sm  text-gray-700 mb-2"
          >
            Register As
          </label>
          <select
            id="inputState1"
            name="registerr"
            className="form-control "
            placeholder="selected"
            onChange={handleCategoryChange}
            value={selectedCategory}
            style={{
              fontSize: "0.8rem",
              height: "calc(2.5em + 0.75rem + 2px)",
            }}
          >
            <option selected className="form-control-user">
              Client
            </option>
            <option className="form-control-user">Contractor</option>
            <option className="form-control-user">Individual</option>
          </select>
          {/* {errors.registerr && (
            <p className="text-red-500 text-sm mt-1">
              {errors.registerr.message}
            </p>
          )} */}
        </div>
      </div>

      <div className="grid grid-cols-1 mt-3">
        <div className="">
          <label
            htmlFor="inputState"
            className="block text-sm text-gray-700 mb-2"
          >
            Select Expertise
          </label>
          <select
            id="inputState2"
            className="form-control"
            style={{
              fontSize: "0.8rem",
              height: "calc(2.5em + 0.75rem + 2px)",
            }}
            disabled={selectedCategory === "Individual"}
          >
            {secondDropdownOptions[selectedCategory].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-base bg-black-100 text-slate-500 text-center rounded-md">
        <h6 className="text-sm  text-center rounded py-3">
          Selected Expertise cannot be changed later
        </h6>
      </div>

      <Textinput
        name="firm"
        label="Firm Name"
        type="text"
        placeholder="Firm name"
        register={register}
        error={errors.firm}
        className=""
        value={data.firm}
        onChange={(e) => {
          setData({ ...data, firm: e.target.value });
        }}
      />

      <Textinput
        name="phone"
        label="Phone number"
        type="text"
        placeholder="Phone number"
        register={register}
        error={errors.phone}
        className=""
        value={data.contact}
        onChange={(e) => {
          setData({ ...data, contact: e.target.value });
        }}
      />

      <Textinput
        name="email"
        label="email"
        type="email"
        placeholder=" Enter your email"
        register={register}
        error={errors.email}
        className=""
        value={data.email}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />

      <Textinput
        name="password"
        label="passwrod"
        type="password"
        placeholder=" Enter your password"
        register={register}
        error={errors.password}
        className=""
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />

      <Textinput
        name="confirmpassword"
        label="Confirm password"
        type="password"
        placeholder=" Enter confirm password"
        register={register}
        error={errors.confirmpassword}
        className=""
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <label class="form-check-label text-sm font-medium" for="exampleCheck1">
          You accept our Terms and Conditions and Privacy Policy
        </label>
      </div>
      <button
        style={{
          backgroundColor: !checked ? "#66b3ff" : "#007bff",
          color: !checked ? "#fff" : "#fff",
        }}
        className="btn block w-full text-center"
        disabled={!checked}
        type="submit"
      >
        Register Account
      </button>
      
    </form>
  );
};

export default RegForm;
