import React from 'react';
import {Link} from "react-router-dom";

import css from './detailPost.module.css'

const DetailPost = ({choosePost}) => {

    return (
        <div>
            <div className={css.postDetail}>
                <h3>Post detail</h3>
                <h3>Id: {choosePost.id}</h3>
                <h3>UserId: {choosePost.userId}</h3>
                <h3>Title: {choosePost.title}</h3>
                <em><h3>Body:</h3> {choosePost.body}</em>
                {/*<Link to={choosePost.id + '/comments'} state={{...choosePost}}>*/}
                <Link to={'comments'} state={{...choosePost}}>
                    <button>All Comments</button>
                </Link>
            </div>

        </div>
    );
};

export {DetailPost};