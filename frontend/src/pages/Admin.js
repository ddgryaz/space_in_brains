import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrain from "../components/modals/CreateBrain";

const Admin = () => {
    const [brainVisible, setBrainVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"success"} className='mt-2' onClick={() => setBrainVisible(true)}>Добавить Брейн</Button>
            <Button variant={"success"} className='mt-2'>Добавить Пользователя || Администратора</Button>
            <CreateBrain show={brainVisible} onHide={() => setBrainVisible(false)}/>
        </Container>
    );
};

export default Admin;