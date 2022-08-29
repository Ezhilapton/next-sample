import {useRouter} from 'next/router';

function News({ posts }) {
   const router = useRouter()
    return (
        <>
            {
                posts.map((data) => (
                    <div key={data.id}>
                        <p >{data.title}</p>
                        {/* <h6>{data.body}</h6> */}
                    </div>
                ))
            }
        </>
    )
}
export default News

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}