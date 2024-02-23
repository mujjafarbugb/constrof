import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Textinput from "@/components/ui/Textinput";
import { ImCancelCircle } from "react-icons/im";

const Assets = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center">
        <HomeBredCurbs title="List of Assets" />
        <div>
          <Modal
            title=""
            label="Add Assets + "
            labelClass="bg-[#00adee] hover:bg-[#6fcaeb] text-white"
            uncontrol
            footerContent={
              <Button
                text="Add Asset"
                className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                onClick={() => {
                  alert("use Control Modal");
                }}
              />
            }
          >
            <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
              <Textinput label="Asset" type="text" placeholder="" />
              <div class="input-group mb-2 mt-1">
                <label for="formFile" class="form-label">
                  Select Unit
                </label>
                <select
                  class="form-select text-sm"
                  aria-label="Default select example"
                >
                  <option value="1" selected>
                    Number
                  </option>
                  <option value="2">Sq Ft</option>
                  <option value="3">R Ft</option>
                </select>
              </div>
              <Textinput label="Quantity" type="text" placeholder="" />
              <Textinput
                label="Market Value"
                type="text"
                placeholder="&#8377;"
              />
              <Textinput label="Remark" type="text" placeholder="" />
            </div>
          </Modal>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full shadow-sm rounded-md mt-3">
          <thead class="border border-collapse bg-slate-50">
            <tr className=" rounded-md">
              <th class="px-4 py-2 text-center border">Asset</th>
              <th class="px-4 py-2 text-center border">Unit</th>
              <th class="px-4 py-2 text-center border">Quantity</th>
              <th class="px-4 py-2 text-center border">Market Value</th>
              <th class="px-4 py-2 text-center border">Remark</th>
              <th class="px-4 py-2 text-center border"></th>
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
                5,559,000
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">-</td>
              <td className="px-4 py-2 text-center flex justify-center text-sm text-slate-500">
                <div className="cursor-pointer hover:text-[#00adee]">
                  <Modal
                    title=""
                    label={<BiEdit className="text-3xl" />}
                    labelClass=""
                    uncontrol
                    footerContent={
                      <Button
                        text="Update Asset"
                        className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                        onClick={() => {
                          alert("use Control Modal");
                        }}
                      />
                    }
                  >
                    <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
                      <Textinput label="Asset" type="text" placeholder="" />
                      <div class="input-group mb-2 mt-1">
                        <label for="formFile" class="form-label">
                          Select Unit
                        </label>
                        <select
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option value="1" selected>
                            Number
                          </option>
                          <option value="2">Sq Ft</option>
                          <option value="3">R Ft</option>
                        </select>
                      </div>
                      <Textinput label="Quantity" type="text" placeholder="" />
                      <Textinput
                        label="Market Value"
                        type="text"
                        placeholder="&#8377;"
                      />
                      <Textinput label="Remark" type="text" placeholder="" />
                    </div>
                  </Modal>
                </div>
              </td>
            </tr>
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
                5,559,000
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">-</td>
              <td className="px-4 py-2 text-center flex justify-center text-sm text-slate-500">
                <div className="cursor-pointer hover:text-[#00adee]">
                  <Modal
                    title=""
                    label={<BiEdit className="text-3xl" />}
                    labelClass=""
                    uncontrol
                    footerContent={
                      <Button
                        text="Update Asset"
                        className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                        onClick={() => {
                          alert("use Control Modal");
                        }}
                      />
                    }
                  >
                    <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
                      <Textinput label="Asset" type="text" placeholder="" />
                      <div class="input-group mb-2 mt-1">
                        <label for="formFile" class="form-label">
                          Select Unit
                        </label>
                        <select
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option value="1" selected>
                            Number
                          </option>
                          <option value="2">Sq Ft</option>
                          <option value="3">R Ft</option>
                        </select>
                      </div>
                      <Textinput label="Quantity" type="text" placeholder="" />
                      <Textinput
                        label="Market Value"
                        type="text"
                        placeholder="&#8377;"
                      />
                      <Textinput label="Remark" type="text" placeholder="" />
                    </div>
                  </Modal>
                </div>
              </td>
            </tr>
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
                5,559,000
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">-</td>
              <td className="px-4 py-2 text-center flex justify-center text-sm text-slate-500">
                <div className="cursor-pointer hover:text-[#00adee]">
                  <Modal
                    title=""
                    label={<BiEdit className="text-3xl" />}
                    labelClass=""
                    uncontrol
                    footerContent={
                      <Button
                        text="Update Asset"
                        className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                        onClick={() => {
                          alert("use Control Modal");
                        }}
                      />
                    }
                  >
                    <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
                      <Textinput label="Asset" type="text" placeholder="" />
                      <div class="input-group mb-2 mt-1">
                        <label for="formFile" class="form-label">
                          Select Unit
                        </label>
                        <select
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option value="1" selected>
                            Number
                          </option>
                          <option value="2">Sq Ft</option>
                          <option value="3">R Ft</option>
                        </select>
                      </div>
                      <Textinput label="Quantity" type="text" placeholder="" />
                      <Textinput
                        label="Market Value"
                        type="text"
                        placeholder="&#8377;"
                      />
                      <Textinput label="Remark" type="text" placeholder="" />
                    </div>
                  </Modal>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assets;
