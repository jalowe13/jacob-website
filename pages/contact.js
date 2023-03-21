import { useState } from "react";
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import Grid from '@mui/material/Grid';

import Ant from '../components/AntLayout';


// About Page
export default function Contact(){
  const headerContent = <h1>Contact Me</h1>;
  const pageContent = 
  <h1>
  Contact
  </h1>

    return (
      <Ant header={headerContent} content={pageContent}/>
      )
        }