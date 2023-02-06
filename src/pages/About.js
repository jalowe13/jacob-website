import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import MenuLayout from "../components/MenuLayout";


// Homepage
export default function About(){
    return(
        <div className={styles.bg}>
            <ProSidebarProvider>
                <div className={styles.container}>
                    About Me
                </div>
                <MenuLayout></MenuLayout>
            </ProSidebarProvider>
        </div>
    );
}