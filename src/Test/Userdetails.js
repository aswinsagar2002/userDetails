import React from 'react'
import '../Test/Userdetail.css'
import { useLocation } from 'react-router-dom'

function Userdetails() {

    
        const location = useLocation();
        const { user } = location.state || {};  
      


    return (
        <div>
      <h4>User Details</h4>
      <div className='mainborder'>
        <h3>{user?.name}</h3>

        <div className='contentflex'>
          <div>
            <p>Name</p>
            <input type="text" placeholder={user?.name} />
          </div>
          <div>
            <p>Email</p>
            <input type="email" placeholder={user?.email} />
          </div>
        </div>

        <h6>Address</h6>

        <div className='contentflex'>
          <div>
            <p>Street</p>
            <input type="text" />
          </div>
          <div>
            <p>Suit</p>
            <input type="text" />
          </div>
        </div>

        <div className='contentflex'>
          <div>
            <p>City</p>
            <input type="text" />
          </div>
          <div>
            <p>Zip Code</p>
            <input type="text" />
          </div>
        </div>

        <div className='contentflex'>
          <div>
            <p>Phone Number</p>
            <input type="text" placeholder={user?.phone} />
          </div>
          <div>
            <p>Website</p>
            <input type="text" />
          </div>
        </div>

        <h6>Company</h6>
        <div className='contentflex'>
          <div>
            <p>Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Catch Phrase</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Userdetails