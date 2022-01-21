import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import {UserPosts} from "../../components";

const UserPostsPage = () => {
    const params = useParams();
    const [userPost, setUserPost] = useState([]);

    useEffect(() => {
        userService.getPostsByUsers(params.id).then(value => setUserPost([...value]))
    }, [params.id])
    return (
        <div>
            {userPost.map(post => <UserPosts key={post.id} item={post}/>)};

        </div>
    );
};

export {UserPostsPage};