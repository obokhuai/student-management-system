import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userActions } from './userReducer';




// 
function Update() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(user => user.id == id);

  // Add a conditional check to prevent errors when existingUser is empty
  // const { name, email } = existingUser.length ? existingUser[0] : { name: '', email: '' };
  const { name, email } = existingUser[0]
  const [updatename, setUpdateName] = useState(name);
  const [updateemail, setUpdateEmail] = useState(email);

  const handleNameChange = (e) => {
    setUpdateName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUpdateEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userActions.editUser({
        id: id,
        name: updatename,
        email: updateemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={handleNameChange}
              value={updatename}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={handleEmailChange}
              value={updateemail}
            ></input>
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update