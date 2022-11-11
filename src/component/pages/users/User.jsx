import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const User = () => {
  const [users, setusers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  let { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setusers(result.data);
  };

  return (
    <>
      <div className="container">
        <Link className="btn btn-primary mt-5" to="/">
          Back to Home
        </Link>
        <h1 className="display-4">User Id : {users.id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name : {users.name}</li>
          <li className="list-group-item">user Name : {users.username}</li>
          <li className="list-group-item">email : {users.email}</li>
          <li className="list-group-item">phone : {users.phone}</li>
          <li className="list-group-item">website : {users.website}</li>
        </ul>
      </div>
    </>
  );
};

export default User;
