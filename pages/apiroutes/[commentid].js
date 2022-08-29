import comments from "../../data/comments"

function commentData({ posts }) {
    return (
        <>
            <div key={posts.id}>
                <h2 >{posts.id}-{posts.comment}</h2>
            </div>
        </>
    )
}
export default commentData

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { commentid: "1" },
            },
            {
                params: { commentid: "2" },
            },
        ],
        // fallback: "blocking",
        fallback: true,
        // fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context
    console.log(comments);
    // const filterData = comments.find((data) => data.id === parseInt(params.commentid))
    
    // we should not make fetch call on our own data with getStaticProps and getServerSideProps
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    // const data = await response.json()

    return {
        props: {
            posts: comments
        }
    }
}
