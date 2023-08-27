import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [email,setEmail] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let obj={email,userName,password};
        console.log(obj);
    }

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "blue",
          padding: ".5rem 0",
        }}
      >
        <Link to="/">
          <p
            style={{ fontSize: "20px", color: "white", textDecoration: "none" }}
          >
            Home
          </p>
        </Link>
        <Link to="/login">
          <p
            style={{ fontSize: "20px", color: "white", textDecoration: "none" }}
          >
            Login
          </p>
        </Link>
        <Link to="/signup">
          <p
            style={{ fontSize: "20px", color: "white", textDecoration: "none" }}
          >
            Signup
          </p>
        </Link>
      </nav>
      <h1>This is signup page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
};

export default Signup;
