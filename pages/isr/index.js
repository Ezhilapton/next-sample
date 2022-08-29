function IncrementalSG({ posts }) {
    return (
        <>
            {
                posts.map((data) => (
                    <div key={data.id}>
                        <h2 >{data.title}</h2>
                    </div>
                ))
            }
        </>
    )
}
export default IncrementalSG

export async function getStaticProps() {
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    return {
        props: {
            posts: data
        },
        revalidate: 10,
    }
}