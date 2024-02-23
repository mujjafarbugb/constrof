import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import constroLOGO from "../../assets/images/logo/constroLOGO.png";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Contact Us " />
      <div className="row p-3">
        {/* <div className="col-lg-12 flex justify-center">
          <img src={constroLOGO} className="h-[100px] " alt="" />
        </div> */}
        <div className="">
          <div className=" flex items-center gap-3 mt-3">
            <FaEarthAmericas className="text-2xl" />
            <span className="text-lg font-medium">Website </span>
          </div>
          <a
            href="https://www.constroplus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-400 underline ml-10"
          >
            https://www.constroplus.com
          </a>
          <div className="flex items-center gap-3 mt-4">
            <MdEmail className="text-2xl" />
            <span className="text-lg font-medium">Email </span>
          </div>
          <span
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-400 underline ml-10"
          >
            info@constroplus.com
          </span>
          <div className="mt-4 flex items-center gap-3">
            <IoCall className="text-2xl" />
            <span className="text-lg font-medium">Contact </span>
          </div>
          <span
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-400 underline ml-10"
          >
            +91 9665553502
          </span>
        </div>
        <hr className="text-slate-400 m-5 w-75"/>
      </div>
    </div>
  );
};

export default Contact;
