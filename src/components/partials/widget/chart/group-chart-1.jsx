import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
const GroupChart1 = () => {
  return (
    <>
      <div class="grid grid-cols-3 gap-4">
        <div class="shadow-sm rounded-md">
          <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-blue-100 flex items-center">
            <div className="flex-1">
              <div className="text-xl mb-1 font-bold p-2">589</div>
              <div className="text-sm font-medium"> Applied Jobs</div>
            </div>
            <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-blue-300">
              <BsFillBriefcaseFill className="text-4xl" />
            </div>
          </div>
        </div>
        <div class="shadow-sm rounded-md">
          <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-orange-50 flex items-center">
            <div className="flex-1">
              <div className="text-xl mb-1 font-bold p-2">2,517</div>
              <div className="text-sm font-medium">Favorite Jobs</div>
            </div>
            <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-orange-300">
              <FaBookmark className="text-4xl" />
            </div>
          </div>
        </div>
        <div class="shadow-sm rounded-md">
          <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-green-100 flex items-center">
            <div className="flex-1">
              <div className="text-xl mb-1 font-bold p-2">2,517</div>
              <div className="text-sm font-medium">Job Alerts</div>
            </div>
            <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-green-300">
              <IoNotifications className="text-4xl" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-blue-100 flex items-center">
        <div className="flex-1">
          <div className="text-xl mb-1 font-bold p-2">345</div>
          <div className="text-sm font-medium">Recommended Course</div>
        </div>
        <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-briefcase-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
          </svg>
        </div>
      </div>

      <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-orange-100">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex-1">
            <div className="text-xl mb-1 font-bold p-2">506</div>
            <div className="text-sm font-medium">Saved Courses</div>
          </div>
          <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-orange-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-green-100">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex-1">
            <div className="text-xl mb-1 font-bold p-2">752</div>
            <div className="text-sm font-medium">Job Alerts</div>
          </div>
          <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
          </div>
        </div>
      </div>

      <div className="py-2 px-2 md:px-4 lg:px-6 rounded-md bg-green-100">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex-1">
            <div className="text-xl mb-1 font-bold p-2">752</div>
            <div className="text-sm font-medium">Job Alerts</div>
          </div>
          <div className="flex items-center justify-center bg-white w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-md text-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default GroupChart1;
