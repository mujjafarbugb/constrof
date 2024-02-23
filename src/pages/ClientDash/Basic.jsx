import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import camPic from "../../assets/images/logo/camPic.jpg";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const schema = yup.object({
  firm: yup.string().required("Firm Name is Required."),
  represent: yup.string().required("Feild is Required."),
  username: yup.string().required("Username is Required."),
  homecity: yup.string().required("Home city is Required."),
  opCity: yup.array().min(1, "At least one city must be selected"),
  selectedYear: yup.string().required("Please select a starting year."),
  mobNo: yup
    .string()
    .required("Mobile number is Required.")
    .matches(/^[0-9]+$/, "Mobile number must contain only numbers")
    .length(10, "Mobile number must be exactly 10 digits"),
});

const Basic = () => {
  const navigate = useNavigate();
  const initialValues = {
    firm: "",
    represent: "",
    username: "",
    mobNo: "",
    homecity: "",
    opCity: [],
    selectedYear: "",
  };
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);
  const startYear = 1900;
  const endYear = 2100;

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const [cities, setCities] = useState([
    { id: 1, name: "City 1" },
    { id: 2, name: "City 2" },
    { id: 3, name: "City 3" },
  ]);

  const handleCityChange = (cityId) => {
    setSelectedCities((prevSelectedCities) => {
      if (prevSelectedCities.includes(cityId)) {
        return prevSelectedCities.filter((id) => id !== cityId);
      } else {
        return [...prevSelectedCities, cityId];
      }
    });
  };

  const renderSelectedCities = () => {
    return selectedCities
      .map((cityId) => {
        const city = cities.find((city) => city.id === cityId);
        return city ? city.name : "";
      })
      .join(", ");
  };

  return (
    <div>
      <HomeBredCurbs title="Basic Info " />
      <div className="row">
        <div className="col-lg-12">
          <img
            className="h-[90px] w-[90px] rounded-md opacity-60"
            src={camPic}
            alt=""
          />
          <span className="text-sm text-slate-400 font-normal">
            Last Modified On : 15-Feb-2024{" "}
          </span>

          <form onSubmit={formik.handleSubmit}>
            <div className="row mt-3">
              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Firm name <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <input
                  type="text"
                  name="firm"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Firm name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firm}
                />
                {formik.touched.firm && formik.errors.firm && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.firm}
                  </div>
                )}
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Representative
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <input
                  type="text"
                  name="represent"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.represent}
                />
                {formik.touched.represent && formik.errors.represent && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.represent}
                  </div>
                )}
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Designation of Representative
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="e.g. Owner"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Username<span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter username.."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.username}
                  </div>
                )}
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Mobile Number
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <input
                  type="text"
                  name="mobNo"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter mobile number.."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobNo}
                />
                {formik.touched.mobNo && formik.errors.mobNo && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.mobNo}
                  </div>
                )}
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Alternate Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder=" Mobile Number"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=" Email address"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  Website
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=" Website link"
                />
              </div>

              <div className="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  Pincode
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Pincode"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  Home City<span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <input
                  type="text"
                  name="homecity"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter home city.."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.homecity}
                />
                {formik.touched.homecity && formik.errors.homecity && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.homecity}
                  </div>
                )}
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="cityInput" className="form-label">
                  Operational Cities
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-white"
                    id="cityInput"
                    aria-describedby="cityHelp"
                    placeholder="Selected cities"
                    value={renderSelectedCities()}
                    readOnly
                  />
                  <button
                    className="btn bg-black-100 hover:bg-black-100 dropdown-toggle"
                    type="button"
                    id="cityDropdownButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="cityDropdownButton"
                  >
                    {cities.map((city) => (
                      <li key={city.id}>
                        <label
                          className="dropdown-item"
                          htmlFor={`cityCheckbox ${city.id}`}
                        >
                          <input
                            type="checkbox"
                            id={`cityCheckbox${city.id}`}
                            className="form-check-input "
                            checked={selectedCities.includes(city.id)}
                            onChange={() => handleCityChange(city.id)}
                          />
                          &nbsp;{city.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputYear" className="form-label">
                  Starting Year
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <select
                  className="form-select text-sm"
                  id="exampleInputYear"
                  aria-describedby="emailHelp"
                  name="selectedYear"
                  value={formik.values.selectedYear}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" className="">
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {formik.touched.selectedYear && formik.errors.selectedYear && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.selectedYear}
                  </div>
                )}
              </div>

              <div className="mb-3 col-lg-12">
                <label for="exampleInputEmail1" class="form-label">
                  Firm Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Firm Address"
                />
              </div>
              <div className="mb-3 col-lg-12">
                <label for="exampleInputEmail1" class="form-label">
                  Remark
                </label>
                <textarea
                  class="form-control"
                  placeholder=""
                  id="floatingTextarea2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-[#00adee] hover:bg-[#6fcaeb] text-white text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Basic;
