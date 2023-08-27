import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

const [data,setData] = useState([]);
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const getData = () =>{
  axios.get("https://confused-crab-petticoat.cyclic.cloud/signup")
  .then((res)=>{
    console.log(res.data)
    setData(res.data)})
    .catch((err)=>console.log(err))
}


 const handleSubmit = (e) =>{
    e.preventDefault();
    data.forEach((ele)=>{
      if(ele.email !== email){
        alert("Invalid Email.");
      }else if(ele.email==email && ele.password !== password){
        alert("Invalid  Password! Please try again.");
      }
      else{
        alert("Login Successful.");
      }
    })
 }

 useEffect(()=>{
  getData();
 },[])

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
      <h1>This is login page</h1>
      <form onSubmit={handleSubmit}>
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

export default Login;
