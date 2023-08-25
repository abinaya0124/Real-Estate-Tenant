import React, { useState } from "react";
import TenantDetails from "../../TenantData.json";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin3Fill } from "react-icons/ri";
import "./tenant.scss";
import AddNewTenant from "../addNewTenant/AddNewTenant";
import { v4 as uuidv4 } from "uuid";
import EditExistingTenant from "../editExistingTenant/EditExistingTenant";

const TenentDetails = () => {
  const initialTenantDetails = TenantDetails.map((tenant) => ({
    ...tenant,
    idx: uuidv4(),
  }));

  const [home, setHome] = useState(initialTenantDetails);
  const [addNewBox, setAddNewBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const handleEdit = (index, edited) => {
    const editedHome = home.map((item, idx) =>
      idx === index ? { ...item, ...edited } : item
    );
    setHome(editedHome);
    // setEditingRow(null);
    setEditBox(true);
  };

  const handleDelete = (tenantId) => {
    const newHome = home.filter((item) => item.idx !== tenantId);
    setHome(newHome);
  };

  const handleAdd = (newTenantData) => {
    const newTenant = {
      ...newTenantData,
      idx: uuidv4(),
    };
    setHome([...home, newTenant]);
    setAddNewBox(false);
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
                <TiPencil onClick={() => setEditBox(true)} />
              </td>
              editingRow===idx?
              {editBox && (
                <EditExistingTenant
                  closeEdit={() => setEditBox(false)}
                  item={item}
                  handleEdit={(edited) => handleEdit(idx, edited)}
                />
              )}
              <td className="edit-delete delete">
                <RiDeleteBin3Fill onClick={() => handleDelete(item.idx)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn" onClick={() => setAddNewBox(true)}>
        Add New Tenant
      </button>
      {addNewBox && (
        <AddNewTenant closeBox={setAddNewBox} handleAdd={handleAdd} />
      )}
    </div>
  );
};

export default TenentDetails;
