import React from "react";
import AboutHeader from "./AboutHeader";
import AboutCarousel from "./AboutCarousel";
import {Button, Layout} from "antd";
import AboutDescription from "./AboutDescription";
import AboutChallenge from "./AboutChallenge";

import {items} from "./carousel/CarouselItems";
import AboutCategories from "./AboutCategories";
import AboutNews from "./AboutNews";
import {ROOT_URI} from "../../config/ApplicationConfig";

const AboutComponent = () => {
    return (
        <Layout>
            <AboutHeader/>
            <AboutCarousel items={items}/>
            <AboutDescription/>
            <AboutChallenge
                label='Про челендж "Навчай українською"'
                text='Ми допоможемо вам перейти на українську мову викладання.
                Тут ви можете знайти мотиваційні та практичні вебінари з експертами,
                корисні матеріали, які вдосконалять ваші знання та навички викладати українською.'
                imageUrl={`${ROOT_URI}/static/images/about/challenge.png`}
                buttonLabel="Переглянути матеріали"
            />
            <AboutCategories/>
            <AboutNews/>
            <AboutChallenge
                label='Челендж "Навчай українською"'
                text='Близько тисячі учасників з усієї України уже взяли участь у 21-денному челенджі
                "Навчай українською" для закладів позашкільної освіти, які переходять на українську мову навчання.
                У листопаді 2020 року на українську мову викладання перейшло близько пів сотні гуртків.
                Ми підготували матеріали для тих, хто хоче перейти на українську.'
                imageUrl={`${ROOT_URI}/static/images/about/challenge_2.png`}
                buttonLabel="Дізнатись більше"
            />
        </Layout>
    );
};

export default AboutComponent;