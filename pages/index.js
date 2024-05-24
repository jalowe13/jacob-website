import styles from '../styles/Home.module.css';
import Ant from '../components/AntLayout';
import Current from './current';
import Skills from './skills';
import Construction from './construction';
import Contact from './contact';


import {Image} from 'antd';
import { Card,Col,Row} from 'antd';

//Routing with NextJS and ANT https://blog.logrocket.com/use-ant-design-next-js/
import Router from 'next/router';

// MUI
import React from 'react';

//Typewriter https://www.npmjs.com/package/typewriter-effect
import TypeWriter from 'typewriter-effect';




export default function Home() {
    const [currentView, setCurrentView] = React.useState(false);
  const handleCurrentClick = () => {
    console.log("Current Clicked");
    setCurrentView(true);
  };


    // States for SPA
  const [skillsView, setSkillsView] = React.useState(false);
  const [projectsView, setProjectsView] = React.useState(false);
  const [contactView, setContactView] = React.useState(false);
  const [homeView, setHomeView] = React.useState(true);
  const [constructionView, setConstructionView] = React.useState(false);

  // Click handlers for SPA
  const handleHomeClick = () => {
    setHomeView(true);
    setSkillsView(false);
    setProjectsView(false);
    setContactView(false);
    setCurrentView(false);
    setConstructionView(false);
  }
  const handleSkillsClick = () => {
    setSkillsView(true);
    setProjectsView(false);
    setContactView(false);
    setHomeView(false);
    setConstructionView(false);
  };
  const handleReplicateClick = () => {
    setSkillsView(false);
    setProjectsView(false);
    setContactView(false);
    setHomeView(false);
    setConstructionView(true);
  };
  const handleContactClick = () => {
    setSkillsView(false);
    setProjectsView(false);
    setContactView(true);
    setHomeView(false);
    setConstructionView(false);
  };
  let headerContent = <h1>Invalid</h1>;
  let pageContent = <h1>Invalid</h1>;

  if (homeView){
    headerContent = <h1>Home</h1>;
    pageContent = 
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
         <button onClick={handleCurrentClick}>
     Click here to see my most recent project!  
     </button>
   </h1>
 
   <Image
     src="https://lh3.googleusercontent.com/a/AGNmyxZ_R90Bnr_DT5501Z69BIxh4KNdcUmiuzlt12tXkmk=s576"
 />
 </div>;
  }
  if (currentView){
    headerContent = <h1>Current Project</h1>;
    pageContent = <Current/>
  }
  if (skillsView){
    headerContent = <h1>Skills</h1>;
    pageContent = <Skills handleHomeClick = {handleHomeClick}/>
  }
  if (constructionView){
    headerContent = <Construction renderHeader={true} />;
    pageContent = <Construction renderHeader={false} />;
  }
  if (contactView){
    headerContent = <Contact renderHeader={true} />;
    pageContent = <Contact renderHeader={false} />;
  }
  
  return (
    <Ant header={headerContent} content={pageContent} handleCurrentClick={handleCurrentClick} handleHomeClick={handleHomeClick} handleSkillsClick={handleSkillsClick} handleReplicateClick={handleReplicateClick} handleContactClick={handleContactClick}/>
  )
 }

    
