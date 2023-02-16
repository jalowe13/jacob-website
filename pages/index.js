import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MenuLayout from '../components/MenuLayout';

// MUI
import React from 'react';
import Grid from '@mui/material/Grid';

//Typewriter https://www.npmjs.com/package/typewriter-effect
import TypeWriter from 'typewriter-effect';


export default function Home() {
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
        I'm Jacob and I am
        <TypeWriter
        options={{
        strings: [
          "A Software Developer",
          "A Recent Graduate",
          "Honest",
          "Hardworking",
          "Consistantly Improving",
          "A Learner",
          "Curious",
          "Joyful",
          "Kind",
          "Passionate"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural',
        delay: 'natural' // can also be in ms
      }}
      ></TypeWriter>
      </div>
    </Grid>
    </Grid>
    </div>
  )
    }
