import React from 'react'
import Sidebar from './components/Sidebar'

const Profile = () => {
  return (
    <>
     <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-9">
          user
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Profile