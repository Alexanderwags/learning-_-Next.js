import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <h1>welcome to nextjs</h1>
      <span>profesor : william</span>
    </main>
    <Link href="second">to Second</Link>
    </div>
  )
}
