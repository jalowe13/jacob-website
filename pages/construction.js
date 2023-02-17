import { useState } from "react";
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import MenuLayout from "../components/MenuLayout";
import Grid from '@mui/material/Grid';

import Ant from '../components/AntLayout';
import {Image} from 'antd';


// About Page
export default function Construction(){
  const headerContent = <h1>Under Construction</h1>;
  const pageContent = 
<div>
  <h1>
  This page is under construction. Check back later!
  </h1>;
    <Image
    src="https://th.bing.com/th/id/R.2d0f1465b16c4cf9759fb85ad8ce558c?rik=Wk42Lrt2XiKFFQ&riu=http%3a%2f%2fwww.canadianmedicalteams.org%2fwp-content%2fuploads%2f2013%2f10%2fWebsite-Under-Construction-template1.jpg&ehk=jnc2qoHOn7smThGZPXvIuxo1LSSbAgM98O52IHNB%2bcE%3d&risl=&pid=ImgRaw&r=0"    
/>

</div>
    return (
      <Ant header={headerContent} content={pageContent}/>
      )
        }