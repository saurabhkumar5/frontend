
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function User() {

    const [users,setUser] = useState([{
        Name: "saurabh", Email: "sk@gmail.com", Age:20
    }])
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
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            {/* <button>update</button> */}
                            <Link to="/update" className='btn btn-success'>Edit</Link>
                            <button>delete</button>
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