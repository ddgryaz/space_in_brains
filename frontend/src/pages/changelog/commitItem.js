import React from 'react';
import {Image, Toast} from "react-bootstrap";

const CommitItem = ({commit}) => {
    let formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: 'numeric',
        minute: 'numeric'
    });
    return (
        <Toast className="m-auto">
            <Toast.Header closeButton={false}>
                <Image width={35} height={35} src={commit.author.avatar_url}/>
                <strong className="mr-auto">{commit.author.login}</strong>
                <small>{formatter.format(Date.parse(commit.commit.author.date))}</small>
            </Toast.Header>
            <Toast.Body>{commit.commit.message}</Toast.Body>
        </Toast>
    )
};

export default CommitItem;