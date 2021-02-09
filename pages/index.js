import Head from 'next/head'
import styles from '../styles/Home.module.sass'

 const Home = () =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Lookup</title>
      </Head>
      <main>
        <h1 className={styles.title}>
          Stock Lookup
        </h1>
        <div className={styles.search}>
          <input placeholder="Search" type="text"></input>
        </div>
      </main>
    </div>
  )
}

export default Home
