import './Step5IndividualAccountPersonalizationStyles.css';
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function Step5IndividualAccountPersonalization({ allSelected, setUserInput, userInput }) {
    const [countries, setCountries] = useState([]);
    const [countryCities, setCountryCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const citySelectRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectedCountry && selectedCity) {
            setUserInput((prev) => ({
                ...prev,
                step5: {
                    country: selectedCountry,
                    city: selectedCity
                }
            }));
            allSelected(true);
        } else {
            allSelected(false);
        }
    }, [selectedCountry, selectedCity, allSelected]);

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then(response => response.json())
            .then(data => setCountries(data.data.map(item => item.country)))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            if (selectedCountry !== userInput.country) {
                setSelectedCity(""); // Reset city when country changes
            }

            setLoading(true);
            const fetchCities = async () => {
                try {
                    const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ country: selectedCountry })
                    });
                    const data = await response.json();
                    setCountryCities(data.data);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchCities();
        } else {
            setCountryCities([]);
        }
    }, [selectedCountry]);

    return (
        <div className="step5IndividualAccountPersonalization">
            <p id="mainLabel">Next, where do you live?</p>
            <div id="mainContainer">
                <div id="countryFieldContainer">
                    <p id="countryLabel">Country:</p>
                    <CustomDropdown
                        options={countries}
                        onChange={setSelectedCountry}
                        selectedValue={selectedCountry}
                        placeholder="--Select a country--"
                    />
                </div>
                <div id="cityFieldContainer">
                    <p id="cityLabel">City:</p>
                    <CustomDropdown
                        options={loading ? ["Loading cities..."] : countryCities}
                        onChange={setSelectedCity}
                        selectedValue={selectedCity}
                        placeholder={loading ? "Loading..." : "--Select a city--"}
                    />
                </div>
            </div>
        </div>
    );
}

Step5IndividualAccountPersonalization.propTypes = {
    allSelected: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.object.isRequired,
};
