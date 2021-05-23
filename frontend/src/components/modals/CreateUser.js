import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {registrationWithRole} from "../../http/userAPI";

const CreateUser = observer(({show, onHide}) => {
    const addUser = () => {
        registrationWithRole(login, password, role).then(data => onHide())
        alert('Пользователь создан!')
    }
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Создать пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="mt-3"
                                  value={login}
                                  onChange={e => setLogin(e.target.value)}
                                  placeholder={"Введите Login"}
                    />
                    <Form.Control className="mt-3"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  placeholder={"Введите Password"}
                    />
                    <Form.Check className={'mt-3'} inline label="Пользователь" name="group1"
                                type={"radio"} id={'USER'} value={role} onChange={e => setRole(e.target.id)}/>
                    <Form.Check className={'mt-3'} inline label="Администратор" name="group1"
                                type={"radio"} id={'ADMIN'} value={role} onChange={e => setRole(e.target.id)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addUser}>Создать</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateUser;