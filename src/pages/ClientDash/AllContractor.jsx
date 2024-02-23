import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { PiBuildingsLight } from "react-icons/pi";
import house from "../../assets/images/logo/house.jpg";
import { Link } from "react-router-dom";

const AllContractor = () => {
  return (
    <div>
      <HomeBredCurbs title="All Contractor Page " />
      <div class=" bg-white shadow rounded-lg w-full pb-2">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewProf"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class=" bg-white shadow rounded-lg w-full pb-2 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewProf"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class=" bg-white shadow rounded-lg w-full pb-2 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewJobDetail"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class=" bg-white shadow rounded-lg w-full pb-2 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewJobDetail"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class=" bg-white shadow rounded-lg w-full pb-2 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewJobDetail"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class=" bg-white shadow rounded-lg w-full pb-2 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewJobDetail"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class=" bg-white shadow rounded-lg w-full pb-2 mt-3">
        <div class="latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50">
          <div class=" rounded-full md:mb-0 md:mr-4 p-2">
            <img
              className="h-[70px] w-[70px] rounded-full "
              src={house}
              alt=""
            />
          </div>
          <div class="flex-1 md:px-3 md:text-left">
            <h4 className="text-xl font-semibold text-color-white md:mt-0">
              Kumar Maske
            </h4>

            <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
              <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                <PiBuildingsLight className="text-2xl text-slate-500" />
                <span className="text-lg"> &nbsp;Sharang Buildcon | Owner</span>
              </span>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <Link
              to="/viewJobDetail"
              class="bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center"
            >
              View Profile
            </Link>
          </div>
          <div class="flex justify-center mt-2 mx-3">
            <Link
              to="/viewJobDetail"
              class="bg-black-300 hover:bg-black-400 text-white font-bold px-4 py-2 rounded flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContractor;
