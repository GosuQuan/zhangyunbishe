import React, { useState } from 'react'
import "./index.css"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('公司管理', '1', <PieChartOutlined />),
  getItem('员工管理', '2', <DesktopOutlined />),
  getItem('违章管理', '3', <TeamOutlined />),
];



export default function Home() {


  const [collapsed, setCollapsed] = useState(false);
  const nav=useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const clickMenu=(obj)=>{
    console.log(obj)
    if(obj.key==1){
      nav('/home/firm')
    }else if(obj.key==2){
      nav('/home/people')
    }else{
      nav('/home/violation')
    }
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" 
        items={items} 
        onSelect={clickMenu}
        />
      </Sider>

      <Layout style={{height:"100vh"}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            height:'10vh'
          }}
        > 
          <h2 style={{marginLeft:'30px'}}>违章文本分类系统</h2>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
          
        >
          <div
            style={{
              padding: 24,
              minHeight: 650,
              height:'85vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <Outlet></Outlet>
          </div>
        </Content>
       
      </Layout>
    </Layout>
  )
}
