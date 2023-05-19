import React, {useEffect, useState} from 'react';
import axios from "axios";
import {TextField} from "@mui/material";

const Comments = (props) => {
    let currentTrack = props.currentTrack;
    let signedIn     = props.signedIn;
    const baseUrl    = "http://localhost:8080/rest/comment/" ;

    const defaultComments = () => {
        return (
            [
                {
                    songId: 2,
                    commentedBy: 'robocop123',
                    comment: 'this song is ok, but I prefer the last single over this one'
                },
                {
                    songId: 2,
                    commentedBy: 'alanTheGodabc',
                    comment: 'this song is fire'
                },
                {
                    songId: 2,
                    commentedBy: 'robocop123',
                    comment: 'this song is ok, but I prefer the last single over this one'
                },
                {
                    songId: 2,
                    commentedBy: 'alanTheGodabc',
                    comment: 'this song is fire'
                },
                {
                    songId: 2,
                    commentedBy: 'robocop123',
                    comment: 'this song is ok, but I prefer the last single over this one'
                },
                {
                    songId: 2,
                    commentedBy: 'alanTheGodabc',
                    comment: 'this song is fire'
                },
                {
                    songId: 2,
                    commentedBy: 'robocop123',
                    comment: 'this song is ok, but I prefer the last single over this one'
                },
                {
                    songId: 2,
                    commentedBy: 'alanTheGodabc',
                    comment: 'this song is fire'
                },
                {
                    songId: 2,
                    commentedBy: 'robocop123',
                    comment: 'this song is ok, but I prefer the last single over this one'
                },
                {
                    songId: 2,
                    commentedBy: 'alanTheGodabc',
                    comment: 'this song is fire'
                }
            ])
    }
    const [comments, setComments] = useState(defaultComments);

    // useEffect(() => {
    //     axios.get(`${baseUrl}${currentTrack.id}`)
    //         .then((response) => {
    //             setComments(response.data);
    //             console.log(`comments on this song are: ${response.data}`)
    //         })
    //         .catch(error => console.log(`Error Loading Comments:  ${error}`))
    //
    // }, []);

    const submitNewComment = (e) => {
        let newComment = e.target.value;
        axios.post(baseUrl, {
            "comment": newComment,
            "songId":currentTrack.id
        }).then(response => {
            console.log(response.data);
        }).catch(error =>
        {console.log(`there was an issue adding comment ${error}`)})

    }


    return (
        <div className="commentsContainer">
            <div className="addComment">

                <TextField id="standard-basic" label="Standard" variant="standard" />
                <buttom type="submit">Add Comment</buttom>

            </div>

                {comments.map((comment, index) => (
                    <div key={index} className="comments">
                        <div className="commentInfo">
                            <span className="commentedBy">{comment.commentedBy}</span>
                            <span className="comment"> {comment.comment}</span>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Comments;