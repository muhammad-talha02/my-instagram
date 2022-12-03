import React, { useState, useEffect } from 'react'
import Link from "next/link"
const Login = () => {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("");
    const [disable_btn, setdisable_btn] = useState("disabled");
    useEffect(() => {
        if(userId !== "" && userPassword !=="" ){
            setdisable_btn("")
        }
        console.log("useeffect");
    })
    
  return (
    <>
    <div className="login-Box">
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-2"><img src="./images/insta_login.png" alt="" /></div>
            <div className="col-md-4 border rounded" id='login-Card'>
                <div className="text_logo-Box"><img src="./images/text-logo.png" alt="" /></div> <br />
                <div className="form-box">
                    <form action="" className='col-9 mx-auto'>
                        <input type="text" value={userId} onChange={(e)=> setUserId(e.target.value)} className="form-control log_input mb-2" placeholder='username/Email'/>
                        <input type="password" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} className="form-control log_input" placeholder='password' />
                        <Link href={"/"+userId} id='login-Btn' className={`btn btn-primary mt-3 w-100 ${disable_btn}`} disabled>Log in</Link>
                    </form>
                    {/* <p className='mx-auto col-6'><span><hr /> <span className='OR-text'>OR</span> <hr /></span></p> */}
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login