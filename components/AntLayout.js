import React, { useState } from 'react';

//Routing with NextJS and ANT https://blog.logrocket.com/use-ant-design-next-js/
import Router from 'next/router';

// Antd Imports
import {Layout, Menu, theme, Image} from 'antd';
import { HomeOutlined, ExclamationCircleOutlined, FileExclamationOutlined,
AppstoreOutlined, BookOutlined, CarryOutOutlined, UserOutlined,
EyeOutlined,DesktopOutlined, SmileOutlined, BgColorsOutlined,
} from '@ant-design/icons';
const {Header, Content, Footer, Sider} = Layout;

// Uses Code Layout from https://ant.design/components/layout#components-layout-demo-responsive

// Menu Layout Code https://ant.design/components/menu

// Grabbing Menu Items
// Link - Link to webpage if needed

function getItem(label, key, icon, children,path, type) {
  return {
    key,
    icon,
    path,
    children,
    label,
    type,
  };
}

// All Menu Items
const items = [
  getItem('Home', '1', <HomeOutlined/>),
  getItem('About', 'h1', <ExclamationCircleOutlined />, [
    getItem('Myself', '2', <UserOutlined />),
    getItem('My Skills (WIP)', '3', <CarryOutOutlined />),
    getItem('My Resume', '4', <BookOutlined />)
  ]),
  {
    type: 'divider',
  },
  getItem('Projects', 'h2', <AppstoreOutlined />, [
    getItem('Personal', 'h3', <SmileOutlined />, [
      getItem('Replicate', '5', <BgColorsOutlined />),
      getItem('TheOne SDL', '6', <FileExclamationOutlined />),
      getItem('VGB Unity', '7', <FileExclamationOutlined />)
    ]),
    getItem('School', 'h4', <FileExclamationOutlined />, [
      getItem('Comp Vision', '8', <EyeOutlined />),
      getItem('ML', '9', <DesktopOutlined />),
    ]),
  ]),
  getItem('Contact Me (WIP)', '10', <ExclamationCircleOutlined />)
];

// Returning Menu Options
export default function Ant(props){

    // On click Button redirect
    const onClick = (e) => {
      console.log('click', typeof(e.key));
      switch(e.key){
        case '1':
          Router.push('/');
          break;
        // case '2':
        //   Router.push('/about');
        //   break;
        // case '3':
        //   Router.push('/skills');
        //   break;
        // case '4':
        //   Router.push('/resume');
        //   break;
        // case '5':
        //   Router.push('/replicate');
        //   break;
        case '6':
          Router.push('https://github.com/jalowe13/TheOneSDL');
          break;
        // case '7':
        //   Router.push('/vgb');
        //   break;
        case '8':
          Router.push('https://sites.google.com/vt.edu/ece4554-group42-car-detection');
          break;
        // case '9':
        //   Router.push('/ml');
        //   break;
        // case '10':
        //   Router.push('/contact');
        //   break;
        default:
          Router.push('/construction');
          break;           
      }
    }

    
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (

        <Layout>
          <Sider
            height
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
            <Header style={{ padding: 0, background: colorBgContainer }}>
             {props.header}
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{padding: 24, minHeight: 700, background: colorBgContainer }}>
              {props.content}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', fontSize:10 }}>Powered by Ant UED</Footer>
          </Layout>
        </Layout>
      );
       
    
    }