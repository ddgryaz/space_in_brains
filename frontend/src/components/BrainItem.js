import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {BRAIN_ROUTE} from "../utils/consts";

const BrainItem = ({brain}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(BRAIN_ROUTE + '/' + brain.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"danger"}>
                <Image width={148} height={150} src={process.env.REACT_APP_API_URL + brain.img}/>
                <div>
                    <div style={{paddingLeft: 5}}>
                        {brain.name}
                    </div>
                </div>
            </Card>
        </Col>
    );
};
export default BrainItem;