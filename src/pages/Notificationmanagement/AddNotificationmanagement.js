import React from 'react'
import Custominput from '../../components/Custominput';
import "./NotificationManagement.css";

const AddNotificationmanagement = ()=> {
  return (
    <div>
    <h3 className='mb-4'>Add Notification</h3>
    <div>
        <form action=''>
            <Custominput type="text" label="Enter Name"/>
            
            <button className='btn btn-success border-0 rounded-3 my-5'  type="submit">Add Notification</button>
        </form>
    </div>
</div>
  )
}

export default AddNotificationmanagement