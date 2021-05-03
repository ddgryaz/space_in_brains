import React, {useContext, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateBrain = ({show, onHide}) => {
    const {brain} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo([info.filter(i => i.number !== number)])
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
                        placeholder={"Введите название Брейна"}
                    />
                    <Form.Control className="mt-3"
                        type="file"
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
                <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrain;