import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }

        postService.getById(id).then(value => setPost({...value}))
    }, [id, state]);

    return (

        <div>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;