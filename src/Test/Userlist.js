import React, { useState } from 'react'
import '../Test/User.css'
import { Link, useNavigate } from 'react-router-dom'
import Userdetails from './Userdetails'


function Userlist() {
    const navigate = useNavigate();


    const users = [
      { name: 'Leanne Graham', email: 'Leane.Graha.@example.com', phone: '+91 6829729923',  },
      { name: 'John', email: 'John@example.com', phone: '+91 6829729923' },
      { name: 'Mark', email: 'Mark@example.com', phone: '+91 6829729923' },
      { name: 'Steve', email: 'Steve@example.com', phone: '+91 6829729923' },
      { name: 'Kevin', email: 'Kevin@example.com', phone: '+91 6829729923' },
      { name: 'Bell', email: 'Bell@example.com', phone: '+91 6829729923' },
      { name: 'Lave', email: 'Lave@example.com', phone: '+91 6829729923' },
      { name: 'Minn', email: 'Minn@example.com', phone: '+91 6829729923' },
      { name: 'Grey', email: 'Grey@example.com', phone: '+91 6829729923' },
      { name: 'Mey', email: 'Mey@example.com', phone: '+91 6829729923' },
    ];
  
  
    const handleEdit = (user) => {
      navigate('/details', { state: { user } });
    };
  


    return (
        <div>
      <div className='mainborder'>
        <div className='cardflex'>
          {users.map((user, index) => (
            <div className='cardborder' key={index}>
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <p className="card-text">{user.phone}</p>
                  <button
                    type="button"
                    className="btn btn-light editbutton"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Userlist