import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Form, Modal} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import {changeAvaatar} from "../../http/userAPI";

const ChangeAvatar = observer(({show, onHide}) => {
    const userToken = localStorage.getItem('token')
    let userInfo;
    if (userToken) {
        userInfo = jwt_decode(userToken)
    }
    const [file, setFile] = useState(null)
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const changeAvatar = () => {
        const formData = new FormData()
        formData.append('userId', userInfo.id)
        formData.append('img', file)
        changeAvaatar(formData).then(data => onHide())
        alert('Твой аватар изменен! Перезайди в приложение, чтобы изменения вступили в силу!')
    }
    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Смена Аватара! Не будь как все! :)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="mt-3"
                                  type="file"
                                  onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={changeAvatar}>Изменить!</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ChangeAvatar;