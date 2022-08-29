import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <center> <Link href="/newpage"><a>navigate to newPage</a></Link></center>   
      <center> <Link href="/post"><a>Post</a></Link></center>   
      <center> <Link href="/isr"><a>ISR</a></Link></center>   
      <center> <Link href="/ssr"><a>SSR</a></Link></center>  

      <footer className={styles.footer}>       
      </footer>
    </div>
  )
}
