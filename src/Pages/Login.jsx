import React from "react";
import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2 ">
        <LoginForm />
      </div>

      <div className="relative items-center justify-center hidden w-1/2 h-full bg-gray-200 lg:flex">
        <div className="rounded-full w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce" />

        <div className="absolute bottom-0 w-full h-1/2 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default Login;
