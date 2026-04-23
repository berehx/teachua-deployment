import React, {useState} from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './css/AutoComplete.css'

const MapAutoComplete = () => {
    const [value, setValue] = useState(null);
  //  const [request, setRequest] = useState("");

    const handleSelect = address => {
        console.log(address)

/*        geocodeByAddress("Lviv")
            .then(results => getLatLng(results[0]).then(result => result))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.log('Error', error));*/
    };

/*    const handleSearch = address => {
        setRequest(document.getElementById("react-select-3-input").value);
    };*/

    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyBdEOt1rGu5B5h5-wpS4WnTA5gD7-O6R30"
                selectProps={{
                    className:"map-select-auto-complete",
                    placeholder:"Введіть адресу",
                    noOptionsMessage: () => "Нічого не знайдено",
                    loadingMessage: () => "Пошук...",
                //    onKeyDown: handleSearch,
                    onChange: handleSelect,
                }}
                autocompletionRequest={{
                  //  input: "Великі Мости " + request,
                    componentRestrictions: {
                        country: 'ua',
                    }
                }}



            />
        </div>
    );
};

export default MapAutoComplete;