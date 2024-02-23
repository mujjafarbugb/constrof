import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { TiEye } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const ClosedEois = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/eoiDetail");
  };

  return (
    <div>
      <HomeBredCurbs title="Closed EOI " />
      <div class="overflow-x-auto">
        <table class="table-auto w-full shadow-sm rounded-md">
          <thead class="border border-collapse bg-slate-50">
            <tr className=" rounded-md">
              <th class="px-4 py-2 text-center border">Developer</th>
              <th class="px-4 py-2 text-center border">Scope</th>
              <th class="px-4 py-2 text-center border">
                Approximate EOI Value
              </th>
              <th class="px-4 py-2 text-center border">Last Date to Apply</th>
              <th class="px-4 py-2 text-center border">EOI Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Shiva Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                L BBM Plaster
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                &#8377; 11,1510
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                31-01-2024
              </td>
              <td className="px-4 py-2 text-center flex justify-center text-sm text-slate-500">
                <div
                  onClick={handleIconClick}
                  className="cursor-pointer hover:text-[#00adee]"
                >
                  <TiEye className="text-3xl" />
                </div>
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Shiva Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                L BBM Plaster
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                &#8377; 11,1510
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                31-01-2024
              </td>
              <td class="px-4 py-2 text-center flex justify-center text-sm text-slate-500">
                <TiEye className="text-3xl cursor-pointer hover:text-[#00adee]" />
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Shiva Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                L BBM Plaster
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                &#8377; 11,1510
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                31-01-2024
              </td>
              <td class="px-4 py-2 text-center flex justify-center text-sm text-slate-500">
                <TiEye className="text-3xl cursor-pointer hover:text-[#00adee]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      ​
    </div>
  );
};

export default ClosedEois;
