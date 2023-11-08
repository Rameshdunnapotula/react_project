import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  let [user,setUser]=useState({
    name :"",
    email:"",
    password:"",
  })
  let navigate=useNavigate()
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user);
    axios.post("http://localhost:3000/users",user).then(res=>{
      console.log(res);
      navigate("/allpost")
    })
  }
  return (
    <div className="cont">
      <h2>Add user</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={e=>setUser({...user,name:e.target.value})} placeholder="Enter user name" required/> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={e=>setUser({...user,email:e.target.value})} placeholder="Enter Email" required /> <br />
        <label htmlFor="psw">Password:</label>
        <input type="password" id="psw" onChange={e=>setUser({...user,password:e.target.value})} placeholder="Enter password" required/> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost