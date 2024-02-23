import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { PiBuildingsLight } from "react-icons/pi";
import house from "../../assets/images/logo/house.jpg";
import { Link } from "react-router-dom";

const Contractor = () => {
  return (
    <div className="">
      <HomeBredCurbs title="My Contractor Page " />
      <div class="bg-white shadow rounded-lg w-full pb-3 ">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class="rounded-full md:mb-0 md:mr-4 p-2">
            <img class="h-[70px] w-[70px] rounded-full" src={house} alt="" />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 class="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight class="text-2xl text-slate-500" />
                <span class="text-lg">&nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-center mt-2 md:justify-end">
            <Link
              to="/viewProf"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center mb-2 md:mb-0 md:mr-2 md:mt-0"
            >
              View Profile
            </Link>
            <Link
              to="/viewProf"
              class="bg-black-300 hover:bg-black-400 text-white font-bold  px-4 py-2 rounded flex items-center mb-2 md:mb-0 md:mr-2 md:mt-0"
            >
              Remove
            </Link>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg w-full pb-3 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class="rounded-full md:mb-0 md:mr-4 p-2">
            <img class="h-[70px] w-[70px] rounded-full" src={house} alt="" />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 class="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight class="text-2xl text-slate-500" />
                <span class="text-lg">&nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-center mt-2 md:justify-end">
            <Link
              to="/viewProf"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center mb-2 md:mb-0 md:mr-2 md:mt-0"
            >
              View Profile
            </Link>
            <Link
              to="/viewProf"
              class="bg-black-300 hover:bg-black-400 text-white font-bold  px-4 py-2 rounded flex items-center mb-2 md:mb-0 md:mr-2 md:mt-0"
            >
              Remove
            </Link>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg w-full pb-3 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class="rounded-full md:mb-0 md:mr-4 p-2">
            <img class="h-[70px] w-[70px] rounded-full" src={house} alt="" />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 class="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight class="text-2xl text-slate-500" />
                <span class="text-lg">&nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-center mt-2 md:justify-end">
            <Link
              to="/viewProf"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center mb-2 md:mb-0 md:mr-2 md:mt-0"
            >
              View Profile
            </Link>
            <Link
              to="/viewProf"
              class="bg-black-300 hover:bg-black-400 text-white font-bold  px-4 py-2 rounded flex items-center mb-2 md:mb-0 md:mr-2 md:mt-0"
            >
              Remove
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contractor;
