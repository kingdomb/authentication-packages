// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { RegistrationForm } from "../components/RegistrationFormComponent/RegistrationFormComponent"
import { JWTLoginForm } from "../components/JWTLoginFormComponent/JWTLoginForm";

function Registration_Login() {

  const [registerUser, setRegisteredUser] = useState(false)

  const showRegistrationForm = (registeredUserState) => {
    setRegisteredUser(registeredUserState)
  }

  return (
    registerUser ? <RegistrationForm /> :
    <JWTLoginForm onUnregisteredUser={showRegistrationForm} />
  )
}

export default Registration_Login

{
  // <form action="submit" method="post" className="login-form">
    //   <div className="input-container">
    //     <label htmlFor="email" >Email</label>
    //     <input type="text" />
    //   </div>
    //   <div className="input-container">
    //     <label htmlFor=""></label>
    //     <input type="text" />
    //   </div>
    // </form>
}