import React, { useState } from 'react';
import "./MainLayout.css"
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard,AiOutlineEye } from "react-icons/ai"
import {BiCategory} from "react-icons/bi"
import {FiUsers} from "react-icons/fi"
import { MdProductionQuantityLimits, MdOutlineManageSearch } from "react-icons/md"
import {VscFeedback} from "react-icons/vsc"
import {CgNotifications} from "react-icons/cg"
import {IoIosAddCircleOutline,} from "react-icons/io"
import {IoNewspaperOutline} from "react-icons/io5"
import {RiAdminLine} from "react-icons/ri"
import { BiEdit } from "react-icons/bi"
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
            <h2 className='text-white fs-5 tect-center py-3 mb-0'>
                <span className='sm-logo'>S</span>
                <span className='lg-logo'>Shopify</span>
            </h2>
            </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if( key == "signout"){
              }else{
                navigate(key)
              }

          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Dashboard',
            },
            {
                key: 'products',
                icon: <MdProductionQuantityLimits className='fs-4'/>,
                label: 'Products',
                children:[
                    {
                        key: 'view-products',
                        icon: <AiOutlineEye className='fs-4'/>,
                        label: 'ViewProducts',
                      },
                      {
                        key: 'add-products',
                        icon: <IoIosAddCircleOutline className='fs-4'/>,
                        label: 'Add-products',
                      },
                      {
                        key: 'edit&delete',
                        icon: <BiEdit className='fs-4'/>,
                        label: 'Edit & Delete',
                      },
                ]
              },
              {
                key: 'category',
                icon: <BiCategory className='fs-4'/>,
                label: 'Category',
                children:[
                    {
                        key: 'view-category',
                        icon: <AiOutlineEye className='fs-4'/>,
                        label: 'ViewCategory',
                      },
                      {
                        key: 'add-category',
                        icon: <IoIosAddCircleOutline className='fs-4'/>,
                        label: 'AddCategory',
                      },
                      {
                        key: 'edit-delete-category',
                        icon: <BiEdit className='fs-4'/>,
                        label: 'Edit & delete Category',
                      },
                ]
              },
              {
                key: 'ordermanagement',
                icon: <MdOutlineManageSearch className='fs-4'/>,
                label: 'OrderManagement',
                children:[
                    {
                        key: 'view-ordermanagement',
                        icon: <AiOutlineEye  className='fs-4'/>,
                        label: 'ViewOrderManagement',
                      },
                      {
                        key: 'update-ordermanagement',
                        icon: <BiEdit className='fs-4'/>,
                        label: 'UpadateOrderManagement',
                      },
                 
                ]
              },
              {
                key: 'usermanagement',
                icon: <FiUsers className='fs-4'/>,
                label: ' UserManagement',
                children:[
                    {
                        key: 'view-usermanagement',
                        icon: <AiOutlineEye className='fs-4'/>,
                        label: 'ViewUsermanagement',
                      },
                      {
                        key: 'add-usermanagement',
                        icon: <IoIosAddCircleOutline className='fs-4'/>,
                        label: 'AddUsermanagement',
                      },
                      {
                        key: 'edit-delete-usermanagement',
                        icon: <BiEdit className='fs-4'/>,
                        label: 'Edit & delete Usermanagement',
                      },
                ]
              },
              {
                key: 'feedbackmanagement',
                icon: <VscFeedback className='fs-4'/>,
                label: 'FeedbackManagement',
              },
              {
                key: 'notificationmanagement',
                icon: <CgNotifications className='fs-4'/>,
                label: ' NotificationManagement',
                children:[
                    {
                        key: 'view-notificationmanagement',
                        icon: <AiOutlineEye className='fs-4'/>,
                        label: 'ViewNotificationrmanagement',
                      },
                      {
                        key: 'add-notificationmanagement',
                        icon: <IoIosAddCircleOutline className='fs-4'/>,
                        label: 'AddNotificationrmanagement',
                      },
                      {
                        key: 'edit-delete-notificationmanagement',
                        icon: <BiEdit className='fs-4'/>,
                        label: 'Edit & delete Notificationrmanagement',
                      },
                ]
              },
              {
                key: 'newslettermanagement',
                icon: <IoNewspaperOutline className='fs-4'/>,
                label: 'NewslatterManagement',
              },
              {
                key: 'adminmanagement',
                icon: <RiAdminLine className='fs-4'/>,
                label: 'AdminManagement',
              },
          
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="d-flex justify-content-between ps-1 pe-5"
         style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className="d-flex gap-3 align-items-center">
            <div></div>
            <div className="d-flex gap-3 align-items-center">
                <div><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dadmin&psig=AOvVaw1LOE6n1xiq5jrSe4m6GVM4&ust=1677141533546000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjyxdncqP0CFQAAAAAdAAAAABAE" alt=''/></div>
                <div>
                    <h5 className='mb-0'>jayasurya</h5>
                    <p className='mb-0'>jsurya@gmail.com</p>
                </div>
            </div>

          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
            Content
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;