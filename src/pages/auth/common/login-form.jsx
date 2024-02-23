// import React, { useEffect, useState } from "react";
// import Textinput from "@/components/ui/Textinput";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// const schema = yup
//   .object({
//     email: yup.string().email("Invalid email").required("Email is Required"),
//     password: yup.string().required("Password is Required"),
//   })
//   .required();

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     role: "hotelOwner",
//   });

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "all",
//   });

//   const onSubmit = () => {
//     if (data) {
//       axios
//         .post("http://localhost:5001/api/signin", data)
//         .then((response) => {
//           const signin = response.data;
//           console.log(46, signin);
//           localStorage.setItem("user", JSON.stringify(signin));
//         })
//         .then((res) => {
//           reDirect();
//         })
//         .catch((error) => {
//           console.error("API Error:", error.message);
//           toast.error("Invalid credentials", {
//             position: "top-right",
//             autoClose: 1500,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//         });
//     }
//   };

//   const reDirect = () => {
//     const authToken = localStorage.getItem("user");

//     const userData = JSON.parse(authToken);
//     console.log(72, userData);
//     if (userData) {
//       if (userData.user.role === "hotelOwner") {
//         navigate("/clientDash");
//       } else if (userData.user.role === "applicant") {
//         navigate("/candidateDash");
//       } else if (userData.user.role === "supplier") {
//         navigate("/vendorDash");
//       } else if (userData.user.role === "intern") {
//         navigate("/internDash");
//       } else if (userData.user.role === "admin") {
//         navigate("/dashboard");
//       } else {
//         navigate("/");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
//       <Textinput
//         name="email"
//         label="email"
//         type="email"
//         placeholder=" Enter your email"
//         register={register}
//         error={errors.email}
//         className="h-[48px]"
//         value={data.email}
//         onChange={(e) => {
//           setData({ ...data, email: e.target.value });
//         }}
//       />

//       <Textinput
//         name="password"
//         label="password"
//         type="password"
//         placeholder=" Enter your password"
//         register={register}
//         error={errors.password}
//         className="h-[48px]"
//         value={data.password}
//         onChange={(e) => {
//           setData({ ...data, password: e.target.value });
//         }}
//       />

//       <div className="flex justify-center">
//         <Link
//           to="/forgot-password"
//           className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
//           >
//           Forgot Password?{" "}
//         </Link>
//           <Checkbox
//             value={checked}
//             onChange={() => setChecked(!checked)}
//             label="Keep me signed in"
//           />
//       </div>

//       <button className="btn btn-dark block w-full text-center" type="submit">
//         Sign in
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
