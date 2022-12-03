import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMessage, faPerson, faPersonRifle, faPlus, faSignOut, faUser, } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({userName}) => {
  console.log(userName);
  return (
    <>
      <div className="offcanvas offcanvas-start show" data-bs-backdrop="false" data-bs-scroll="true" style={{visibility:"visible", width: '335px'}} id="offcanvasNavbar">
          <div className="offcanvas-header">
          <div className="nav-Box pt-3"><img src="./images/nav-text-logo.jpg" alt="" /></div>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
              <Link className="nav-link mb-1" href={"/"+userName}> <FontAwesomeIcon className='mx-2' icon={faHouse}/> Home</Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" aria-current="page" href="/messages"><FontAwesomeIcon className='mx-2' icon={faMessage}/> Messages</Link>
              </li>
              <li className="nav-item my-2">
                <a className="nav-link"  data-bs-toggle="modal" data-bs-target="#PostModal"><FontAwesomeIcon className='mx-2' icon={faPlus}/> Post</a>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" aria-current="page" href={"/"+userName}><FontAwesomeIcon className='mx-2' icon={faUser}/> {userName}</Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" aria-current="page" href="/"><FontAwesomeIcon className='mx-2' icon={faSignOut}/> Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Modal */}

<div className="modal fade" id="PostModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h5 className="modal-title" id="exampleModalLabel">Create New Post</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body my-5 py-5">
      <div className="upload-box d-flex justify-content-center flex-column align-items-center">
        <img className='w-25' src="./images/upload-icon.jpg" alt="" />
        <p className='text-center'>Choose Photos and Videos here</p>
        <div class="upload-btn-wrapper">
  <button class="btn btn-primary">Select from your computer</button>
  <input type="file" className='upload-input' name="myfile" />
</div>
      </div>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
        
    </>
  )
}

export default Sidebar