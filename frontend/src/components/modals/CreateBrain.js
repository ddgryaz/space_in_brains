import React, {useState} from 'react';
import {Button, Form, Modal,} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {createBrain} from "../../http/brainAPI";

const CreateBrain = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)


    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addBrain = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
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
                                  value={description}
                                  onChange={e => setDescription(e.target.value)}
                                  placeholder={"Введите описание Брейна"}
                    />
                    <Form.Control className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
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