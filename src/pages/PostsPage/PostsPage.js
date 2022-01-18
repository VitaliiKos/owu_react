import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPost] = useState([]);


    useEffect(() => {
        postService.getAll().then(value => setPost([...value]))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;