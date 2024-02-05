
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {

    const [users,setUser] = useState([])
        
            useEffect(()=>{
                axios.get('http://localhost:8000')
                .then((res)=>setUser(res.data))
                .catch((err)=>console.log(err))
            },[]) 
        const surajDelete = (kuchbhi)=>{
                  axios.delete('http://localhost:8000/deleteUser/'+kuchbhi)
                  .then(res => window.location.reload())
        }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
       <div className='w-50 bg-primary rounded p-3'>
       <Link to="/create" className='btn btn-success'>Add +</Link>
       <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                         return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            {/* <button>update</button> */}
                            <Link to="/update" className='btn btn-success'>Edit</Link>
                            <button className='btn btn-danger' onClick={(e)=>surajDelete(user._id)}>delete</button>
                         </tr>
                    })
                }
            </tbody>
        </table>
       </div>
    </div>
  )
}

export default User

