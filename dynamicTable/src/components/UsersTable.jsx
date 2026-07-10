import React from "react";

const UsersTable = ({ users }) => {
  console.log(users, "from userTable");
  if (!users || users.length === 0) {
    return <p>No Users Found.</p>;
  }

  return (
    <div>
      <h2>Users table</h2>

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
            <th>ID</th>
            <th>firstName</th>
            <th>City</th>
            <th>Address</th>
            <th>Country</th>
            <th>Company title</th>
            <th>Company Name</th>
            <th>Company PostalCode</th>
            <th>Company State</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, firstName, address = {}, company = {} } = user;

            const {
              city = "",
              country = "",
              address: streetAddress = "",
            } = address;

            const {
              title = "",
              name = "",
              address: companyAddress = {},
            } = company;

            const { postalCode = "", state = "" } = companyAddress;

            return (
              <tr
                key={id}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9f9f9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{city}</td>
                <td>{streetAddress}</td>
                <td>{country}</td>
                <td>{title}</td>
                <td>{name}</td>
                <td>{postalCode}</td>
                <td>{state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
