import "./App.css";
import { useEffect, useState } from "react";
import UserData from "./UserData";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [user, setUser] = useState([]);

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUser(data);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
