import React from 'react';
import Image from "react-bootstrap/Image";

const MyBrainItem = ({brain}) => {
    return (
        <div style={{width: 50, height: 50, margin: 20}}>
            <Image width={50} height={50} src={process.env.REACT_APP_API_URL + brain.img}/>
        </div>
    );
};

export default MyBrainItem;