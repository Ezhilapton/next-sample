import Link from 'next/link';

function Post() {
    return (
        <>
            <h1>
                Post
            </h1>
            <h1> <Link href="/post/firstpost" passHref>navigate to Post1</Link></h1>
            <h1>
            <Link href="/post/multiple" passHref>Multiple Post</Link>                
            </h1>
        </>
    )
}
export default Post