import React, {useContext} from "react";
import {SearchContext} from "../../context/SearchContext";
import Cities from "./Cities";
import AuthMenu from "./AuthMenu";

const HeaderRight = () => {
    const {setClubs} = useContext(SearchContext);

    return (
        <div className="right-side-menu">
            <Cities setClubs={setClubs}/>
            <AuthMenu/>
        </div>
    )
};

export default HeaderRight;