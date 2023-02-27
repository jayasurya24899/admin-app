import React from 'react'
import { Table } from 'antd';  
import "./Usermanagement.css"

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
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      products: 32,
      status: `London, Park Lane no. ${i}`,
    });
  }

const Viewusermanagement = () => {
    return (
        <div>
            <h3 className='mb-4 title'>View UserManagement</h3>
           
            <div>
                <Table columns={columns} datasource={data1}/>
            </div>
        </div>
  )
}

export default Viewusermanagement