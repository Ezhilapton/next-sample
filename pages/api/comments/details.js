import { comments } from "../../../data/comments";

export default function handler(req, res) {
    if(req.method === "GET"){
        res.status(200).json(comments)
    }else if(req.method === "POST"){
        const resData = req.body.comments
        const data = {
            id:Date.now(),
            comment:resData,
        } 
        comments.push(data)
        console.log(comments);
        res.status(201).json(data)
    }
   
  }