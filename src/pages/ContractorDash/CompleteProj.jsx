import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Textinput from "@/components/ui/Textinput";
import { ImCancelCircle } from "react-icons/im";

const CompleteProj = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center">
        <HomeBredCurbs title="Completed Projects" />
      </div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full shadow-sm rounded-md mt-3">
          <thead class="border border-collapse bg-slate-50">
            <tr className=" rounded-md">
              <th class="px-4 py-2 text-center border">Client</th>
              <th class="px-4 py-2 text-center border">Project</th>
              <th class="px-4 py-2 text-center border">Scope</th>
              <th class="px-4 py-2 text-center border">Bill Value</th>
              <th class="px-4 py-2 text-center border">Work Order Value</th>
              <th class="px-4 py-2 text-center border">Work Completed(%)</th>
              <th class="px-4 py-2 text-center border">Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Shiva Infra
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">Pune</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                L+M RCC
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                4,559,000
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                10,000,000
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
                Shiva Infra
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">Pune</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                L+M RCC
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                4,559,000
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                10,000,000
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
                Shiva Infra
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">Pune</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                L+M RCC
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                4,559,000
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                10,000,000
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
    </div>
  );
};

export default CompleteProj;
