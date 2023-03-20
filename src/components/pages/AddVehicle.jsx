/* eslint-disable */
import React from "react";
import "./styles/addVehicle.css";

const AddVehicle = () => (
  
  <div className='main-container'>
    <h1>Add a Vehicle</h1>
    <form
      className='form-container'
      action=''
    >
      <div className="input-container">
        <label htmlFor='Image'>Image</label>
        <input
          className="input"
          name='Image'
          type='text'
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor='Name'>Name</label>
        <input
          className="input"
          name='Name'
          type='text'
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor='Model'>Model</label>
        <input
          className="input"
          name='Model'
          type='text'
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor='Year'>Year</label>
        <input
          className="input"
          name='Year'
          type='number'
          min={1950}
          max={2023}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor='HorsePower'>Horse Power</label>
        <input
          className="input"
          name='HorsePower'
          type='number'
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor='Price'>Price</label>
        <input
          className="input"
          name='Price'
          type='number'
          min={1}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor='Description'>Description</label>
        <textarea
          className="input"
          name='Description'
          type='text'
          max={250}
          required
        />
      </div>
      <button className="submit-btn" type="submit">Add</button>
    </form>
  </div>
);

export default AddVehicle;
