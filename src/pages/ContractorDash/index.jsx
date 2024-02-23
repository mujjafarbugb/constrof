import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import computer from "../../assets/images/icon/computer.png";
import registered from "../../assets/images/icon/registered.png";
import report from "../../assets/images/chat/report.png";
import result from "../../assets/images/icon/result.png";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Contractor Dashboard " />
      <div className="row">
        <div className="col-md-6 p-2">
          <Link to="/ongoingProj">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#d4f4f4] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">23</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Ongoing Projects
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={computer} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="/completeProj">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#f5f5f5] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">37</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Completed Projects
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={result} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="/myApplication">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#def1b9] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">77</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    My Applications
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={report} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="/registerClient">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#faebd7] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">93</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                   Registered Clients
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={registered} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
