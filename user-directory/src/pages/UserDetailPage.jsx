import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const user = users.find((user) => user.id.toString() === id);

  if (!user) return <div>User not found!</div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 hover:underline">
        Go Back
      </button>
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetailPage;
