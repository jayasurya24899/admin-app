import React from 'react'
import Custominput from '../components/Custominput'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='py-5' style={{ background:"#66a3ff", minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Login</h3>
        <p>Login to your account to continue.</p>
        <Custominput 
        type="text" 
        id="email"
        label="EMAIL-ADDRESSS"
         />
        <Custominput type="text"
         id="pass"
         label="PASSWORD"
          />
        <Link 
        to="/admin"
        className='border-0 px-3 py-2 text-white fw-bold w-100 text-decoration-none fs-7'
        style={{background:"#66a3ff"}}
        type="submit">
        Login
        </Link>

      </div>

    </div>
  )
}

export default Login