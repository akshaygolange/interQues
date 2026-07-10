import React, { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setErrors(null);
      const response = await fetch("https://dummyjson.com/users?limit=10");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      console.log("data ->>", data.users);
      setUsers(data.users); // DummyJSON returns { users: [...], total, skip, limit }[web:1][web:12]
    } catch (e) {
      console.log(e);
      setErrors(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading... data</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const headers = users.length ? Object.keys(users[0]) : [];

  return (
    <>
      <UsersTable users={users} />

      {users.length > 0 && (
        <div>
          <h3>Dynamic Users Table</h3>
          <table
            border={1}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr>
                {headers.map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f9f9f9")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {headers.map((key) => {
                    const value = user[key];
                    const displayValue =
                      typeof value === "object" && value != null
                        ? JSON.stringify(value)
                        : String(value);

                    return (
                      <td key={key}>
                        {displayValue}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default App;