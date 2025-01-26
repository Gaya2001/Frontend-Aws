import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login Success");
        navigate("/UserDetails");
      } else {
        alert("Login error");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const sendRequest = async () => {
    const response = await axios.post("http://localhost:5000/login", {
      email: user.email,
      password: user.password,
    });
    return response.data;
  };

  return (
    <div className="px-10 py-20 bg-white border-2 border-gray-200 rounded-3xl">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="mt-4 text-lg font-medium text-gray-500">
        Welcome back! Please enter your details.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <label className="text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
            placeholder="Enter your Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-8">
          <label className="text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center justify-between mt-8">
          <div>
            <input id="remember" type="checkbox" />
            <label className="ml-2 text-base font-medium" htmlFor="remember">
              Remember Me
            </label>
          </div>
          <button className="text-base font-medium text-violet-500">
            Forgot password
          </button>
        </div>

        <div className="flex flex-col mt-8 gap-y-4">
          <button
            type="submit"
            className="hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
          >
            Sign in
          </button>

          <div className="flex items-center justify-center mt-8">
            <p className="text-base font-medium">Don't have an account? </p>
            <Link to="/Register">
              <button className="ml-2 text-base font-medium text-violet-500">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
