import { useState } from "react"
import {useRouter} from "next/router"

function ProductList({ posts }) {
    const [products, setProducts] = useState(posts)
    const router = useRouter()

    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/products?price=2000")
        const data = await response.json()
        setProducts(data)
        router.push("clientsideDF?price=2000",undefined,{shallow:true})
    }

    return (
        <>
        <h1>List of products in client side data fetching</h1>
        <button onClick={()=> fetchData()}>Filter data</button>
            {
                products.map((data) => (
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                    </div>
                ))
            }
        </>
    )
}
export default ProductList

export async function getServerSideProps(context) {
    const { query} = context
    const querystring = query == "price=2000"? "price=2000":""
    const response = await fetch(`http://localhost:4000/products?${querystring}`)
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}