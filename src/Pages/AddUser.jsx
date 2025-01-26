import React, { useState } from "react";
import Navbar from "../Components/Nav/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await sendRequest();
    navigate("/UserDetails");
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      name: String(input.name),
      gmail: String(input.gmail),
      age: Number(input.age),
      address: String(input.address),
    });
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="m-10 font-bold text-3xl">
        <label htmlFor="name">Name</label>
        <br />
        <input
          onChange={handleChange}
          autoComplete="off"
          className="border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md shadow-sm"
          type="text"
          name="name"
          value={input.name}
          required
        />
        <br />
        <br />
        <label htmlFor="gmail">Gmail</label>
        <br />
        <input
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md shadow-sm"
          type="email"
          name="gmail"
          value={input.gmail}
          required
        />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md shadow-sm"
          type="text"
          name="age"
          value={input.age}
          required
        />
        <br />
        <br />
        <label htmlFor="address">Address</label>
        <br />
        <input
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md shadow-sm"
          type="text"
          name="address"
          value={input.address}
          required
        />
        <br />
        <br />
        <button className="bg-green-700 ml-28 rounded-md p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
