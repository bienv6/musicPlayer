import React, {useEffect, useState} from 'react';
import axios from "axios";

const Comments = (props) => {
    let currentTrack = props.currentTrack;

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

    useEffect(() => {
        axios.get(`http://localhost:8080/rest/comment/${currentTrack.id}`)
            .then((response) => {
                setComments(response.data);
                console.log(`comments on this song are: ${response.data}`)
            })
            .catch(error => console.log(`Error Loading Comments:  ${error}`))

    }, [])

    return (
        <div className="commentsContainer">

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