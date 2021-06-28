import React, {useEffect, useRef, useState} from 'react';
import './chat.scss'
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {Button, Image, Toast} from "react-bootstrap";

const Chat = observer(() => {
    const userToken = localStorage.getItem('token')
    let userInfo;
    if (userToken) {
        userInfo = jwt_decode(userToken)
    }
    const username = userInfo.login
    const avatar = userInfo.img
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef();
    const [connected, setConnected] = useState(false);
    const socket_url = process.env.REACT_APP_SOCKET_URL

    useEffect(() => {
        socket.current = new WebSocket(socket_url)


        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                username,
                id: Date.now(),
                avatar
            }
            socket.current.send(JSON.stringify(message))
        }

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [message, ...prev])
        }

        socket.current.onclose = () => {
            console.log('Сокет закрыт')
        }

        socket.current.onerror = () => {
            console.log('Сокет ошибка')
        }
    }, [])

    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            event: 'message',
            avatar
        }
        socket.current.send(JSON.stringify(message));
        setValue('')
    }

    if (!connected) {
        return (
            <div style={{color: 'red'}}>
                SOCKET ERROR
            </div>
        )
    }

    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Введите сообщение"/>
                    <Button variant={"success"} onClick={sendMessage} className={"ml-2"}>Отправить</Button>
                </div>
                <div className="messages">
                    {messages.map(mess =>
                        <div key={mess.id}>
                            {mess.event === 'connection'
                                ? <div className="connection_message">
                                    Пользователь {mess.username} подключился
                                </div>
                                : <div className="center"><Toast className="m-1">
                                    <Toast.Header closeButton={false}>
                                        <Image width={35} height={35} src={process.env.REACT_APP_API_URL + mess.avatar}/>
                                        <strong className="mr-auto">{mess.username}</strong>
                                    </Toast.Header>
                                    <Toast.Body>{mess.message}</Toast.Body>
                                </Toast></div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
});

export default Chat;