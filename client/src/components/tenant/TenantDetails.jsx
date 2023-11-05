import React, { useState } from "react";
import TenantDetails from "../../Data/TenantData.json";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin3Fill } from "react-icons/ri";
import "./tenant.scss";
import AddNewTenant from "../AddNewTenant/AddNewTenant";
import { v4 as uuidv4 } from "uuid";
import EditExistingTenant from "../EditExistingTenant/EditExistingTenant";

const TenentDetails = () => {
  const initialTenantDetails = TenantDetails.map((tenant) => ({
    ...tenant,
    idx: uuidv4(),
  }));

  const [home, setHome] = useState(initialTenantDetails);
  const [addNewBox, setAddNewBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEdit = (index) => {
    setRowToEdit(index);
    setEditBox(true);
  };

  const handleEditBoxSubmit = (editedRow) => {
    rowToEdit === null
      ? setHome([...home, editedRow])
      : setHome(
          home.map((currentRow, index) =>
            index !== rowToEdit ? currentRow : editedRow
          )
        );
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
                <button onClick={() => handleEdit(idx)}>
                  <TiPencil
                    onClick={() => {
                      setEditBox(true);
                    }}
                  />
                </button>
              </td>
              {rowToEdit === idx && editBox && (
                <EditExistingTenant
                  onSubmit={handleEditBoxSubmit}
                  item={item}
                  closeEdit={() => {
                    setEditBox(false);
                    setRowToEdit(null);
                  }}
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
