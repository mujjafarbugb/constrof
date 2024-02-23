import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import { Link } from "react-router-dom";
import public_relation from "../../assets/images/icon/public_relation.png";
import workers from "../../assets/images/icon/workers.png";
import agreement from "../../assets/images/icon/agreement.png";
import book from "../../assets/images/icon/book.png";

const Dashboard = () => {
  return (
    <div>
      <HomeBredCurbs title="Admin Dashboard " />

      <div className="row">
        <div className="col-md-6 p-2">
          <Link to="/clientsList">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#d4f4f4] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">23</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Total Clients
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={public_relation} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="/contractList">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#f5f5f5] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">37</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Total Contractors
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={workers} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 p-2">
          <Link to="/projectsList">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#def1b9] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">77</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Active Projects
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
          <Link to="/projCloseList">
            <div className="bg-cover bg-center rounded-lg shadow-md overflow-hidden bg-[#faebd7] flex">
              <div className="flex-1">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">93</h3>
                  <span className="text-lg text-slate-500 font-semibold">
                    Closed Projects
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <img src={book} alt="" className="h-[100px] m-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
