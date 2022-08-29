import { useState } from "react"

function CommentsList({ posts }) {
    const [comments, setComments] = useState([])
    
    const fetchData = async () => {
        const response = await fetch("/api/comments/details")
        const data = await response.json()
        setComments(data)   
        console.log(data);   
    }
    const deleteComment = async (id) =>{
        const response = await fetch(`/api/comments/${id}`,{
            method:"DELETE"
        })
        const data = await response.json()
        console.log(data);
        fetchData()
    }

    return (
        <>
        <h1>List of comments</h1>
        <button onClick={()=> fetchData()}>Filter data</button>
            {
                comments.map((data) => (
                    <div key={data.id}>
                        <h2>{data.comment} <button onClick={() => deleteComment(data.id)}>Delete</button></h2>
                    </div>
                ))
            }
        </>
    )
}
export default CommentsList

