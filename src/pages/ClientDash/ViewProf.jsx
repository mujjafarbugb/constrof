import React from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { PiBuildingsLight } from "react-icons/pi";
import prof1 from "../../assets/images/logo/prof1.jpg";

function ViewProf() {
  return (
    <>
      <HomeBredCurbs title="Details" />
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
                      &nbsp;Ketan Contractor | Owner
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
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">Firm Type : </td>
                    <td className="px-2 px-md-4 py-2 font-normal">Proprietor</td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">Expertise : </td>
                    <td className="px-2 px-md-4 py-2 font-normal">
                      L Earthwork, L RCC, L+M RCC
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">
                      Representative Qualification :{" "}
                    </td>
                    <td className="px-2 px-md-4 py-2 font-normal">Graduate | B.E.</td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">
                      Authorised Applicators :{" "}
                    </td>
                    <td className="px-2 px-md-4 py-2 font-normal"></td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">Staff Count : </td>
                    <td className="px-2 px-md-4 py-2 font-normal">5-10</td>
                  </tr>
                  <tr>
                    <td className="px-2 px-md-4 py-2 font-semibold">Labour Count : </td>
                    <td className="px-2 px-md-4 py-2 font-normal">25-50</td>
                  </tr>
                </tbody>
              </table>
              <hr className="text-slate-400 m-3" />

              <span className="px-2 px-md-4 py-2 font-semibold">Turnover </span>
              <div className="overflow-x-scroll">
              <table class="table-auto w-75 shadow-sm rounded-md my-2 mx-2 mx-md-4 ">
                <thead class="border border-collapse bg-slate-50">
                  <tr className=" rounded-md">
                    <th class="px-4 py-2 text-center border">Financial Year</th>
                    <th class="px-4 py-2 text-center border">Turnover Range</th>
                    <th class="px-4 py-2 text-center border">Exact Turnover</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#f8f8f8]">
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      2021-2022
                    </td>
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      5CR-7.5CR
                    </td>
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f8f8f8]">
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      2021-2022
                    </td>
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      5CR-7.5CR
                    </td>
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f8f8f8]">
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      2021-2022
                    </td>
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      5CR-7.5CR
                    </td>
                    <td class="px-4 py-2 text-center text-sm text-slate-500">
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>

              <hr className="text-slate-400 m-3" />

              <span className="px-2 px-md-4 font-semibold">Ongoing Project </span>
              <div class="overflow-x-auto">
                <table class="table-auto w-full shadow-sm rounded-md my-2 mx-2 mx-md-4">
                  <thead class="border border-collapse bg-slate-50">
                    <tr className="rounded-md">
                      <th class="px-4 py-2 text-center border">Client</th>
                      <th class="px-4 py-2 text-center border">Project</th>
                      <th class="px-4 py-2 text-center border">Scope</th>
                      <th class="px-4 py-2 text-center border">Bill Value</th>
                      <th class="px-4 py-2 text-center border">
                        Work Order Value
                      </th>
                      <th class="px-4 py-2 text-center border">
                        Work Completed(%)
                      </th>
                      <th class="px-4 py-2 text-center border">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-[#f8f8f8]">
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        XYZ Contractor
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        B
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        L+M RCC
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        4,559,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        10,00,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        45.59
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className="text-slate-400 m-3" />

              <span className="px-2 px-md-4 font-semibold">Completed Project </span>
              <div class="overflow-x-auto">
                <table class="table-auto w-full shadow-sm rounded-md my-2 mx-2 mx-md-4">
                  <thead class="border border-collapse bg-slate-50">
                    <tr className="rounded-md">
                      <th class="px-4 py-2 text-center border">Client</th>
                      <th class="px-4 py-2 text-center border">Project</th>
                      <th class="px-4 py-2 text-center border">Scope</th>
                      <th class="px-4 py-2 text-center border">Bill Value</th>
                      <th class="px-4 py-2 text-center border">
                        Work Order Value
                      </th>
                      <th class="px-4 py-2 text-center border">
                        Work Completed(%)
                      </th>
                      <th class="px-4 py-2 text-center border">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-[#f8f8f8]">
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Shiva infra
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Pune
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        L+M RCC
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        6,559,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        6,559,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        100.0
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        -
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f8f8]">
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Shiva infra
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Karve nagar
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        L RCC
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        6,559,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        6,559,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        100.0
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className="text-slate-400 m-3" />

              <span className="px-2 px-md-4 font-semibold">Assets </span>
              <div class="overflow-x-auto scrollbar-track scrollbar-thumb-red-200 ">
                <table class="table-auto w-full shadow-sm rounded-md my-2 mx-2 mx-md-4">
                  <thead class="border border-collapse bg-slate-50">
                    <tr className="rounded-md">
                      <th class="px-4 py-2 text-center border">Asset</th>
                      <th class="px-4 py-2 text-center border">Unit</th>
                      <th class="px-4 py-2 text-center border">Quantity</th>
                      <th class="px-4 py-2 text-center border">Market Value</th>
                      <th class="px-4 py-2 text-center border">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-[#f8f8f8]">
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Props
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Number
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        1000.0
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        500,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        -
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f8f8]">
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Span
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Number
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        500.0
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        500,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        -
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f8f8]">
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Plate
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        Sq Ft
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        5000.0
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        600,000
                      </td>
                      <td class="px-4 py-2 text-center text-sm text-slate-500">
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProf;
