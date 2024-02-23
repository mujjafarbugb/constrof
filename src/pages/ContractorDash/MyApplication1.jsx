import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";


const MyApplication1 = () => {
  return (
    <div>
      <HomeBredCurbs title="My Applications " />
      <div class="overflow-x-auto">
        <table class="table-auto w-full shadow-sm rounded-md mt-3">
          <thead class="border border-collapse bg-slate-50">
            <tr className=" rounded-md">
              <th class="px-4 py-2 text-center border">EOI No.</th>
              <th class="px-4 py-2 text-center border">Developer</th>
              <th class="px-4 py-2 text-center border">Applied On</th>
              <th class="px-4 py-2 text-center border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                EOI/22/100014
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">20-12-2022</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                applied
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                EOI/22/100014
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">20-12-2022</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                applied
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                EOI/22/100014
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">20-12-2022</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                applied
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                EOI/22/100014
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A Developers
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">20-12-2022</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                applied
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication1;
