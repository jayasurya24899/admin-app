import React from 'react'
import Custominput from '../components/Custominput'

function Forgetpassword() {
  return (
    <div className='py-5' style={{ background:"#66a3ff", minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
        <h3 className='text-center '>Forgot Password</h3>
        <p className='fs-6'>Please Enter Your register email to get reset password mail.</p>
        <Custominput type="text" id="email" label="EMAIL-ADDRESS"/>
      
        <button className='border-0 px-3 py-2 text-white fw-bold w-100'
        style={{background:"#66a3ff"}}
        type="submit">sent link
        </button>

      </div>

    </div>
  )
}

export default Forgetpassword