
import { useRouter } from 'next/router';

function PostData({ posts }) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div key={posts.id}>
        <h2 >{posts.id}-{posts.title}</h2>
        <h6>{posts.body}</h6>
      </div>
    </>
  )
}
export default PostData

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const data = await response.json()

  // const paths = data.map((data) => {
  //   return {
  //     params: {
  //       id: data.id
  //     }
  //   }
  // })

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
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await response.json()

  return {
    props: {
      posts: data
    }
  }
}
