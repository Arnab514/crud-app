import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'


const Update = () => {

    const[id , setId] = useState(0)
    const[name , setName] = useState("")
    const[email , setEmail] = useState("")
    const Navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...", id);
        axios
          .put(`https://643434b31c5ed06c9591e32e.mockapi.io/Crud-app/${id}`, 
          {
            name: name,
            email: email,
          })
          .then(() => {
            Navigate("/read")
          });
      };

    return (
        <>
            <div className="d-flex justify-content-between m-3">  
                <h2>Update</h2>
                <Link to = '/read'>
                    <button className="btn btn-primary">Back</button>
                </Link>
            </div>      
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <button type="update" className="btn btn-success" 
                onClick={handleUpdate}>Update</button>
            </form>
        </>
    )
}

export default Update
