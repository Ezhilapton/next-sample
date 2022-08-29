function SSRDetails({ posts }) {
    return (
        <>
      <div key={posts.id}>
        <h1>SSR</h1>
        <h2 >{posts.id}-{posts.title}</h2>
        <h6>{posts.body}</h6>
      </div>
    </>
    )
}
export default SSRDetails

export async function getServerSideProps(context) {
    const {params,req,res} = context
    const response = await fetch(`http://localhost:4000/products/${params.id}`)
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}