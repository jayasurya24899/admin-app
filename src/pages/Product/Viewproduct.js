import React, { useEffect, useState } from 'react'
import { Table } from 'antd';  
import axios from "axios";
import { axios_url } from '../Axios/Axios';
import { getAdjustAppendPadding } from '@antv/g2plot/lib/utils';
import Item from 'antd/es/list/Item';






const Viewproduct =()=> {
    
  const [data, setData] = useState([]);
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'products',
    },
    {
        title: 'Status',
        dataIndex: 'status',
      },
  ];
 
 const data1 = data.map((item, index)=>{
    return
    
  });

  const fetchdata = async() =>{
    const response = await axios.get(axios_url)
   setData(response.data)
   console.log(response,"response");
  }
  useEffect (()=>{
  fetchdata();
  },[])

   return (
    <div>
        <h3 className='mb-4 title'>View Products</h3>
       
        <div>
            <Table columns={columns} datasource={data1} />
        </div>
    </div>
  )
}

export default Viewproduct