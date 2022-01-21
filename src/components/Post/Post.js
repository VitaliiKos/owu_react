import React from 'react';
import {Link} from "react-router-dom";

import css from './post.module.css'

const Post = ({posts}) => {
    const {title, id} = posts;
    return (

        <div>
            <div className={css.post_title}>
                {id}) {title}
                <Link to={id.toString()} state={{...posts}}>
                    <button>Detail</button>
                </Link>
            </div>

        </div>

    );
};

export {Post};