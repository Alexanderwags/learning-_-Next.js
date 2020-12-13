import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
function second() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Second Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Second Page</h1>
        <span>subtitle two</span>
      </main>
      <Link href="/">to Home</Link>
    </div>
  );
}

export default second;
