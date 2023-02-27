import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Product.css';
import Custominput from '../../components/Custominput'

const AddProduct = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
    }
  return (
    <div>
        <h3 className='mb-4 title'>Add Product</h3>
        <div>
            <form>
                <Custominput type="text" label="Enter product Name"></Custominput>
                <div className='mb-3'>
                <ReactQuill 
                theme="snow" 
                value={desc} 
                onChange={(evt)=>{handleDesc(evt)
                }} />
                </div>
                <Custominput type="text" label="Enter product price"></Custominput>
                <select name="" className='form-control py-3 mb-3' id="">
                    <option value="">select category</option>
                </select>
                <select name="" className='form-control py-3 mb-3' id="">
                    <option value="">select brand</option>
                </select>
                <button className='btn btn-success border-0 rounded-3 my-4'  type="submit">Add Blog</button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct