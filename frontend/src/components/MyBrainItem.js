import React from 'react';
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom";
import {BRAIN_ROUTE} from "../utils/consts";

const MyBrainItem = ({brain}) => {
    const history = useHistory()
    return (
        <div style={{width: 50, height: 50, margin: 20, cursor: 'pointer'}}
             onClick={() => history.push(BRAIN_ROUTE + '/' + brain.id)}>
            <Image width={50} height={50} src={process.env.REACT_APP_API_URL + brain.img}/>
        </div>
    );
};

export default MyBrainItem;