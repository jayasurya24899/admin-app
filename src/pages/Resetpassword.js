import React from 'react'
import Custominput from '../components/Custominput'

function Resetpassword() {
  return (
    <div className='py-5' style={{ background:"#66a3ff", minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Reset Password</h3>
        <p><small>Please Enter your new password.</small></p>
        <Custominput type="password" id="pass" label="New-password"/>
        <Custominput type="password" id="confirmpass" label="Confirm-password"/>
        <button className='border-0 px-3 py-2 text-white fw-bold w-100'
        style={{background:"#66a3ff"}}
        type="submit">Reset Password
        </button>

      </div>

    </div>
  )
}

export default Resetpassword