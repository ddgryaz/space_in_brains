import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import MyBrainItem from "./MyBrainItem";

const MyBrainsList = observer(() => {
    const {brain} = useContext(Context)
    return (
        <Row className="d-flex">
            {brain.brains.map(brain =>
                <MyBrainItem key={brain.id} brain={brain}/>
            )}
        </Row>
    );
});

export default MyBrainsList;