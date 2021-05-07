import React from 'react';

const CommentItem = ({comment}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: 'darkgrey',
            width: 300,
            height: 100,
            borderRadius: '10px 10px 10px 10px',
            marginTop: '1%'

        }}>
            <div style={{color: 'orangered', paddingLeft: 10, paddingTop: 5}}>
                {comment.userId}
            </div>
            <div style={{color: 'white', paddingLeft: 10, paddingTop: 5, fontSize: 14, width: 290, height: 70, borderTop: '1px dotted black'}}>
                {comment.comment}
            </div>
        </div>
    );
};

export default CommentItem;