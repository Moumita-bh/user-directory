import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;

