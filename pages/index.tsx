import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Des Moines Showpage</title>
        <meta name="description" content="Des Moines Showpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Des Moines Showpage</h1>
          <p>
            Welcome to Des Moines Showpage. 
          </p>
          <p>
            Based off of
            <a href="https://stlshowpage.com/" target="_blank">St Louis Showpage</a>
          </p>
          <p>
            More coming soon...
          </p>
        </div>
      </main>
    </>
  )
}
