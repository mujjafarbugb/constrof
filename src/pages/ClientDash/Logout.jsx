import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";

const Logout = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Logout Page " />
    </div>
  );
};

export default Logout;
