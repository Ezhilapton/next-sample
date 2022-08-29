import {useRouter} from 'next/router';

function MultiplePost({ posts }) {
   const router = useRouter()
    return (
        <>
            {
                posts.map((data) => (
                    <div key={data.id}>
                        <h2 onClick={() => router.push(`/post/${data.id}`)}>{data.title}</h2>
                        {/* <h6>{data.body}</h6> */}
                    </div>
                ))
            }
        </>
    )
}
export default MultiplePost

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}
