import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { PiBuildingsLight } from "react-icons/pi";
import prof1 from "../../assets/images/logo/prof1.jpg";

const ViewProf2 = () => {
  return (
    <div>
      <HomeBredCurbs title="View Profile" />
      <div className="row">
        <div className="col-lg-12">
          <div class=" bg-white w-full ">
            <div class="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto ">
              <div class=" rounded-full md:mb-0 md:mr-4 p-2">
                <img
                  className="h-[60px] w-[60px] rounded-full"
                  src={prof1}
                  alt=""
                />
              </div>
              <div class="flex-1 md:px-3 md:text-left">
                <h4 className="text-xl font-semibold text-color-white md:mt-0">
                  Ketan Gaikwad
                </h4>

                <div class=" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
                  <span class="card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2">
                    <PiBuildingsLight className="text-2xl text-slate-500" />
                    <span className="text-lg">
                      {" "}
                      &nbsp;Shiva Developers | Owner
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12 py-5">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">Firm Address : </td>
                    <td className="px-2 px-md-4 py-2 font-normal">
                      Karve nagar, Pune 411052
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">Website : </td>
                    <td className="px-2 px-md-4 py-2 text-blue-500 underline font-normal">
                      www.google.com
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">
                      Year of Establishment :{" "}
                    </td>
                    <td className="px-2 px-md-4 py-2 font-normal">2010</td>
                  </tr>
                </tbody>
              </table>
              <hr className="text-slate-400 m-3 w-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProf2;
