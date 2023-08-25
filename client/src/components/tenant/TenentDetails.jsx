import React, { useState } from "react";
import TenantDetails from "../../TenantData.json";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin3Fill } from "react-icons/ri";
import "./tenant.scss";

const TenentDetails = () => {
  const [home, setHome] = useState(TenantDetails);

  const handleDelete = (tenantId) => {
    const newHome = [...home];
    const index = home.findIndex((item) => item.idx === tenantId);
    newHome.splice(index, 1);
    setHome(newHome);
  };

  return (
    <div className="tenant-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type of Rental Place</th>
            <th>People Living</th>
            <th>Address</th>
            <th>Lease Period</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {home.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.noOfPeople}</td>
              <td>{item.address}</td>
              <td>{item.lease}</td>
              <td className="edit-delete edit">
                <TiPencil />
              </td>
              <td className="edit-delete delete">
                <RiDeleteBin3Fill onClick={() => handleDelete(item.idx)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenentDetails;
