import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";

const Turnover = () => {
  return (
    <div>
      <HomeBredCurbs title="Yearly Turnover " />
      <div class="overflow-x-auto">
        <table class="table-auto w-full shadow-sm rounded-md mt-3">
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
               5CR - 7.5CR
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
               5CR - 7.5CR
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
               5CR - 7.5CR
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
               -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Turnover;
