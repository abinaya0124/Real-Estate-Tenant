import React, { useState } from "react";
import "./edit.scss";
import { RxCross2 } from "react-icons/rx";

const EditExistingTenant = ({ item, handleEdit, closeEdit }) => {
  const [formData, setFormData] = useState({
    name: item.name,
    type: item.type,
    people: item.noOfPeople,
    address: item.address,
    lease: item.lease,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(item.idx, formData);
    closeEdit();
  };

  const handleInput = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="edit-box1">
      <div className="edit-box2">
        <div className="cancel-box">
          <RxCross2 className="rxCross" onClick={() => closeEdit(false)} />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
            <label>Type Of Rental Place</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInput}
            />
            <label>People Living</label>
            <input
              type="text"
              name="people"
              value={formData.people}
              onChange={handleInput}
            />
            <label>Address</label>
            <input
              type="text"
              name="lease"
              value={formData.lease}
              onChange={handleInput}
            />
            <label>Lease Period</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInput}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditExistingTenant;
