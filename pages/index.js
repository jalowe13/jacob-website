import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MenuLayout from '../components/MenuLayout';


export default function Home() {
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
      Jacob's Site
    </div>
    
      <Head>
        <title>Jacob</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <MenuLayout></MenuLayout>
    </div>
  )
}
