import React, { useEffect, useState } from "react";
import Navbar from "../Components/Nav/Navbar";
import axios from "axios";
import User from "../Pages/User";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    //console.log(response.data); // Log the response data to check its structure
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [] }; // Return an empty array on error
  }
};

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log("Fetched data:", data); // Log the full data object
      if (data && data.Users) {
        setUsers(data.Users);
      } else {
        console.warn("Users field is missing in the response:", data);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserDetails;
