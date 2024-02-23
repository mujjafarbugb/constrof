import React from "react";
import { Link } from "react-router-dom";
import useSkin from "@/hooks/useSkin";
import constroLOGO from "../../../assets/images/logo/constroLOGO.png";

const SidebarLogo = ({ menuHover }) => {
  const [skin] = useSkin();


  return (
    <div
      className={` logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-2  px-4 
      ${menuHover ? "logo-hovered" : ""}
      ${
        skin === "bordered"
          ? " border-b border-r-0 border-slate-200 dark:border-slate-700"
          : " border-none"
      }
      
      `}
    >
      <Link to="">
        <div className="items-center space-x-6">
          <div className="flex justify-center">
            <img className="w-[90%]" src={constroLOGO} alt="" />
          </div>

          {/* {(!collapsed || menuHover) && (
            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                ConstroPlus
              </h1>
            </div>
          )} */}
        </div>
      </Link>

      {/* {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={`h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150
          ${
            collapsed
              ? ""
              : "ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"
          }
          `}
        ></div>
      )} */}
    </div>
  );
};

export default SidebarLogo;
