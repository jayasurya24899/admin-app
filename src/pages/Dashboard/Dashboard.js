import React from 'react'
import "./Dashboard.css"
import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs"
import { Column } from '@ant-design/plots';
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

const Dashboard = () => {
    const data = [
        {
          type: 'Jan',
          sales: 38,
        },
        {
          type: 'Feb',
          sales: 52,
        },
        {
          type: 'Mar',
          sales: 61,
        },
        {
          type: 'April',
          sales: 145,
        },
        {
          type: 'May',
          sales: 48,
        },
        {
          type: 'June',
          sales: 38,
        },
        {
          type: 'July',
          sales: 38,
        },
        {
          type: 'Aug',
          sales: 38,
        },
        {
            type: 'Sep',
            sales: 38,
          },
          {
            type: 'Oct',
            sales: 38,
          },
          {
            type: 'Nov',
            sales: 38,
          },
          {
            type: 'Dec',
            sales: 38,
          },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
        return "#428dc7";
          },
        label: {
          
          position: 'middle',
          
          style: {
            fill: '#FFFFFF',
            opacity: 1,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Months',
          },
          sales: {
            alias: 'Income',
          },
        },
      };
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
      <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
        <div>
          <p className=''>Total</p> <h4 className='mb-0'>$1000</h4>
        </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><BsArrowUpLeft/>32%</h6>
          <p className='mb-0'>Compared To April</p>
          </div>
        
      </div>
      <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
      <div>
          <p>Total</p> <h4 className='mb-0'>$1100</h4>
        </div>
          <div className='d-flex flex-column align-items-end'>
          <h6 className='green'><BsArrowDownRight/>32%</h6>
            <p className='mb-0'>Compared To April</p>
          </div>
      </div>
      <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
      <div>
          <p>Total</p> <h4 className='mb-0'>$1200</h4>
        </div>
          <div className='d-flex flex-column align-items-end'>
          <h6 className='green'><BsArrowDownRight/>32%</h6>
          <p className='mb-0'>Compared To April</p>
          </div>
      </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Income Statics</h3>
        <div>
        <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Recent Orders</h3>
       <div>
       <Table 
       columns={columns} dataSource={data1}  
       />
      </div>
      </div>

    </div>
  )
}

export default Dashboard