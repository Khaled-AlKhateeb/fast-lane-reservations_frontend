/* eslint-disable */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle } from "../../redux/apiCalls";
import "./styles/addVehicle.css";

const AddVehicle = () => {
  const [image, addImage] = useState("");
  const [name, addName] = useState("");
  const [model, addModel] = useState("");
  const [year, addYear] = useState("");
  const [horsePower, addHorsePower] = useState("");
  const [price, addPrice] = useState("");
  const [description, addDescription] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const addVehicleForm = document.getElementById("addVehicleForm");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    addVehicle(
      dispatch,
      {
        image,
        name,
        model,
        year,
        horse_power: horsePower,
        price,
        description,
        user_id: currentUser.user.id,
      },
      () => setShowSuccessMessage(true),
    );
    const inputs = addVehicleForm.querySelectorAll("input");
    for (const input of inputs) {
      input.value = "";
    }
    const textareas = addVehicleForm.querySelectorAll("textarea");
    for (const textarea of textareas) {
      textarea.value = "";
    }
  };

  return (
    <div className='main-container'>
      <h1>Add a Vehicle</h1>
      <form
        id='addVehicleForm'
        className='form-container'
        onSubmit={handleAdd}
      >
        <div className='input-container'>
          <label htmlFor='Image'>Image</label>
          <input
            className='input'
            name='Image'
            type='text'
            onChange={(e) => addImage(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor='Name'>Name</label>
          <input
            className='input'
            name='Name'
            type='text'
            onChange={(e) => addName(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor='Model'>Model</label>
          <input
            className='input'
            name='Model'
            type='text'
            onChange={(e) => addModel(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor='Year'>Year</label>
          <input
            className='input'
            name='Year'
            type='number'
            onChange={(e) => addYear(e.target.value)}
            min={1950}
            max={2023}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor='HorsePower'>Horse Power</label>
          <input
            className='input'
            name='HorsePower'
            type='number'
            onChange={(e) => addHorsePower(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor='Price'>Price</label>
          <input
            className='input'
            name='Price'
            type='number'
            onChange={(e) => addPrice(e.target.value)}
            min={1}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor='Description'>Description</label>
          <textarea
            className='input'
            name='Description'
            type='text'
            onChange={(e) => addDescription(e.target.value)}
            max={250}
            required
          />
        </div>
        <button
          className='submit-btn'
          type='submit'
        >
          Add
        </button>
      </form>
      {showSuccessMessage && (
        <p id='successMessage'>Vehicle added successfully!</p>
      )}
    </div>
  );
};

export default AddVehicle;
