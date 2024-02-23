import React from "react";

const ActiveProjTable = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse  border-gray-50">
          <thead>
            <tr className="bg-[#6fc6e9] text-white ">
              <th className="px-4 py-2 border border-gray-200  ">Reg No</th>
              <th className="px-4 py-2 border border-gray-200">EOI No</th>
              <th className="px-4 py-2 border border-gray-200">Building</th>
              <th className="px-4 py-2 border border-gray-200">Start Date</th>
              <th className="px-4 py-2 border border-gray-200">Last Date</th>
              <th className="px-4 py-2 border border-gray-200">
                Max Contract Value
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Registration On
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-black-50 text-sm">
                <td className="px-4 py-2  shadow-sm">{item.regNo}</td>
                <td className="px-4 py-2  shadow-sm">{item.eoiNo}</td>
                <td className="px-4 py-2  shadow-sm">{item.building}</td>
                <td className="px-4 py-2  shadow-sm">{item.startDate}</td>
                <td className="px-4 py-2  shadow-sm">{item.lastDate}</td>
                <td className="px-4 py-2  shadow-sm">
                  {item.maxContractValue}
                </td>
                <td className="px-4 py-2  shadow-sm">{item.regOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ActiveProjTable;
