import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";

const EOIS = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="EOIS Page " />
    </div>
  );
};

export default EOIS;
