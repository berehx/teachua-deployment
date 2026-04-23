import React from 'react';
import {Footer} from "antd/es/layout/layout";
import FooterPartners from "./FooterPartners";
import FooterDonate from "./FooterDonate";
import './css/Footer.less'
import FooterSocials from "./FooterSocials";


const FooterComponent = () => {
    return (
        <Footer className="footer">
            <FooterSocials/>
            <FooterPartners/>
            <FooterDonate/>
        </Footer>
    );
};

export default FooterComponent;