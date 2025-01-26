import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddUser from "./Pages/AddUser.jsx";
import UpdateUser from "./Pages/UpdateUser.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";

import UserDetails from "./Pages/UserDetails.jsx";
import Contact from "./Pages/Contact.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AddUser",
    element: <AddUser />,
  },
  {
    path: "/UserDetails",
    element: <UserDetails />,
  },
  {
    path: "/UserDetails/:id",
    element: <UpdateUser />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
