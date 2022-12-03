import React from 'react'
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import {useRouter} from "next/router"
const Home = () => {
  const router = useRouter();
  console.log(router.query.user);
  const userName = router.query.user;
  return (
    <>
       <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar userName={userName}/>
        </div>
        <div className="col-md-9">
        <Card/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home