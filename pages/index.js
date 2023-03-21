import styles from '../styles/Home.module.css';
import Ant from '../components/AntLayout';


import {Image} from 'antd';

// MUI
import React from 'react';

//Typewriter https://www.npmjs.com/package/typewriter-effect
import TypeWriter from 'typewriter-effect';




export default function Home() {
  // Content for home
  const headerContent = <h1>Home</h1>;
  const pageContent = 
<div className={styles.homeTitle}>
  <h1>
        I'm Jacob and I am
        <TypeWriter
        options={{
        strings: [
          "A Software Developer",
          "A Recent Graduate",
          "Ready To Make An Impact",
          "Curious and Thoughtful",
          "Not Afraid Of A Challenge",
          "Constantly Learning",
          "Good At Bad Jokes",
          "A Pretty Happy Guy",
          "Kind To Others",
          "Passionate About My Craft",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural',
        delay: 'natural' // can also be in ms
      }}
      ></TypeWriter>
  </h1>
  <Image
    src="https://media.licdn.com/dms/image/C4E03AQE3wYtlQmkWtA/profile-displayphoto-shrink_800_800/0/1568144969821?e=1681948800&v=beta&t=JZ0wTuUX2g75ANzZNMEw27izdJbeKFK_Ze86lx9T210"
/>
</div>

  return (
    <Ant header={headerContent} content={pageContent}/>
  )
    }

    
