import React from 'react'
import { Table } from 'antd';  

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



const Viewnotificationmanagement = () => {
  return (
    <div>
    <h3 className='mb-4 title'>View NotificationManagement</h3>
   
    <div>
        <Table columns={columns} datasource={data1}/>
    </div>
</div>
  )
}

export default Viewnotificationmanagement