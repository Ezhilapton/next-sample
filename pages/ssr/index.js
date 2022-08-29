function ServerSR({ posts }) {
    return (
        <>
            {
                posts.map((data) => (
                    <div key={data.id}>
                        <h2 onClick={() => router.push(`/post/${data.id}`)}>{data.title}</h2>
                    </div>
                ))
            }
        </>
    )
}
export default ServerSR

export async function getServerSideProps() { <h1>SSR</h1>
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}