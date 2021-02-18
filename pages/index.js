import Head from 'next/head'
import Header from '../components/Header.js'
import Search from '../components/Search.js'
import styles from '../styles/Home.module.sass'

 const Home = () =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Lookup</title>
      </Head>
      <main>
        <Header title="Stook Lookup"/>
        <div className={styles.search}>
          <Search/>
        </div>
      </main>
    </div>
  )
}

export default Home
