import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";

const CreateEoi = () => {
  const [selectedCategory, setSelectedCategory] = useState("Client");
  const [secondDropdownOptions, setSecondDropdownOptions] = useState({
    Contractor: [
      "H Hydra",
      "H Pocklain + JCB",
      "H Towercrane",
      "H Tractor",
      "L BBM Plaster",
      "L Carpentry Works",
      "L Corecutting",
      "L Demolition",
      "L Department Supply",
      "L Earthwork",
      "L Electrical",
      "L Fabrication",
      "L Firefighting",
      "L Glass Works",
      "L Gypsum",
      "L Interior",
      "L Painting",
      "L Piling",
      "L Plumbing",
      "L RCC",
      "L Rebarring",
      "L Rockanchoring",
      "L Structural Steel",
      "L Swimming Pool",
      "L Tiling Works",
      "L Tremix",
      "L Waterproofing",
      "L+M BBM Plaster",
      "L+M Carpentry Works",
      "L+M Electrical-LT",
      "L+M Fabrication",
      "L+M Ferrocrete",
      "L+M FireFighting",
      "L+M Glass Works",
      "L+M Gypsum",
      "L+M HVAC",
      "L+M Hardscape",
      "L+M Interior",
      "L+M Lock N Key",
      "L+M MEP",
      "L+M Painting",
      "L+M Plumbing",
      "L+M RCC",
      "L+M RoadWorks",
      "L+M Shell and Core",
      "L+M Solar",
      "L+M Structural Steel",
      "L+M Tiling Works",
      "L+M Waterproofing",
      "Other",
      "Surveyor",
    ],
  });

  return (
    <div>
      <HomeBredCurbs title="Create EOI " />
      <div className="row">
        <form>
          <div className="row">
            <div class="mb-3 col-lg-6">
              <label for="exampleInputEmail1" class="form-label">
                Select Contractor Bank{" "}
              </label>
              <select
                class="form-select text-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              >
                <option value="" className="text-sm " selected disabled>
                  All Contractors
                </option>
                <option value="option1" className="text-sm ">
                  My Contractors
                </option>
              </select>
            </div>

            <div class="mb-3 col-lg-6">
              <label for="exampleInputEmail1" class="form-label">
                Select Project{" "}
              </label>
              <select
                class="form-select text-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              >
                <option value="" className="text-sm " selected disabled>
                  Vishwaganga
                </option>
                <option value="option1" className="text-sm ">
                  Wondervilla
                </option>
                <option value="option2" className="text-sm ">
                  Konark
                </option>
              </select>
            </div>
            <div class="mb-3 col-lg-6">
              <label for="exampleInputEmail1" class="form-label">
                Select Building{" "}
              </label>
              <select
                class="form-select text-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              >
                <option value="" className="text-sm " selected disabled>
                  A
                </option>
                <option value="option1" className="text-sm ">
                  B
                </option>
                <option value="option1" className="text-sm ">
                  C
                </option>
              </select>
            </div>
            <div className="mb-3 col-lg-6">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Select Scope{" "}
              </label>
              <select
                className="form-select text-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {Object.entries(secondDropdownOptions).map(
                  ([category, options]) => (
                    <optgroup label={category} key={category}>
                      {options.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </optgroup>
                  )
                )}
              </select>
            </div>
            <div class="mb-3 col-lg-6">
              <label for="exampleInputPassword1" class="form-label">
                Probable Start Date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
                placeholder=" "
              />
            </div>
            <div class="mb-3 col-lg-6">
              <label for="exampleInputPassword1" class="form-label">
                Last Day of Application
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
                placeholder=" "
              />
            </div>
            <div class="mb-3 col-lg-6">
              <label for="exampleInputEmail1" class="form-label">
                Approximate EOI Value
              </label>
              <div class="input-group">
                <span class="input-group-text">&#8377;</span>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
            </div>

            <div class="mb-3 col-lg-12">
              <label for="exampleInputEmail1" class="form-label">
                Remark
              </label>
              <textarea
                class="form-control"
                placeholder=""
                id="floatingTextarea2"
              ></textarea>
            </div>

            <div class="row ">
              <div class="col-lg-6 mt-2 sm:mt-0">
                <button type="submit" class="btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-100">
                  Save As Draft
                </button>
              </div>
              <div class="col-lg-6 mt-2 sm:mt-0">
                <button type="submit" class="btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-100">
                  Float EOI
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEoi;
