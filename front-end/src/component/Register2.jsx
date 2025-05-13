import axios from "axios";
import React from "react";
import { useState } from "react";

const Register2 = () => {
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const submit = (async()=>{
    // console.log(username);
    // console.log(email);
    // console.log(password);
    try {
       await axios.post('http://localhost:3000/register',{
         username,
         password,
         email
        }).then((res)=>{
            console.log(res);
        })
        console.log("Register successfully");
    } catch (error) {
        console.log(`something went wrong : ${error}`);
    }
  })
  return (
    <div style={{width: "250px", height: "300px", border: "2px solid white", justifyContent:"center", textAlign:"center"}}>
        <h1 style={{backgroundColor:"blue"}}>Register</h1>
      <div style={{marginBottom:"50px"}}>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" onChange={(e) => setPassword(e.target.value)} /><br/>
        <button onClick={submit} style={{cursor:"pointer"}}>signUp</button>
      </div>
    </div>
  );
};

export default Register2;
