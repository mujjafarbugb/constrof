import React from "react";
import image1 from "@/assets/images/all-img/widget-bg-1.png";
import UserAvatar from "@/assets/images/all-img/userImg3.webp";

const ImageBlock1 = () => {
  return (
    <>
      <div className="grid grid-cols-1 mt-4">
        <div className="col-span-12 lg:col-span-9 ">
          <div className="py-3 px-4 rounded-md bg-red-400 flex flex-col items-center sm:flex-row justify-between sm:items-center">
            <div className="w-20 h-20 rounded-md sm:mr-4">
              <img
                src={UserAvatar}
                alt=""
                className="block w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center">
              <div className="text-lg font-bold mb-2 lg:text-left dark:text-slate-300 text-white">
                Your profile editing is not completed.
              </div>
              <div className="text-sm font-medium lg:text-left dark:text-white text-white">
                Complete your profile editing & build your custom Resume
              </div>
            </div>

            <div className="bg-white rounded-md text-blue-300 flex items-center justify-center sm:mt-0 md: mt-3">
              <button className="bg-white text-red-400 px-3 py-3 sm:px-3 sm:py-3 font-medium rounded-md flex items-center">
                Edit Profile{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBlock1;
