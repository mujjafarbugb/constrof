import React, { useState } from "react";
import HomeBredCurbs from "../../pages/ClientDash/HomeBredCurbs";
import camPic from "../../assets/images/logo/camPic.jpg";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const schema = yup.object({
  firm: yup.string().required("Firm Name is Required."),
  firmtype: yup.string().required("Please select a firm type."),
  represent: yup.string().required("Feild is Required."),
  designation: yup.string().required("Designation is Required."),
  username: yup.string().required("Username is Required."),
  homecity: yup.string().required("Home city is Required."),
  opcity: yup.array().min(1, "At least one city must be selected"),
  selectedYear: yup.string().required("Please select a starting year."),
  Staff: yup.string().required("Please select a number of staff."),
  labour: yup.string().required("Please select a current labour strength."),
  expertise: yup.string().required("Please select a expertise."),
  mobNo: yup
    .string()
    .required("Mobile number is Required.")
    .matches(/^[0-9]+$/, "Mobile number must contain only numbers")
    .length(10, "Mobile number must be exactly 10 digits"),
});

function ContractorBasic() {
  const navigate = useNavigate();
  const initialValues = {
    firm: "",
    represent: "",
    designation: "",
    username: "",
    mobNo: "",
    homecity: "",
    opcity: "",
    selectedYear: "",
    Staff: "",
    labour: "",
    firmtype: "",
    expertise: "",
  };
  const [selectedFirm, setSelectedFirm] = useState();
  const [selectedStaff, setSelectedStaff] = useState([]);

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedExper, setSelectedExper] = useState([]);

  const [selectedYear, setSelectedYear] = useState("");
  const [showGSTInput, setShowGSTInput] = useState(false);
  const [showPFInput, setShowPFInput] = useState(false);
  const [showPANInput, setShowPANInput] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  const handleCheckboxChange = (e, setter) => {
    setter(e.target.checked);
  };

  // Define the range of firm
  const startFirm = "Ltd";
  const endFirm = 2100;
  const startYear = 1900;
  const endYear = 2100;
  const startedu = "Ltd";
  const endedu = 2100;

  const startstaff = "Ltd";
  const endstaff = 2100;

  // Generate the array of years
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  // Generate the array of years
  const firms = ["proprietor", "partnership", "LLP", "Pvt Ltd", "Ltd", "HUF"];
  for (let firm = startFirm; firm <= endFirm; firm++) {
    firms.push(firm);
  }

  // Event handler for when the year is selected
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const staff = [
    "Pre Graduate",
    "Diploma",
    "Graduate",
    "Post Graduate",
    "Other",
  ];
  for (let staf = startstaff; staf <= endstaff; staf++) {
    staff.push(staf);
  }
  const handleStaffChange = (event) => {
    setSelectedStaff(event.target.value);
  };

  const handleFirmChange = (event) => {
    setSelectedFirm(event.target.value);
  };

  const handleEduChange = (event) => {
    setSelectedEducation(event.target.value);
  };
  const education = [
    "Pre Graduate",
    "Diploma",
    "Graduate",
    "Post Graduate",
    "Other",
  ];
  for (let edu = startedu; edu <= endedu; edu++) {
    education.push(edu);
  }

  const [cities, setCities] = useState([
    { id: 1, name: "City 1" },
    { id: 2, name: "City 2" },
    { id: 3, name: "City 3" },
    // Add more cities as needed
  ]);

  const handleCityChange = (cityId) => {
    const index = selectedCities.indexOf(cityId);
    if (index === -1) {
      setSelectedCities([...selectedCities, cityId]);
    } else {
      setSelectedCities(selectedCities.filter((id) => id !== cityId));
    }
  };

  // Function to display selected cities in the input field
  const renderSelectedCities = () => {
    return selectedCities
      .map((cityId) => {
        const city = cities.find((city) => city.id === cityId);
        return city ? city.name : "";
      })
      .join(", ");
  };

  const [expertise, setExpertise] = useState([
    { id: 1, name: "Pune" },
    { id: 2, name: "Banglore" },
    { id: 3, name: "Delhi" },
    // Add more cities as needed
  ]);
  const handleCityExper = (experId) => {
    const index = selectedExper.indexOf(experId);
    if (index === -1) {
      setSelectedExper([...selectedExper, experId]);
    } else {
      setSelectedExper(selectedExper.filter((id) => id !== experId));
    }
  };

  const renderSelectedExpe = () => {
    return selectedExper
      .map((experId) => {
        const exper = expertise.find((exper) => exper.id === experId);
        return exper ? exper.name : "";
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
              <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
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
              <div class="mb-3 col-lg-6">
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
                <label htmlFor="exampleInputYear" className="form-label">
                  Select Firm Type
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <select
                  className="form-select text-sm"
                  id="exampleInputYear"
                  aria-describedby="emailHelp"
                  // value={selectedFirm}
                  name="firmtype"
                  value={formik.values.firmtype}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFirmChange(e);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {firms.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>
                {formik.touched.firmtype && formik.errors.firmtype && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.firmtype}
                  </div>
                )}
              </div>

              <div class="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Designation
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter designation.."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.designation}
                />
                {formik.touched.designation && formik.errors.designation && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.designation}
                  </div>
                )}
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputYear" className="form-label">
                  Select Education
                </label>
                <select
                  className="form-select text-sm"
                  id="exampleInputYear"
                  aria-describedby="emailHelp"
                  value={selectedEducation}
                  onChange={handleEduChange}
                >
                  <option value="" className="">
                    Select Education
                  </option>
                  {education.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">
                  Qualification
                </label>
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="Enter name.."
                />
              </div>
              <div class="mb-3 col-lg-6">
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
              <div class="mb-3 col-lg-6">
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
              <div class="mb-3 col-lg-6">
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
              <div class="mb-3 col-lg-6">
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
              <div class="mb-3 col-lg-6">
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

              <div class="mb-3 col-lg-6">
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
                <label htmlFor="cityInput" className="form-label">
                  Select Expertise
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-white"
                    id="cityInput"
                    aria-describedby="cityHelp"
                    placeholder="Selected cities"
                    name="expertise"
                    value={renderSelectedExpe() || formik.values.expertise}
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleCityExper(exper.id);
                    }}
                    onBlur={formik.handleBlur}
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
                    {expertise.map((exper) => (
                      <li key={exper.id}>
                        <label
                          className="dropdown-item"
                          htmlFor={`cityCheckbox ${exper.id}`}
                        >
                          <input
                            type="checkbox"
                            id={`cityCheckbox${exper.id}`}
                            className="form-check-input "
                            checked={selectedExper.includes(exper.id)}
                            onChange={(e) => {
                              handleCityExper(exper.id);
                            }}
                          />
                          &nbsp;{exper.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                {formik.touched.expertise && formik.errors.expertise && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.expertise}
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
                    name="opcity"
                    readOnly
                    value={renderSelectedCities()}
                    onChange={(e) => {
                      handleCityChange(city.id);
                    }}
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
              <div class="mb-3 col-lg-6">
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
                <label htmlFor="exampleInputYear" className="form-label">
                  Starting Year
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <select
                  className="form-select text-sm"
                  id="exampleInputYear"
                  name="selectedYear"
                  aria-describedby="emailHelp"
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

              <div class="mb-3 col-lg-12">
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
              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputYear" className="form-label">
                  Number Of Staff
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <select
                  className="form-select text-sm"
                  id="exampleInputYear"
                  name="Staff"
                  aria-describedby="emailHelp"
                  value={formik.values.Staff}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleStaffChange(e);
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option value="" className="">
                    Select Number Of Staff
                  </option>
                  {staff.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>
                {formik.touched.Staff && formik.errors.Staff && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.Staff}
                  </div>
                )}
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputYear" className="form-label">
                  Currunt Labour Strength
                  <span className="text-red-400 text-lg mt-3">*</span>
                </label>
                <select
                  className="form-select text-sm"
                  id="exampleInputYear"
                  name="labour"
                  aria-describedby="emailHelp"
                  value={formik.values.labour}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFirmChange(e);
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option value="" className="">
                    Select Labour Strength
                  </option>
                  {firms.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>
                {formik.touched.labour && formik.errors.labour && (
                  <div className="text-red-500 text-sm p-1">
                    {formik.errors.labour}
                  </div>
                )}
              </div>

              <div class="mb-3 col-lg-12">
                <label for="exampleInputEmail1" class="form-label">
                  Authorised Applicators
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>

              <div className="mb-3 col-lg-12 flex items-center gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckGST"
                    onChange={(e) => handleCheckboxChange(e, setShowGSTInput)}
                  />
                  <label
                    className="form-check-label text-sm font-medium"
                    htmlFor="flexCheckGST"
                  >
                    GST Number
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckPF"
                    onChange={(e) => handleCheckboxChange(e, setShowPFInput)}
                  />
                  <label
                    className="form-check-label text-sm font-medium"
                    htmlFor="flexCheckPF"
                  >
                    PF Number
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckPAN"
                    onChange={(e) => handleCheckboxChange(e, setShowPANInput)}
                  />
                  <label
                    className="form-check-label text-sm font-medium"
                    htmlFor="flexCheckPAN"
                  >
                    PAN Number
                  </label>
                </div>
              </div>

              {showGSTInput && (
                <div className="mb-3 col-lg-7">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputGST"
                    placeholder="Enter GST Number"
                  />
                </div>
              )}

              {showPFInput && (
                <div className="mb-3 col-lg-7">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPF"
                    placeholder="Enter PF Number"
                  />
                </div>
              )}

              {showPANInput && (
                <div className="mb-3 col-lg-7">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPAN"
                    placeholder="Enter PAN Number"
                  />
                </div>
              )}

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

              <button
                type="submit"
                class="btn bg-[#00adee] hover:bg-[#6fcaeb] text-white text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContractorBasic;
