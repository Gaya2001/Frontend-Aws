import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const [input, setInput] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setInput(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Handle error or set default values
      }
    };

    fetchUser();
  }, [id]);

  const sendRequest = async () => {
    try {
      await axios.put(`http://localhost:5000/users/${id}`, {
        name: String(input.name),
        gmail: String(input.gmail),
        age: Number(input.age),
        address: String(input.address),
      });
      // Optionally handle response if needed
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error
    }
  };

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

  return (
    <div>
      <h1 className=" uppercase  underline text-4xl font-bold  p-2 relative left-56 text-gray-900">
        Update User Details{" "}
      </h1>

      <form onSubmit={handleSubmit} className=" m-10 font-bold text-3xl">
        <label htmlFor="name">Name</label>
        <br />
        <input
          onChange={handleChange}
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

export default UpdateUser;
