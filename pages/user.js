import React from 'react'
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck, faCog, faHouse, faMessage, faPerson, faPersonRifle, faPlus, faSignOut, faToolbox, faUser, } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <>
     <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-6 offset-1">
          <div className="row">
<div className="col-md-5"><img src="./images/user-profile.jpg" alt=""  className='profile-img'/></div>
<div className="col-md-6">
  <div><span className='h4'>mtalha892</span><button className='d-inline-block ms-5 border'>Edit profile</button> <FontAwesomeIcon icon={faCog}/> </div>
  <div className="statistic">
    <span>12 Posts</span> <span>30 Followers</span> <span>25 following</span>
  </div>
</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Profile