import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {Link, Navigate, useNavigate}from "react-router-dom"

const AllPost = () => {
  let[data,setData]=useState([]);

  

useEffect(()=>{
    axios.get("http://localhost:3000/users").then(res=>setData(res.data)).catch(err=>console.log(err) )
},[])
let navigateTo=useNavigate()
const deletePost=id=>{
  axios.delete("http://localhost:3000/users/"+id)
      
  window.location.assign("http://localhost:3001/allpost")
  // navigateTo("/allpost")

}

  return (
    <div className="allpost-cont">

      <div className="allpost-subcont">
        <table>
          <thead>
            <tr className="fixed-rows"><th colSpan={7} id="table_name">List Of Users</th></tr>
            <tr ><th colSpan={7} id="link-row"><Link to="/" id="link">Add user</Link></th></tr>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((dataArray,index)=>(
                <tr key={index}>
                  <td>{dataArray.id}</td>
                  <td>{dataArray.name}</td>
                  <td>{dataArray.email}</td>
                  <td>{dataArray.password}</td>
                  <td><Link className="link" to={`/individual/${dataArray.id}`}>View</Link></td>
                  <td><Link className="link" to={`/update/${dataArray.id}`}>update</Link></td>

                  {/* in onClick( ) if we want to pass any function with argument we have to use arrow function 
                   otherwise it will go infinite loop */}
                  <td><button onClick={()=>deletePost(dataArray.id)}>delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllPost