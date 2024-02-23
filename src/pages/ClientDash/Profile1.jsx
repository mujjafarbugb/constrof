import React, { useState } from "react";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import HomeBredCurbs from "./HomeBredCurbs";
import { IoPerson } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { BiSolidCalendarEvent } from "react-icons/bi";

const Profile1 = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Profile Page " />
    </div>
  );
};

export default Profile1;
