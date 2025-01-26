import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function User(props) {
  const { _id, name, gmail, age, address } = props.user;
  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      navigate("/UserDetails"); // Navigate to UserDetails page after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle error appropriately, e.g., show an error message
    }
  };

  return (
    <div className="border-2">
      <h1 className="p-2 mt-2 text-3xl font-bold">User Display</h1>

      <h1 className="px-2 text-lg font-bold">ID: {_id}</h1>
      <h1 className="px-2 text-lg font-bold">Name: {name}</h1>
      <h1 className="px-2 text-lg font-bold">Gmail: {gmail}</h1>
      <h1 className="px-2 text-lg font-bold">Age: {age}</h1>
      <h1 className="px-2 text-lg font-bold">Address: {address}</h1>

      <button
        onClick={deleteHandler}
        className="p-2 m-2 font-bold bg-red-500 rounded-sm"
      >
        Delete
      </button>
      <Link to={`/UserDetails/${_id}`}>
        <button className="p-2 m-2 font-bold bg-blue-500 rounded-sm">
          Update
        </button>
      </Link>
    </div>
  );
}

export default User;
