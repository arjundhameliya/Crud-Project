import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [users, setusers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = users;
  const onInputChange = (e) => {
    setusers({ ...users, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  //   DATA POST
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, users);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setusers(result.data);
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                onChange={(e) => onInputChange(e)}
                value={name}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                onChange={(e) => onInputChange(e)}
                value={username}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                onChange={(e) => onInputChange(e)}
                value={email}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                onChange={(e) => onInputChange(e)}
                value={phone}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                onChange={(e) => onInputChange(e)}
                value={website}
              />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
