import styles from '../styles/Home.module.css';
import Ant from '../components/AntLayout';


import {Image} from 'antd';
import { Card,Col,Row} from 'antd';

//Routing with NextJS and ANT https://blog.logrocket.com/use-ant-design-next-js/
import Router from 'next/router';

// MUI
import React from 'react';

//Typewriter https://www.npmjs.com/package/typewriter-effect
import TypeWriter from 'typewriter-effect';




export default function Home() {
  // Content for home
  const headerContent = <h1>Home</h1>;
  const pageContent = 
<div className={styles.homeTitle}>
      <div>
        <Card title={"Current Notice 1/29/2024"}>
        I'm in the process of moving houses. During this transition, my local server, which usually allows for dynamic compilation and the use of replicate, is unavalible. I will be transitining to AWS to host my website. In the meantime, I've hosted a static version of the site on AWS. I appreciate your understanding and patience. I will be working on incorperating my new projects into the site as soon as I can with functioning API services through AWS instead of a local machine.
        </Card>
      </div>
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
        <button onClick={() => Router.push('/current')}>
    Click here to see my most recent project!  
    </button>
  </h1>

  <Image
    src="https://lh3.googleusercontent.com/a/AGNmyxZ_R90Bnr_DT5501Z69BIxh4KNdcUmiuzlt12tXkmk=s576"
/>
</div>

  return (
    <Ant header={headerContent} content={pageContent}/>
  )
    }

    
