import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePost = () => {
  const{id}=useParams()
  let naviate=useNavigate()
  console.log(id);
  let[values,setValues]=useState({
    name:"" ,
    email:"",
    password:"",
  })

  useEffect(()=>{
    axios.get("http://localhost:3000/users/"+id).then(res=>setValues(res.data)).catch(err=>console.log(err))
  },[])
  let handleUpdate=(e)=>{
      e.preventDefault()
      console.log(values);
      axios.put("http://localhost:3000/users/"+id,values).then(res=>{
        console.log(res)
        naviate("/allpost")
    })
  }
  return (
    <div className="cont">
      <h2>Update User</h2>
      <form action="" onSubmit={handleUpdate}>
      <label htmlFor="name">Name</label><input id="name" required value={values.name} name="name" type="text"  onChange={e=>setValues({...values,name:e.target.value})}/>
      <label htmlFor="email">Email</label><input id="email" required value={values.email} name="email" type="email" onChange={e=>setValues({...values,email:e.target.value})} />
      <label htmlFor="psw">Password</label><input id="psw" required value={values.password} name="password" type="password"  onChange={e=>setValues({...values,password:e.target.value})}/>
      <button>update</button>
      </form>
    </div>
    
  )
}

export default UpdatePost