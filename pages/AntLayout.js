import React, { useState } from 'react';

//Routing with NextJS and ANT https://blog.logrocket.com/use-ant-design-next-js/
import Link from 'next/link'

// Antd Imports
import {Layout, Menu, theme} from 'antd';
import { HomeOutlined, ExclamationCircleOutlined, FileExclamationOutlined,
AppstoreOutlined, BookOutlined, CarryOutOutlined, UserOutlined,
EyeOutlined,DesktopOutlined, SmileOutlined, BgColorsOutlined,
} from '@ant-design/icons';
const {Header, Content, Footer, Sider} = Layout;

// Uses Code Layout from https://ant.design/components/layout#components-layout-demo-responsive

// Menu Layout Code https://ant.design/components/menu

// Grabbing Menu Items
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// All Menu Items
const items = [
  getItem('Home', '1', <HomeOutlined/>),
  getItem('About', '2', <ExclamationCircleOutlined />, [
    getItem('Myself', '2-1', <UserOutlined />),
    getItem('My Skills (WIP)', '2-2', <CarryOutOutlined />),
    getItem('My Resume', '2-3', <BookOutlined />)
  ]),
  {
    type: 'divider',
  },
  getItem('Projects', '3', <AppstoreOutlined />, [
    getItem('Personal', '3-1', <SmileOutlined />, [
      getItem('Replicate', '3-1-1', <BgColorsOutlined />),
      getItem('TheOne SDL', '3-1-2', <FileExclamationOutlined />),
      getItem('VGB Unity', '3-1-3', <FileExclamationOutlined />)
    ]),
    getItem('School', '3-2', <FileExclamationOutlined />, [
      getItem('Comp Vision', '3-2-1', <EyeOutlined />),
      getItem('ML', '3-2-2', <DesktopOutlined />),
    ]),
  ]),
  getItem('Contact Me (WIP)', '3', <ExclamationCircleOutlined />)
];

// REturning Menu Options
export default function Ant(){

    const onClick = (e) => {
      console.log('click', e);
    }
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline"
            style={{
              width: 200
            }}
            onClick = {onClick}
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['home']}
            items={items}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                Heres some text about what the next layout could look like</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Powered by Ant UED</Footer>
          </Layout>
        </Layout>
      );
       
    
    }