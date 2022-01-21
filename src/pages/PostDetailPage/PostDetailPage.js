import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {postService} from "../../services/post.service";
import {DetailPost} from "../../components";


const PostDetailPage = () => {
    const post = useLocation();
    const userPost = post.state
    const [choosePost, setChosePost] = useState(null);

    useEffect(() => {
        if (userPost) {
            setChosePost(userPost)
            return
        }
        postService.getById(userPost.id).then(value => setChosePost({...value}))
    }, [userPost]);

    return (
        <div>
            {choosePost && (<DetailPost choosePost={choosePost}/>)}
            <div>

                <Outlet/>

            </div>
        </div>
    );
};

export {PostDetailPage};