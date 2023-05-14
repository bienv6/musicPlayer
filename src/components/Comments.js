import React, {useEffect, useState} from 'react';
import axios from "axios";

const Comments = (props) => {
    let currentTrack = props.currentTrack;

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/rest/comment/${currentTrack.id}`)
            .then((response) => {
                setComments(response.data);
                console.log(`comments on this song are: ${response.data}`)
            })
            .catch(error => console.log(`Error Loading Comments:  ${error}`))

    }, [])

    return (
        <>
            {comments.map((comment, index) => (
                <div key={index}>
                    <div>
                        <span>{comment.commentedBy}</span> : {comment.comment}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Comments;