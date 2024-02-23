import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import engineer from "../../assets/images/chat/engineer.png";
import agreement from "../../assets/images/chat/agreement.png";
import report from "../../assets/images/chat/report.png";
import analytics from "../../assets/images/chat/analytics.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Dashboard " />

      <div className="row">
        <div className="col-md-6 p-2">
          <Link to="/contractor">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#d4f4f4] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">23</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    My Contractors
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={engineer} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#f5f5f5] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">37</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Analytics
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={analytics} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#def1b9] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">77</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Contract Applications
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={agreement} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#faebd7] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">93</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    My EOI's
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={report} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
