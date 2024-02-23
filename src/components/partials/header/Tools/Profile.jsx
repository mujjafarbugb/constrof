import React from "react";
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import profile from "../../../../assets/images/logo/profile.jpeg";

const profileLabel = () => {
  const location = useLocation();

  const getCurrentProfile = () => {
    const path = location.pathname;

    if (path.includes("/dashboard")) {
      return "Client Profile";
    } else if (path.includes("/ContractorDash")) {
      return "Contractor Profile";
    } else if (path.includes("/IndividualDash")) {
      return "Individual Profile";
    } else {
      return "Admin Profile";
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
        <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
          <img
            src={profile}
            alt=""
            className="block w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-none text-slate-600 text-sm font-normal items-center lg:flex hidden ">
        <span className="overflow-hidden text-slate-500 w-[80px] font-semibold block">
          {/* User Profile */}
          {getCurrentProfile()}
        </span>
        {/* <span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
          <Icon icon="heroicons-outline:chevron-down"></Icon>
        </span> */}
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ProfileMenu = [
    // {
    //   label: "Profile",
    //   icon: "heroicons-outline:user",
    //   action: () => {
    //     navigate("/profile");
    //   },
    // },
    // {
    //   label: "Faq",
    //   icon: "heroicons-outline:information-circle",
    //   action: () => {
    //     navigate("/faq");
    //   },
    // },
    // {
    //   label: "Logout",
    //   icon: "heroicons-outline:login",
    //   action: () => {
    //     // Assuming you want to delete an item with key "user"
    //     localStorage.removeItem("user");
    //     navigate("/");
    //     dispatch(handleLogout(false));
    //   },
    // },
    // {
    //   label: "Chat",
    //   icon: "heroicons-outline:chat",
    //   action: () => {
    //     navigate("/chat");
    //   },
    // },
    // {
    //   label: "Email",
    //   icon: "heroicons-outline:mail",
    //   action: () => {
    //     navigate("/email");
    //   },
    // },
    // {
    //   label: "Todo",
    //   icon: "heroicons-outline:clipboard-check",
    //   action: () => {
    //     navigate("/todo");
    //   },
    // },
    // {
    //   label: "Settings",
    //   icon: "heroicons-outline:cog",
    //   action: () => {
    //     navigate("/settings");
    //   },
    // },
    // {
    //   label: "Price",
    //   icon: "heroicons-outline:credit-card",
    //   action: () => {
    //     navigate("/pricing");
    //   },
    // },
  ];

  return (
    <>
      <div className="flex items-center gap-2">
        <div>
          <img
            src={profile}
            className="h-[40px] w-[40px] rounded-full"
            alt=""
          />
        </div>
        <div>
          <span className="text-md font-semibold">User Profile</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
