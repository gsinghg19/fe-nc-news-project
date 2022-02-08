import { useState, useEffect } from "react";
import { getAllUsers } from "../utils/api";
import UserCard from "./userCard";

const UserList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUsers()
      .then((usersData) => {
        console.log(usersData);
        setUsers(usersData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUsers]);

  return (
    <div className="usersList">
      {users.map((user) => (
        <UserCard key={user.username} user={user}></UserCard>
      ))}
    </div>
  );
};

export default UserList;
