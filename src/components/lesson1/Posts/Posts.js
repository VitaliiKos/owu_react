import {useEffect, useState} from "react";
import Post from "../Posts/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])
    return(
        <div>
            {posts.map(value => <Post key={value.id} item={value} styleClass= {'postInfo'}/>)}
        </div>
    )
}


export default Posts;