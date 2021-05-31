import React from 'react'
import {useSelector} from 'react-redux'
const Posts=()=>{
    const posts=useSelector((state)=>state.posts)
    console.log(posts)
    return(
        <div>
            <ul>
             {posts.map(post=>{
                return <li>{post.title}</li> 
        })}
        </ul>
        </div>
       
    )
}


export default Posts