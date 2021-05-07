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
            margin: '1%'

        }}>
            <div style={{color: 'orangered', paddingLeft: 10, paddingTop: 5}}>
                Пользователь: <span style={{color: '#7f3d19', fontWeight: "bold"}}>{comment.user.login}</span>
            </div>
            <div style={{color: 'white', paddingLeft: 10, paddingTop: 5, fontSize: 14, width: 290, height: 70, borderTop: '1px dotted black'}}>
                Добавил в коллекцию Брейн - <span style={{fontSize: 16, color: '#c70505'}}>{comment.comment}</span>
            </div>
        </div>
    );
};

export default CommentItem;