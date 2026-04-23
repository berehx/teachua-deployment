import React from 'react';
import {Button, Input} from "antd";
import {MailOutlined, PhoneOutlined} from "@ant-design/icons";

const RegistrationInput = ({disabledButton}) => {

    console.log(disabledButton)

    return (
        <div>
            <div className="registration-or"><span className="label-or">або</span></div>
            <div className="registration-row">
                <span className="label">
                    Прізвище
                </span>
                <div className="registration-box"><Input className="registration-input"
                                                         placeholder="Введіть ваше прізвище"/>
                </div>
            </div>
            <div className="registration-row">
                <span className="label">
              Ім'я
                </span>
                <div className="registration-box"><Input className="registration-input"
                                                         placeholder="Введіть ваше ім'я"/>
                </div>
            </div>
            <div className="registration-row">
                <span className="label">
             Телефон
                </span>
                <div className="registration-box"><Input className="registration-input" placeholder="+38(___) ___ __ __"
                                                         suffix={<PhoneOutlined className="phone-icon"/>}>
                </Input>
                </div>
            </div>
            <div className="registration-row">
                <span className="label">
                 Email
                </span>
                <div className="registration-box"><Input className="registration-input" placeholder="Введіть ваш емейл"
                                                         suffix={<MailOutlined classname="mail-icon"/>}>
                </Input>
                </div>
            </div>
            <div className="registration-footer"><Button className="registration-button"
                                                         style={{opacity: disabledButton === false ? '1' : '0.4'}}
                                                         disabled={disabledButton}>Зареєструватися</Button>
            </div>
        </div>

    )
}

export default RegistrationInput;
