import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Textinput from "@/components/ui/Textinput";
import { ImCancelCircle } from "react-icons/im";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center">
        <HomeBredCurbs title="List of Projects" />
        <div>
          <Modal
            title=""
            label=" + Add Projects "
            labelClass="bg-[#00adee] hover:bg-[#6fcaeb] text-white"
            uncontrol
            footerContent={
              <Button
                text="Add Project"
                className="bg-[#00adee] hover:bg-[#6fcaeb] text-white "
                onClick={() => {
                  alert("use Control Modal");
                }}
              />
            }
          >
            <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
              <Textinput label="Project" type="text" placeholder="Project" />
              <div class="input-group mb-2 mt-1">
                <label for="formFile" class="form-label">
                  Select City
                </label>
                <select
                  class="form-select text-sm"
                  aria-label="Default select example"
                >
                  <option value="1" selected>
                    Pune
                  </option>
                  <option value="2">Mumbai</option>
                  <option value="3">Goa</option>
                </select>
              </div>
              <Textinput
                label="Location"
                type="text"
                placeholder="Enter location"
              />
              <Textinput label="Remark" type="text" placeholder="" />

              <div class="input-group mb-2">
                <label for="formFile" class="form-label">
                  Building Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                  type="button"
                  id="button-addon2"
                >
                  ADD
                </button>
              </div>
              {/* <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                <span className="text-lg">A</span>
                <span className="order-last">
                  <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                </span>
              </div> */}
            </div>
          </Modal>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full shadow-sm rounded-md mt-3">
          <thead class="border border-collapse bg-slate-50">
            <tr className=" rounded-md">
              <th class="px-4 py-2 text-center border">Project</th>
              <th class="px-4 py-2 text-center border">Buildings</th>
              <th class="px-4 py-2 text-center border">City</th>
              <th class="px-4 py-2 text-center border">Location</th>
              <th class="px-4 py-2 text-center border">Remark</th>
              <th class="px-4 py-2 text-center border"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Vishwaganga
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A, B, C
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">Pune</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Karvenagar
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
                        text="Update Project"
                        className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                        onClick={() => {
                          alert("use Control Modal");
                        }}
                      />
                    }
                  >
                    <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
                      <Textinput
                        label="Project"
                        type="text"
                        placeholder="Project"
                      />
                      <div class="input-group mb-2 mt-1">
                        <label for="formFile" class="form-label">
                          Select City
                        </label>
                        <select
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option value="1" selected>
                            Pune
                          </option>
                          <option value="2">Mumbai</option>
                          <option value="3">Goa</option>
                        </select>
                      </div>
                      <Textinput
                        label="Location"
                        type="text"
                        placeholder="Enter location"
                      />
                      <Textinput label="Remark" type="text" placeholder="" />

                      <div class="input-group mb-2">
                        <label for="formFile" class="form-label">
                          Building Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                          type="button"
                          id="button-addon2"
                        >
                          ADD
                        </button>
                      </div>
                      <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                        <span className="text-lg">A</span>
                        <span className="order-last">
                          <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                        </span>
                      </div>
                      <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                        <span className="text-lg">B</span>
                        <span className="order-last">
                          <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </Modal>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Vishwaganga
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A, B, C
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">Pune</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Karvenagar
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
                        text="Update Project"
                        className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                        onClick={() => {
                          alert("use Control Modal");
                        }}
                      />
                    }
                  >
                    <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
                      <Textinput
                        label="Project"
                        type="text"
                        placeholder="Project"
                      />
                      <div class="input-group mb-2 mt-1">
                        <label for="formFile" class="form-label">
                          Select City
                        </label>
                        <select
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option value="1" selected>
                            Pune
                          </option>
                          <option value="2">Mumbai</option>
                          <option value="3">Goa</option>
                        </select>
                      </div>
                      <Textinput
                        label="Location"
                        type="text"
                        placeholder="Enter location"
                      />
                      <Textinput label="Remark" type="text" placeholder="" />

                      <div class="input-group mb-2">
                        <label for="formFile" class="form-label">
                          Building Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                          type="button"
                          id="button-addon2"
                        >
                          ADD
                        </button>
                      </div>
                      <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                        <span className="text-lg">A</span>
                        <span className="order-last">
                          <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                        </span>
                      </div>
                      <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                        <span className="text-lg">B</span>
                        <span className="order-last">
                          <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </Modal>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-[#f8f8f8]">
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Vishwaganga
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                A, B, C
              </td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">Pune</td>
              <td class="px-4 py-2 text-center text-sm text-slate-500">
                Karvenagar
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
                        text="Update Project"
                        className="w-full bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                        onClick={() => {
                          alert("use Control Modal");
                        }}
                      />
                    }
                  >
                    <div className="text-base text-slate-600 dark:text-slate-300 mt-2">
                      <Textinput
                        label="Project"
                        type="text"
                        placeholder="Project"
                      />
                      <div class="input-group mb-2 mt-1">
                        <label for="formFile" class="form-label">
                          Select City
                        </label>
                        <select
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option value="1" selected>
                            Pune
                          </option>
                          <option value="2">Mumbai</option>
                          <option value="3">Goa</option>
                        </select>
                      </div>
                      <Textinput
                        label="Location"
                        type="text"
                        placeholder="Enter location"
                      />
                      <Textinput label="Remark" type="text" placeholder="" />

                      <div class="input-group mb-2">
                        <label for="formFile" class="form-label">
                          Building Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn bg-[#00adee] hover:bg-[#6fcaeb] text-white"
                          type="button"
                          id="button-addon2"
                        >
                          ADD
                        </button>
                      </div>
                      <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                        <span className="text-lg">A</span>
                        <span className="order-last">
                          <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                        </span>
                      </div>
                      <div className="bg-slate-50 rounded-sm p-2 flex justify-between">
                        <span className="text-lg">B</span>
                        <span className="order-last">
                          <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
                        </span>
                      </div>
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

export default Projects;
