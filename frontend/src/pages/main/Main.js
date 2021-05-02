import React from 'react';
import './Main.scss';
import python from './../../assets/images/python.png';
import js from './../../assets/images/js.png';
import c from './../../assets/images/C.png';
import {Counter} from "../../components/Counter";


const Main = () => {
    return (
        <div className="body">
            <div className="title">
                <h1>SPACE IN BRAINS</h1>
            </div>
            <div className="images">
                <img className="img" src={python} alt="#"/>
                <img className="img" src={js} alt="#"/>
                <img className="img" src={c} alt="#"/>
            </div>
            <div className="about">
                <h2>О проекте</h2>
                <div className="about__text">
                    <p>Space in Brains представляет собой некий блокнот. Ваш персональный помощник, который позволяет вам отслеживать технологии и инструменты, которые вы еще не освоили. Почему это важно? Даже опытные инженеры имеют много пробелов в знаниях. Благодаря Space in Brains вы можете отследить свои пробелы. Таким образом вы мотивируете себя и окружающих! Каждая технология или инструмент в нашей системе называется - Брейн. Welcome! My dear friend!</p>
                </div>
                <div className="counter">
                    <Counter val={1800} time={1}/>
                </div>
            </div>
        </div>
    );
};

export default Main;