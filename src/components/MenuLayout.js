import React from 'react';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

// Sidebar Package - https://www.npmjs.com/package/react-pro-sidebar
// React router Package for Menu links - https://reactrouter.com/en/main

const MenuLayout =({children}) =>{
    return(
        <Sidebar>
            <Menu>
                  <MenuItem>
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
    )
}

export default MenuLayout;
