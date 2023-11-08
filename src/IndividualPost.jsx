import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios'

const IndividualPost = () => {
  let[data,setData]=useState([])
  let{id}=useParams()
  console.log(id);

  useEffect(()=>{
    axios.get("http://localhost:3000/users/"+id).then(res=>setData(res.data)).catch(err=>console.log(err))
  },[])

  return (
    <div className="individualpost-cont">
      <div className="card">
          <div className="data">Name: {data.name}</div>
          <div className="data">Email: {data.email}</div>
          <div className="data">Password: {data.password}</div>
          <div className="btnmain">
            <Link  className="link" to={`/update/${id}`}>Update</Link>
            <Link  className="link" to="/">Back</Link>
          </div>
      </div>
    </div>
  )
}

export default IndividualPost