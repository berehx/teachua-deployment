import React, {useState} from 'react';
import {Button, Modal, Switch} from 'antd';
import './css/Registration.less';
import RegistrationRoles from "./RegistrationRoles";
import RegistrationSocial from "./RegistrationSocial";
import RegistrationInput from "./RegistrationInput";


const Registration = () => {
    const [visible, setVisible] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    return (
        <>
            <Button type="" onClick={() => setVisible(true)}>
                Зареєструватися
            </Button>
            <Modal
                className="modal-registration"
                centered
                width={520}
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <div className="registration-header">
                    Реєстрація
                </div>
                <div className="registration-content">
                    <RegistrationRoles setDisabledButton={setDisabledButton} disabledButton={disabledButton}/>
                    <RegistrationSocial/>
                    <RegistrationInput disabledButton={disabledButton}/>
                </div>
            </Modal>
        </>
    );
};

export default Registration;
