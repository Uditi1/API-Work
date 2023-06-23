import React, { useEffect, useState } from "react";
import UserData from "./Components/UserData";

const Userapi = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [user, setUser] = useState([]);

  const UserCall = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      if (data.length > 0) {
        setUser(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    UserCall(API);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={user} />
      </tbody>
    </table>
  );
};

export default Userapi;
