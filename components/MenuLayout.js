import { useState } from 'react';
import React from 'react';

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar'

// Replaces React Router
import Link from 'next/link'

// Sidebar Package - https://www.npmjs.com/package/react-pro-sidebar
// React router Package for Menu links - https://reactrouter.com/en/main

// Suppress jest warning 
//
https://stackoverflow.com/questions/58070996/how-to-fix-the-warning-uselayouteffect-does-nothing-on-the-server
React.useLayoutEffect = React.useEffect

// React router migration

const MenuLayout =({children}) =>{
    const collapsed = useState(false);
    return(     
        <ProSidebarProvider>
        <Sidebar width='265px'>
            <Menu>
                <MenuItem component={<Link href="/" />}>
                    Home
                </MenuItem>
                <SubMenu label="About">
                <MenuItem component={<Link href="/about" />}>
                    Me (WIP)
                </MenuItem>
                <MenuItem>
                    My Skills (WIP)
                </MenuItem>
                <MenuItem>
                    Resume (WIP)
                </MenuItem>
                </SubMenu>
                <SubMenu label="Projects">
                <SubMenu label="Personal">
                <MenuItem component={<Link href="/replicate" />}>
                Replicate
                </MenuItem>
                <MenuItem component={<Link href="https://github.com/jalowe13/TheOneSDL" />}>
                The One SDL Project (WIP)
                </MenuItem>
                <MenuItem>
                VGB Unity (WIP)
                </MenuItem>
                </SubMenu>
                <SubMenu label="School">
                <MenuItem component={<Link href="https://sites.google.com/vt.edu/ece4554-group42-car-detection" />}>
                Computer Vision
                </MenuItem>
                <MenuItem>
                Machine Learning (WIP)
                </MenuItem>
                </SubMenu>
                </SubMenu>
                <MenuItem>
                Contact Me (WIP)
                </MenuItem>
             </Menu>
          </Sidebar>

          </ProSidebarProvider>
    )
}

export default MenuLayout;

