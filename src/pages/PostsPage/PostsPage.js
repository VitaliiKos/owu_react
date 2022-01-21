import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Post} from "../../components";
import {postService} from "../../services/post.service";
import css from './posts.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={css.post_block}>
            <div className={css.postList}>
                {posts.map(post => <Post key={post.id} posts={post}/>)}
            </div>

            <div className={css.post_detail_block}>
                {/*<PostDetailPage/>*/}
                <Outlet/>
            </div>


        </div>

    );
};

export {PostsPage};