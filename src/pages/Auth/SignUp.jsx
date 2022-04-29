import React, { useState } from 'react'
import '../../styles/Auth.css'

// Assets
import cat from '../../assets/avatars/cat.png' //<= included in starter code

// Services
import { signup } from '../../services/authService'
// we will import a sign up service momentarily

const SignUp = (props) => {

  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: cat
  })

  return (
    <div className="signup-page">

      <div className='left-container'>

        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
						<h3>Social media for developers</h3>
          </div>
          <form className="register-form">

            <input 
              required
              name="name"
              type="text"
              autoComplete='off'
              placeholder='Username' 
            />
            <input 
              required
              name="email"
              type="email"
              autoComplete='off'
              placeholder='Email' 
            />
            <input 
              required
              name="password"
              type="password"
              autoComplete='off'
              placeholder='Password' 
            />

            <button
              autoComplete="off"
              id="avatar-button"
              type="button"
            >Select Avatar</button>

            <button
              autoComplete="off"
              id="submit-button"
              type="submit"
            >SIGN UP</button>

          </form>
        </div>

      </div>

      <div className="right-container">
        Animation Here
      </div>

    </div>
  )
}

export default SignUp