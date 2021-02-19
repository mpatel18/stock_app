import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Error from 'next/error'


const Stock = ({ errorCode, stock }) => {
    const router = useRouter()
    const { symbol } = router.query

    if(errorCode) {
        return <Error statusCode={errorCode} />
    } else
        return (
            <div>
                <Head>
                    <title>{symbol}</title>
                </Head>
                <p>Company is { stock.name } </p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
}

export async function getServerSideProps({ res, params }) {
    const details = await fetch(`https://api.polygon.io/v1/meta/symbols/${params.symbol}/company?&apiKey=${process.env.API_KEY}`)
    const errorCode = details.ok ? false: details.status
    if(errorCode) {
        res.status = errorCode
    }
    const data = await details.json()

    return {
        props: { errorCode, stock: data },
    }
}

export default Stock