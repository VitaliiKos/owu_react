import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import {Comment} from "../../components";

const PostCommentsPage = () => {
    const commentParam = useParams();
    const location = useLocation();
    const [chooseComments, setChooseComments] = useState(null);
    useEffect(() => {
        if ((location.pathname).includes('comments')) {

            postService.getCommentByUserId(commentParam.id)
                .then(value =>
                    setChooseComments(value))
        }
    }, [commentParam, location.pathname])

    return (

        <div>
            {chooseComments && (
                chooseComments.map(itemComment => <Comment key={itemComment.id} itemComment={itemComment}/>))}
        </div>
    );
};

export {PostCommentsPage};