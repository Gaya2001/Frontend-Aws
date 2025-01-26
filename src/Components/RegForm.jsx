import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then(() => {
        alert("Register Success");
        navigate("/UserDetails");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((res) => res.data);
  };

  return (
    <div className="px-10 py-2 bg-white border-2 rounded-3xl border-gra">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>

      <p className="mt-4 text-lg font-medium text-gray-500">
        Welcome back! Please enter your details.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mt-3 ml-1 text-lg font-medium"> Enter Your Name</div>
        <div className="gap-4 ">
          <div className="">
            <input
              name="name"
              onChange={handleInputChange}
              value={user.name}
              required
              className="w-full p-4 bg-transparent border-2 border-gray-100 rounded-xl"
              placeholder="Name "
              type="text"
            />
          </div>
        </div>

        <div className="mt-3 ml-1 text-lg font-medium"> Email</div>
        <div className="mt-1">
          <input
            name="email"
            onChange={handleInputChange}
            value={user.email}
            required
            className="w-full p-4 bg-transparent border-2 border-gray-100 rounded-xl"
            placeholder="Email "
            type="email"
          />
        </div>

        <div className="mt-3 ml-1 text-lg font-medium"> Password</div>
        <div className="mt-1">
          <input
            name="password"
            onChange={handleInputChange}
            value={user.password}
            required
            className="w-full p-4 mb-2 bg-transparent border-2 border-gray-100 rounded-xl"
            placeholder="Password "
            type="password"
          />
        </div>

        <div className="flex flex-col mt-2 gap-y-4">
          <button
            type="submit"
            className="hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-1">
        <p className="text-base font-medium ">Already registered member</p>
        <Link to="/login">
          <button className="ml-2 text-base font-medium text-violet-500">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RegForm;
