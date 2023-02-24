import React from 'react'
import Custominput from '../../components/Custominput'
import "./Category.css"

const AddCategory = () => {
  return (
    <div>
        <h3 className='mb-4'>Add Category</h3>
        <div>
            <form action=''>
                <Custominput type="text" label="Enter Category"/>
                
                <button className='btn btn-success border-0 rounded-3 my-5'  type="submit">Add Category</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategory