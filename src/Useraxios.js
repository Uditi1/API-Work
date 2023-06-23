import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDataaxios from "./Components/UserDataaxios";

const Useraxios = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setMydata(res.data);
      console.log("here is axios get", res);
    });
  });

  return (
    
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Address</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <UserDataaxios users={mydata} />
    //     </tbody>
    //   </table>
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
      <UserDataaxios users={mydata} />
    </tbody>
  </table>
  
  );
};

export default Useraxios;
