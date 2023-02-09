import { useState } from "react";
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import MenuLayout from "../components/MenuLayout";
import Grid from '@mui/material/Grid';


// About Page
export default function About(){
    return (
        <div className={styles.bg}>
        <Head>
        <title>Jacob</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid container spacing = {2}>
        <Grid item xs = {1}>
        <MenuLayout></MenuLayout>
        </Grid>
        <Grid item xs = {10}>
        <div className={styles.containerFixed}>
            About
        </div>
        </Grid>
        </Grid>
        </div>
      )
        }