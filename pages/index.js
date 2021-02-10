import Head from 'next/head'
import styles from '../styles/Home.module.sass'

 const Home = () =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Lookup</title>
      </Head>
      <main>
        <h1 className={styles.title}>Stock Lookup</h1>
        <div className={styles.search}>
          <input placeholder="Search" type="text" required></input>
        </div>
      </main>
    </div>
  )
}

// Fetch Ticker Data
// export const getStaticProps = async () => {
//   const res = await fetch(`https://api.polygon.io/v2/reference/tickers?market=STOCKS&locale=us&search=gamestop&perpage=1&page=1&apiKey=nSmGnGWdkG6rUSFIlTXK7agr0DXQexoa`)
//   const tickers = await res.json();

//   return { 
//       props: {
//           tickers
//       }
//   }
// }

export default Home
