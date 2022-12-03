import React from 'react'
import Sidebar from './components/Sidebar'
import Card from './components/Card'

const Messages = () => {
  return (
    <>
     <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-9">
<Card/>        </div>
      </div>
    </div>
    </>
  )
}

export default Messages