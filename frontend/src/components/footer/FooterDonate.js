import React from 'react';
import {Button} from "antd";

const FooterDonate = () => {
    return (
        <div className="footer-donate">
            <div className="article">
                Як допомогти проєкту?
            </div>
            <div className="description">
                <div className="text">
                    <span>Ініціатива потребує постійної фінансової підтримки,</span>
                    <span>аби покривати щоденні витрати на роботу.</span>
                </div>
            </div>
            <a target="blank" href="#"><Button className="flooded-button donate-button">Допомогти
                проекту</Button> </a>
        </div>
    );
};

export default FooterDonate