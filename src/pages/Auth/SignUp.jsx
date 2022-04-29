import React, { useState } from 'react'
import '../../styles/Auth.css'
import { useNavigate } from 'react-router-dom'
// Assets
import cat from '../../assets/avatars/cat.png' //<= included in starter code

// Services
import { signup } from '../../services/authService'
// we will import a sign up service momentarily

const SignUp = (props) => {
  const navigate = useNavigate()
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: cat
  })

  const handleChange = (e) => {
    setMsg('')
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }
  // What is setFormData doing here?
  // a. maintain previous data added to state
  // b. use the <input> name attribute to find a key in the state object
  // c. use the <input> value attribute to assign a value to that key

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(formData)
      props.handleSignupOrLogin()
      navigate('/posts')
    } catch (err) {
      setMsg(err.message)
    }
  }

  return (
    <div className="signup-page">

      <div className='left-container'>

        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
						<h3>Social media for developers</h3>
          </div>
          <form className="register-form" onSubmit={handleSubmit}>

            <input 
              required
              name="name"
              type="text"
              autoComplete='off'
              placeholder='Username'
              onChange={handleChange}
              value={formData.name}
            />
            <input 
              required
              name="email"
              type="email"
              autoComplete='off'
              placeholder='Email' 
              onChange={handleChange}
              value={formData.email}
            />
            <input 
              required
              name="password"
              type="password"
              autoComplete='off'
              placeholder='Password' 
              onChange={handleChange}
              value={formData.password}
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