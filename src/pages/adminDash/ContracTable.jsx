import React from "react";

const ContracTable = ({data}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse  border-gray-50">
          <thead>
            <tr className="bg-[#6fc6e9] text-white ">
              <th className="px-4 py-2 border border-gray-200  " style={{width:"100rem"}}>Name</th>
              <th className="px-4 py-2 border border-gray-200">Age</th>
              <th className="px-4 py-2 border border-gray-200">Email</th>
              <th className="px-4 py-2 border border-gray-200">Mobile</th>
              <th className="px-4 py-2 border border-gray-200">Firm Name</th>
              <th className="px-4 py-2 border border-gray-200">Firm Representative</th>
              <th className="px-4 py-2 border border-gray-200">Representative Designation</th>
              <th className="px-4 py-2 border border-gray-200">Website</th>
              <th className="px-4 py-2 border border-gray-200">Preferred Cities</th>
              <th className="px-4 py-2 border border-gray-200">Year Of Estimation</th>
              {/* <th className="px-4 py-2 border border-gray-200">Remark</th> */}
              <th className="px-4 py-2 border border-gray-200">Registration On</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-black-50 text-sm">
                <td className="px-4 py-2  shadow-sm">{item.userName}</td>
                <td className="px-4 py-2  shadow-sm">{item.userCode}</td>
                <td className="px-4 py-2  shadow-sm">{item.email}</td>
                <td className="px-4 py-2  shadow-sm">{item.mobile}</td>
                <td className="px-4 py-2  shadow-sm">{item.firmName}</td>
                <td className="px-4 py-2  shadow-sm">{item.firmRepresentative}</td>
                <td className="px-4 py-2  shadow-sm">{item.representativeDesignation}</td>
                <td className="px-4 py-2  shadow-sm">{item.website}</td>
                <td className="px-4 py-2  shadow-sm">{item.preferredCities}</td>
                <td className="px-4 py-2  shadow-sm">{item.yearOfEst}</td>
                {/* <td className="px-4 py-2  shadow-sm">{item.remark}</td> */}
                <td className="px-4 py-2  shadow-sm">{item.regOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContracTable;
