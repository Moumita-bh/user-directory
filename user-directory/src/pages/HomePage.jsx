import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  const context = useContext(UserContext);

  console.log("Context value in HomePage:", context); // Add this for debugging

  if (!context) {
    console.error("UserContext is not available. Ensure UserProvider is set up correctly.");
    return <div>Error: UserContext is not available.</div>;
  }

  const { users, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
