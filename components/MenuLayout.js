import { useState } from 'react';
import React from 'react';

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar'

// Replaces React Router
import Link from 'next/link'

// Sidebar Package - https://www.npmjs.com/package/react-pro-sidebar
// React router Package for Menu links - https://reactrouter.com/en/main


// React router migration

const MenuLayout =({children}) =>{
    const collapsed = useState(false);
    return(     
        <ProSidebarProvider>
        <Sidebar width='192px'>
            <Menu>
                <MenuItem component={<Link href="/" />}>
                    Home
                </MenuItem>
                <SubMenu label="About Me">
                <MenuItem component={<Link href="/about" />}>
                    About
                </MenuItem>
                <MenuItem>
                    Skills
                </MenuItem>
                <MenuItem>
                    Resume
                </MenuItem>
                </SubMenu>
                <SubMenu label="Projects">
                <SubMenu label="Personal">
                <MenuItem component={<Link href="/replicate" />}>
                Replicate
                </MenuItem>
                </SubMenu>
                <SubMenu label="School">
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

