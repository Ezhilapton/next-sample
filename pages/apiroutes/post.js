import { useState } from "react"

function Post() {
    const [comments, setComments] = useState("")
    
    const submitComments = async () => {
              const response = await fetch("/api/comments/details",{
            method:"POST",  
            body:JSON.stringify({comments}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
          console.log("data",data);
          setComments("")
    }


    return (
        <>
        <h1>create of comments</h1>
        <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
        <button onClick={submitComments}>Submit</button>
        </>
    )
}
export default Post