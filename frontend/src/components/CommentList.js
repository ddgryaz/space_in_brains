import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CommentItem from "./CommentItem";

const CommentList = observer(() => {
    const {comment} = useContext(Context)
    return (
        <Row className="d-flex">
            {comment.comments.map(comment =>
                <CommentItem key={comment.id} comment={comment}/>
            )}
        </Row>
    );
});

export default CommentList;