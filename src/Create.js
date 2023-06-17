import React from 'react'
import { useState} from "react";
import { userActions } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const users = useSelector((state)=>state.users);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.addUser({
      id: users[users.length-1].id +1, name, email
      }))
      navigate("/")
    
  };



  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='enter name' onChange={handleNameChange}></input>
          </div>
          <div>
            <label htmlFor='name'>Email:</label>
            <input type='text' name='name' className='form-control' placeholder='enter email' onChange={handleEmailChange}></input>
          </div>
          <br/>
          <button>Submit</button>
        </form>

      </div>
      
    </div>
  )
}

export default Create