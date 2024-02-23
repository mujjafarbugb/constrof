import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import constroImg from "../../assets/images/logo/constroImg.png";
import Textinput from "@/components/ui/Textinput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();

const login = () => {
  const navigate = useNavigate();
  const auth = localStorage.token;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const onSubmit = () => {
    try {
      navigate("/dashboard");
      toast.success("Login Successfully..");
    } catch {
      navigate("/");
      toast.error("Invalid credentials", {
        position: "top-right",
      });
    }
  };
  // const onSubmit = () => {
  //   if (data) {
  //     axios
  //       .post("http://localhost:5001/api/signin", data)
  //       .then((response) => {
  //         const signin = response.data;
  //         console.log(46, signin);
  //         localStorage.setItem("user", JSON.stringify(signin));
  //       })
  //       .then((res) => {
  //         reDirect();
  //       })
  //       .catch((error) => {
  //         console.error("API Error:", error.message);
  //         toast.error("Invalid credentials", {
  //           position: "top-right",
  //         });
  //       });
  //   }
  // };


  // const reDirect = () => {
  //   const authToken = localStorage.getItem("user");
  //   const userData = JSON.parse(authToken);
  //   console.log(72, userData);
  //   if (userData) {
  //     if (userData.user.role === "hotelOwner") {
  //       navigate("/clientDash");
  //     } else if (userData.user.role === "applicant") {
  //       navigate("/candidateDash");
  //     } else if (userData.user.role === "supplier") {
  //       navigate("/vendorDash");
  //     } else if (userData.user.role === "intern") {
  //       navigate("/internDash");
  //     } else if (userData.user.role === "admin") {
  //       navigate("/dashboard");
  //     } else {
  //       navigate("/");
  //     }
  //   }
  // };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={constroImg} />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-4">
                      <div className="text-center m-4">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 "
                      >
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
                          name="password"
                          label="password"
                          type={showPassword ? "text" : "password"}
                          placeholder=" Enter your password"
                          register={register}
                          error={errors.password}
                          className="h-[48px]"
                          value={data.password}
                          onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                          }}
                        />

                        <div className="form-group">
                          <div className="custom-control custom-checkbox small py-2">
                            <input
                              type="checkbox"
                              className="custom-control-input bg-[#00adee] hover:bg-[#6fcaeb]"
                              id="customCheck"
                              onClick={togglePasswordVisibility}
                            />
                            <label
                              className="custom-control-label ml-2"
                              htmlFor="customCheck"
                            >
                              Show Password
                            </label>
                          </div>
                        </div>

                        <Link
                          to="/dashboard"
                          className="btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-full mt-3"
                        >
                          Login
                        </Link>
                        <hr className="m-3" />
                      </form>

                      <div className="text-center">
                        <Link
                          to="/forgot-password"
                          className="text-sm hover:underline hover:text-blue-600"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center mb-4">
                        <Link to="/register">
                          <span className="small hover:underline hover:text-blue-600">
                            Create an Account!
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
