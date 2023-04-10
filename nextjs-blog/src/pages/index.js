import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <Sidebar />

        <div className={styles.grid}>
          <Header />
          <HomePage />

        </div>
      </main>
    </div>
  );
}
