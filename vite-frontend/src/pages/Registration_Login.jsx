// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RegistrationForm } from "../components/RegistrationFormComponent/RegistrationFormComponent"
import { JWTLoginForm } from "../components/JWTLoginFormComponent/JWTLoginForm";

function Registration_Login() {
  {/*TODO WIP:Relocate CONDITIONAL logic to display registration form here by passing up register user state in function param*/}

  const showRegistrationForm = (registeredUserState) => {
    return registeredUserState
  }

  console.log(showRegistrationForm());

  return (
    showRegistrationForm ? <RegistrationForm /> :
    <JWTLoginForm onUnregisteredUser={showRegistrationForm}/>
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