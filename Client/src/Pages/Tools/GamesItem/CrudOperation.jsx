import React, { useContext, useEffect, useState } from "react";
import './GamesStyle/CrudOperation.css';
import { EscomContext } from "../../../Context/escomContext";

const CrudOperation = () => {
  const [addUser, setAddUser] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);
  const [backendData, setBackendData] = useState([]);
  const [crudUser, setCrudUser] = useState({ name: '', email: '', username: '', userId: '' });
  const [errMessage, setShowErrorMessage] = useState('');
  const [succMessage, setSuccMessage] = useState('')
  const { backend_url } = useContext(EscomContext);

  const resetCrudUser = () => setCrudUser({ name: '', email: '', username: '', userId: '' });

  const handleAddUserToggle = () => {
    if (!addUser) {
      resetCrudUser(); // Clear fields when adding a new user
      setUserUpdate(false); // Ensure it's in "Add" mode
    }
    setAddUser(!addUser); // Toggle the "Add User" form visibility
  };

  const newUser = async () => {
    const response = await fetch(`${backend_url}/api/crud/add-user`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crudUser),
    });

    const data = await response.json();
    if (!data.success) setShowErrorMessage(data.message);
    else {
      fetchAllUser(); // Refresh user list
      setAddUser(false); // Close the "Add User" form
    }
  };

  const fetchAllUser = async () => {
    const response = await fetch(`${backend_url}/api/crud/fetch-user`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    if (!data.success) setShowErrorMessage(data.message);
    else setBackendData(data.allUser);
  };

  const deleteUser = async (userId) => {
    const response = await fetch(`${backend_url}/api/crud/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });

    const data = await response.json();
    if (!data.success) setShowErrorMessage(data.message);
    else setBackendData(data.allUser);
  };

  const updateUser = (userId) => {
    const user = backendData.find((item) => item._id === userId);
    if (user) {
      setCrudUser({ name: user.name, email: user.email, username: user.username, userId });
      setAddUser(true); // Open the "Add User" form for editing
      setUserUpdate(true); // Set to "Update" mode
    }
  };

  const submitUpdate = async () => {
    const response = await fetch(`${backend_url}/api/crud/update-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ crudUser }),
    });

    const data = await response.json();
    if (!data.success) setShowErrorMessage(data.message);
    else {
      setBackendData(data.allUser);
      setAddUser(false); // Close the "Add User" form after update
    }
  };

  useEffect(() => {
    if (errMessage) {
      const timer = setTimeout(() => {
        setShowErrorMessage('');
      }, 3000);
  
      return () => clearTimeout(timer); // Cleanup timer on component unmount or re-render
    }
  }, [errMessage]); // Run effect whenever `errMessage` changes
  
  useEffect(() => {
    fetchAllUser(); // Fetch users on component mount
  }, []); // Run once when the component is mounted
  

  return (
    <>
      <div className="admin-actions">
        <div className="error-message">
          {!errMessage ? "" : <p>{errMessage}</p>}
          {!succMessage? "" : <p>{succMessage}</p>}
        </div>
        <div className="add-user">
          {!addUser ? (
            <button onClick={handleAddUserToggle}>Add User</button>
          ) : (
            <button onClick={handleAddUserToggle} className="close">Close</button>
          )}
        </div>
        {addUser && (
          <div className="new-user">
            <input
              value={crudUser.name}
              onChange={(e) => setCrudUser({ ...crudUser, name: e.target.value })}
              type="text"
              placeholder="Full Name"
            />
            <input
              value={crudUser.email}
              onChange={(e) => setCrudUser({ ...crudUser, email: e.target.value })}
              type="text"
              placeholder="Email"
            />
            <input
              value={crudUser.username}
              onChange={(e) => setCrudUser({ ...crudUser, username: e.target.value })}
              type="text"
              placeholder="User name"
            />
            {!userUpdate ? (
              <button className="add" onClick={newUser}>Submit</button>
            ) : (
              <button className="add" onClick={submitUpdate}>Update</button>
            )}
          </div>
        )}
      </div>
      <div className="crud-operation">
        <div className="header-body">
          <div className="name">Name</div>
          <div className="email">Email</div>
          <div className="user-name">User Name</div>
          <div className="action">Actions</div>
        </div>
        {backendData.map((item) => (
          <div className="content-body" key={item._id}>
            <div className="name">{item.name}</div>
            <div className="email">{item.email}</div>
            <div className="user-name">{item.username}</div>
            <div className="action">
              <button onClick={() => updateUser(item._id)}>Updt</button>
              <button onClick={() => deleteUser(item._id)}>Dlt</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CrudOperation;