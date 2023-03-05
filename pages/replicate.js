import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import MenuLayout from "../components/MenuLayout";
import styles from "../styles/Home.module.css"
import Grid from '@mui/material/Unstable_Grid2';
import Ant from '../components/AntLayout';



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home(){

    // Prediction home function
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("/api/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: e.target.prompt.value,
        }),
      });
      let prediction = await response.json();
      if (response.status !== 201) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
  
      while (
        prediction.status !== "succeeded" &&
        prediction.status !== "failed"
      ) {
        await sleep(1000);
        const response = await fetch("/api/predictions/" + prediction.id);
        prediction = await response.json();
        if (response.status !== 200) {
          setError(prediction.detail);
          return;
        }
        console.log({prediction})
        setPrediction(prediction);
      }
    };

    // Header
    const headerContent = <h1>Replicate</h1>;

    // Handling everything related to Replicate and Next JS
    const pageContent = 
    <div>
        <Head>
        <title> Replicate and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid container spacing = {2}>
        <Grid item xs = {1}>
        </Grid>
        <Grid item xs = {11}>
        <div className={styles.containerFixedStability}>
        Dream something...{" "}
        <p/>
        <a href="https://replicate.com/stability-ai/stable-diffusion">stability-ai/stable-diffusion</a>
        </div>
        </Grid>

        <Grid item xs = {12}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" />
        <button type="submit">Go!</button>
        </form>
        </Grid>
        <Grid item xs = {12}>
        {prediction && (
        <div>
            {prediction.output && (
              <div className={styles.imageWrapper}>
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes='100vw'
              />
              </div>
            )} 
        <div className={styles.homeTitle}>status: {prediction.status}</div> 
        </div>
      )}
        </Grid>
        
        </Grid>



        </div>

    // Wrap instead into the ANT Layout
    return(
      <Ant header={headerContent} content={pageContent}/>
  );
}

/*
<div className={styles.bg}>
            <div className={styles.container}>
                <Head>
                    
                </Head>
                <p>
                Dream something with{" "}
                <a href="https://replicate.com/stability-ai/stable-diffusion">stability-ai/stable-diffusion</a>:
                </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" />
        <button type="submit">Go!</button>
      </form>

      {error && <div>{error}</div>}

      {prediction && (
        <div>
            {prediction.output && (
              <div className={styles.imageWrapper}>
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes='100vw'
              />
              </div>
            )}  
            <p>status: {prediction.status}</p>
        </div>
      )}
    <MenuLayout />
    </div>
*/