import React, {useContext, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createBrain} from "../../http/brainAPI";

const CreateBrain = observer(({show, onHide}) => {
    const {brain} = useContext(Context)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addBrain = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        createBrain(formData).then(data => onHide())
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
                    Добавить Брейн
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название Брейна"}
                    />
                    <Form.Control className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button variant={'outline-dark'} onClick={addInfo}>Добавить описание</Button>
                    {info.map(i =>
                        <Row className="mt-3" key={i.number}>
                            <Col md={4}>
                                <Form.Control/>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder="Введите описание"/>
                            </Col>
                            <Col md={4}>
                                <Button variant={"outline-danger"} onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addBrain}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBrain;