import React from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import ActiveProjTable from "./ActiveProjTable";

const ProjectsList = () => {
  const data = [
    { regNo: "100024", eoiNo: "EOI/22/100024", building: "A", startDate:"2022-12-25", lastDate:"2023-01-07", maxContractValue:6000000, regOn:"28-02-2024" },
    { regNo: "100024", eoiNo: "EOI/22/100024", building: "A", startDate:"2022-12-25", lastDate:"2023-01-07", maxContractValue:6000000, regOn:"28-02-2024" },
    { regNo: "100024", eoiNo: "EOI/22/100024", building: "A", startDate:"2022-12-25", lastDate:"2023-01-07", maxContractValue:6000000, regOn:"28-02-2024" },
    { regNo: "100024", eoiNo: "EOI/22/100024", building: "A", startDate:"2022-12-25", lastDate:"2023-01-07", maxContractValue:6000000, regOn:"28-02-2024" },
    { regNo: "100024", eoiNo: "EOI/22/100024", building: "A", startDate:"2022-12-25", lastDate:"2023-01-07", maxContractValue:6000000, regOn:"28-02-2024" },
    { regNo: "100024", eoiNo: "EOI/22/100024", building: "A", startDate:"2022-12-25", lastDate:"2023-01-07", maxContractValue:6000000, regOn:"28-02-2024" },
    
  ];

  return (
    <>
      <HomeBredCurbs title="Active Projects" />
      <div className="container mx-auto">
        <ActiveProjTable data={data} />
      </div>
    </>
  );
};

export default ProjectsList;
