import Head from 'next/head'
import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Lookup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stock Lookup
        </h1>
      </main>
    </div>
  )
}
