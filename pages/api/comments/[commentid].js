import { comments } from "../../../data/comments";

export default function handler(req, res) {
    const {commentid} = req.query
    if(req.method === "GET"){
        const find = comments.find((data)=> data.id === ParseInt(commentid))
        res.status(200).json(find)
    }else if(req.method === "DELETE"){
        const deleteComment = comments.find((data)=> data.id === parseInt(commentid))
        const index = comments.findIndex((data)=> data.id === parseInt(commentid))
        comments.splice(index,1)
        res.status(200).json(deleteComment)
    }
   
  }