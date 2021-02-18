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
                <h1>{ symbol }</h1>
                <p>Company is { stock.name } </p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
}

export async function getServerSideProps({ res, params }) {
    const req = await fetch(`https://api.polygon.io/v1/meta/symbols/${params.symbol}/company?&apiKey=nSmGnGWdkG6rUSFIlTXK7agr0DXQexoa`)
    const errorCode = req.ok ? false: req.status
    if(errorCode) {
        res.status = errorCode
    }
    const data = await req.json()

    return {
        props: { errorCode, stock: data },
    }
}

export default Stock