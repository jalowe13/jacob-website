import React from 'react';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar'

// Replaces React Router
import Link from 'next/link'

// Sidebar Package - https://www.npmjs.com/package/react-pro-sidebar
// React router Package for Menu links - https://reactrouter.com/en/main


// React router migration

const MenuLayout =({children}) =>{
    return(
        <ProSidebarProvider>
        <Sidebar>
            <Menu>
                <MenuItem component={<Link href="/" />}>
                    Home
                </MenuItem>
                <MenuItem component={<Link href="/about" />}>
                    About Me
                </MenuItem>
                <MenuItem>
                    Skills
                </MenuItem>
                <MenuItem>
                    Resume
                </MenuItem>
                <SubMenu label="Projects">
                <SubMenu label="School">
                <MenuItem>
                    Project 1
                </MenuItem>
                </SubMenu>
                <SubMenu label="Personal">
                </SubMenu>
                </SubMenu>
                <MenuItem>
                Contact Me
                </MenuItem>
             </Menu>
          </Sidebar>
          </ProSidebarProvider>
    )
}

export default MenuLayout;

