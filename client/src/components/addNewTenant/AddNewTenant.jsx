import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const addNewTenant = ({ closeBox, handleAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    noOfPeople: "",
    lease: "",
    address: "",
  });

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(formData);
    closeBox();
  };

  return (
    <div>
      <div>
        <RxCross2 className="rxCross" onClick={() => closeBox(false)} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleData}
          />
          <label>Type Of Rental Place</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleData}
          />
          <label>People Living</label>
          <input
            type="number"
            name="noOfPeople"
            value={formData.noOfPeople}
            onChange={handleData}
          />
          <label>Address</label>
          <input
            type="text"
            name="lease"
            value={formData.lease}
            onChange={handleData}
          />
          <label>Lease Period</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleData}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default addNewTenant;
