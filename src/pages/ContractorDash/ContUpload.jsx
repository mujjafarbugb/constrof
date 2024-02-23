import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { LuUploadCloud } from "react-icons/lu";

const ContUpload = () => {
  return (
    <div>
      <HomeBredCurbs title="Upload Documents " />
      <div className="row">
        <div className="col-lg-12">
          <span className="font-semibold">PAN / Aadhar Card</span>
          <div class="border-dashed border-2 border-black-200 w-50 p-2 mt-2 flex justify-center">
            <label
              for="fileInput"
              className="p-4 flex flex-col items-center cursor-pointer"
            >
              <LuUploadCloud className="text-slate-400 text-6xl mb-2" />
              <span className="text-center text-sm text-slate-400">
                Drag a file here or browse a file to upload
              </span>
            </label>
            <input type="file" id="fileInput" className="hidden" />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-12">
          <span className="font-semibold">Shop Act License</span>
          <div class="border-dashed border-2 border-black-200 w-50 p-2 mt-2 flex justify-center">
            <label
              for="fileInput"
              className="p-4 flex flex-col items-center cursor-pointer"
            >
              <LuUploadCloud className="text-slate-400 text-6xl mb-2" />
              <span className="text-center text-sm text-slate-400">
                Drag a file here or browse a file to upload
              </span>
            </label>
            <input type="file" id="fileInput" className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContUpload;
