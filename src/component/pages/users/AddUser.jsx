import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
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

  //   DATA POST
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3003/users", users)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary">Add User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
