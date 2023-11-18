// MODULES
import { useState } from 'react'
// STYLES
import './JWTLoginForm.scss';

function JWTLoginForm () {
  const [authValues, setAuthValues] = useState({
    username: '',
    password: '',
  })



  const handleInputChange = (e) => {
    const updatedValues = { ...authValues, [e.target.name]: e.target.value };
    setAuthValues(updatedValues);
    console.log(updatedValues); // Log the updated state
  };

  const authenticateUser = e => {
    e.preDefault()
    console.log(authValues);
    // console.log(e.target[0].value)
    // console.log(e.target.elements.username.value)
    // console.log(e.target.username.value)
    // console.log(this.inputNode.value)
  }

  

  return (
    <div className='form-container'>
      <h1 className='form-header'>Log In</h1>
      <h5 className='form-label'>JWT Login OR Biometric Authentication</h5>
      <form onSubmit={authenticateUser} className='form' method='post'>
        <div className='input_control'>
          <input onChange={handleInputChange} className='nameField' type='text' value={authValues.username} name='username' placeholder='Username' autoComplete='username'></input>
          {/* <img src='../../../public/assets/images/user-regular.svg' alt='small icon image of person' /> */}
        </div>
        <div className='input_control'>
          <input onChange={handleInputChange} className='passwordField' type='password' value={authValues.password} name='password' placeholder='Password' autoComplete='current-password'></input>
          {/* <img className='form-lock-icon' src='../../../public/assets/images/lock-solid.svg' alt='small icon image of lock' /> */}
        </div>
        <div className='input_control'>
          <input className='logged-in-checkbox' type='checkbox' name='logged-in' id='logged-in' />
          <label className='checkbox-label' htmlFor='logged-in'>Keep me logged in.</label>
        </div>
        <div className='input-control'>
          <button className='login-button' type='submit'>Log In</button>
        </div>
        <p className="register-option">
          <span>Don't have an account? </span>
          <a href="" className="register-link">Signup now</a>
        </p>
        <strong className='text-separator'>OR</strong>
        <figure className='input-control'>
          <img className='fingerprint-image' src='../../../public/assets/images/fingerprint-solid.svg'  />
          <figcaption className='fingerprint-label'>Login with fingerprint</figcaption>
        </figure>
      </form>
    </div> 
  )
}

export { JWTLoginForm }