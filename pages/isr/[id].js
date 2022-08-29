
import { useRouter } from 'next/router';

function ServerData({ posts }) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
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
export default ServerData

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const data = await response.json()

    return {
    paths: [{
      params: { id: "1" },
    },
    {
      params: { id: "2" },
    },
    ],
    // fallback: "blocking",
    fallback: true,
    // fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`http://localhost:4000/products/${params.id}`)
  const data = await response.json()

  return {
    props: {
      posts: data
    },
    revalidate:10,
  }
}
