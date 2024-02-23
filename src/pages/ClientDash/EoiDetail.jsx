import React, { useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";

const EoiDetail = () => {
  return (
    <div>
      <HomeBredCurbs title="EOI Details" />

      <table className="table-auto">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-semibold">Contract Type : </td>
            <td className="px-4 py-2 font-normal">Open</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Developer : </td>
            <td className="px-4 py-2 font-normal">Shiva developers</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Project : </td>
            <td className="px-4 py-2 font-normal">Vishwaganga</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Building : </td>
            <td className="px-4 py-2 font-normal">A</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Location : </td>
            <td className="px-4 py-2 font-normal">Karvenagar, Pune</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Scope : </td>
            <td className="px-4 py-2 font-normal">L BBM Plaster</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Approx EOI Value : </td>
            <td className="px-4 py-2 font-normal">&#8377; 11,1510</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Probable Start Date : </td>
            <td className="px-4 py-2 font-normal">01-04-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Last Date of Apply : </td>
            <td className="px-4 py-2 font-normal">31-04-2024</td>
          </tr>
        </tbody>
      </table>
      <hr className="text-slate-400 m-3" />
      <span className="text-lg font-semibold">0 Applications</span>
    </div>
  );
};

export default EoiDetail;
