import { useState } from "react";
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import Grid from '@mui/material/Grid';

import Ant from '../components/AntLayout';


// About Page
export default function About(){
  const headerContent = <h1>About</h1>;
  const pageContent = 
  <h1>
  Under Construction
  </h1>

    return (
      <Ant header={headerContent} content={pageContent}/>
      )
        }