import React, {useContext, useState} from 'react';
import {Layout} from 'antd';
import {SearchContext} from "../../context/SearchContext";
import ClubList from "./ClubList";
import '../map/css/MapModal.css'
import MapComponent from "../map/MapComponent";
import ClubListHeader from "./ClubListHeader";


const ClubListComponent = () => {
    const {clubs, setClubs} = useContext(SearchContext);
    const [loading, setLoading] = useState(false);
    const [mapVisible, setMapVisible] = useState(false);

    return (
        <Layout>
            <ClubListHeader/>
            <ClubList loading={loading} load={setLoading} clubs={clubs} setClubs={setClubs}/>
            <MapComponent visible={mapVisible} setVisible={setMapVisible}/>
        </Layout>)
};

export default ClubListComponent;