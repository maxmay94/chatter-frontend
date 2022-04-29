import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../styles/Auth.css'

// Assets
import coder from '../../assets/animation/coder.json'

// Services
import { login } from '../../services/authService'

// Components
import Animation from '../../components/misc/Animation'

const SignIn = (props) => {
  const navigate = useNavigate()
	const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    pw: ''
  })

  const handleChange = (e) => {
    setMsg('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(formData)
      props.handleSignupOrLogin()
      navigate('/posts')
    } catch (error) {
      setMsg(error.message)
    }
  }

  return (
    <div className="signup-page">
      <div className='left-container'>
        <div className='form-container'>
          <div className="title-container">
            <h1>Sign In</h1>
            {msg
              ? <h3>{msg}</h3>
              : <h3>Social media for developers</h3>
            }
          </div>
          <form className="register-form" onSubmit={handleSubmit}>

            <input
              required
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              required
              name="pw"
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={handleChange}
              value={formData.pw}
            />

            <button
              autoComplete="off"
              id="submit-button"
              type="submit"
            >SIGN IN</button>

          </form>
          <div className="redirect-container">
            <p>Don't have an account?</p>
            <Link className="redirect-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="right-container">
        <Animation animData={coder}></Animation>
      </div>

    </div>
  )
}

export default SignIn