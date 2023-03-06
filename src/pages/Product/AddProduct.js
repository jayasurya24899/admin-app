import React, { useState,useEffect } from 'react'
import Axios from "axios"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Product.css';
import Custominput from '../../components/Custominput'
import  {axios_url} from '../Axios/Axios';


const AddProduct = () => {
    const [productName, setProductname] = useState("");
    const [productPrice, setProductprice] = useState("");
    const [category,setCategory] = useState("");
    const [brand, setBrand] = useState("");

    const postData=async(e)=>{
        console.log(e)
        e.preventDefault();
await Axios.post(axios_url,
   
    {
    productName,
    productPrice,
    category,
    brand 
})


console.log(postData,"postdata");
console.log(productName,"productname");
    }
 


  return (
    <div>
        <h3 className='mb-4 title'>Add Product</h3>
        <div>
            <form>
                <Custominput type="text" name="productname" label="Enter product Name" value={productName} 
                onChange={(e)=>setProductname(e.target.value)}>
                    
                </Custominput>
                <div className='mb-3'>
                <ReactQuill 
                theme="snow" 
                value="" 
                 />
                </div>
                <Custominput type="text" name="productprice" label="Enter product price" value={productPrice} onChange={(e)=>setProductprice(e.target.value)}></Custominput>
                
                <select name="category" className='form-control py-3 mb-3'id="" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option>select category</option>
                <option value="iphone">MI-11</option>
                <option value="redmi">note-8</option>
                <option value="samsung">note-9</option>
                
                </select>
                <select name="brand" className='form-control py-3 mb-3' value={brand}  onChange={(e)=>setBrand(e.target.value)}id="">
                    <option>select brand</option>
                    <option value="redmi">Redmi</option>
                    <option value="samsung">samsung</option>
                </select>
                <button className='btn btn-success border-0 rounded-3 my-4' onClick={postData}  type="submit">Add Blog</button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct