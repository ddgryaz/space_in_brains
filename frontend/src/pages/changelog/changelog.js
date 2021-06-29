import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {getCommits} from "../../http/githubAPI";
import {Context} from "../../index";
import CommitItem from "./commitItem";
import {Jumbotron} from "react-bootstrap";
import {Container} from "@material-ui/core";


const Changelog = observer(() => {
    const {commit} = useContext(Context)

    useEffect(() => {
        getCommits().then(data => commit.setCommit(data))
    }, [])
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>История Space In Brains</h1>
                    <p>
                        Благодаря GitHub REST API, на этой странице вы можете наблюдать историю изменения проекта.
                    </p>
                    <p>
                        Представлены последние 15 коммитов. Да, не все нейминги коммитов идеальны...
                    </p>
                </Container>
            </Jumbotron>
            {commit.commits.map(commit =>
                <CommitItem key={commit.id} commit={commit}/>
            )}
        </div>
    );
});

export default Changelog;