import './Step5IndividualAccountPersonalizationStyles.css';
import React, { useEffect, useState, useRef } from 'react';

export default function Step5IndividualAccountPersonalization({ allSelected }){
    const [countries, setCountries] = useState([]);
    const [countryCities, setCountryCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const citySelectRef = useRef(null);
    const [loading, setLoading] = useState(false);

    // Sets the allSelected flagger variable as true or false depending on the state of both eventListeners
    useEffect(() => {
        if(selectedCountry !== "" && selectedCity !== ""){
            allSelected(true);
        } else {
            allSelected(false);
        }
    }, [selectedCountry, selectedCity, allSelected]);

    // Fetches countries when the component mounts
    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then(response => response.json())
            .then(data => setCountries(data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Fetch cities data when selectedCountry changes
    useEffect(() => {
        if (selectedCountry) {
            setSelectedCity(""); // Reset selected city when country changes
            setLoading(true); // Set loading to true when starting to fetch cities

            const fetchCities = async () => {
                try {
                    const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ country: selectedCountry })
                    });

                    const data = await response.json();

                    // Sort the cities alphabetically before setting them
                    const sortedCities = data.data.sort((a, b) => a.localeCompare(b));

                    // console.log(data.data); // Log the data to inspect its structure
                    setCountryCities(data.data); // Set the cities after fetching
                } catch (error) {
                    console.error('Error fetching cities:', error);
                } finally {
                    setLoading(false); // Set loading to false after fetch completes
                }
            };

            fetchCities();
        } else {
            setCountryCities([]); // Clear cities if no country is selected
        }
    }, [selectedCountry]);

    return(
        <div className="step5IndividualAccountPersonalization">
            <p id="mainLabel">Next, where do you live?</p>
            <div id="mainContainer">

                {/* Country Field Container */}
                <div id="countryFieldContainer">

                    {/* Country Input Label */}
                    <p id="countryLabel">Country: </p>

                    {/* Country Input Field */}
                    <select 
                        name="countryInput" 
                        id="countryInputDropdown" 
                        onChange={(e) => setSelectedCountry(e.target.value)} 
                        value={selectedCountry}
                    >
                        <option value="" disabled hidden>--Select a country--</option>
                        {countries.map((item, index) => (
                            <option key={index} value={item.country}>{item.country}</option>
                        ))}
                    </select>
                </div>

                {/* City Field Container */}
                <div id="cityFieldContainer">

                    {/* City Input Label */}
                    <p id="cityLabel">City: </p>

                    {/* City Input Field */}
                    <select 
                        name="cityInput" 
                        id="cityInputDropdown" 
                        onChange={(e) => setSelectedCity(e.target.value)} 
                        value={selectedCity} 
                        ref={citySelectRef}
                    >
                        <option value="" hidden>--Select a city--</option>

                        {loading ? (
                            <option value="" disabled>Loading country's cities...</option>
                        ) : (
                            countryCities.length > 0 ? (
                                countryCities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))
                            ) : (
                                <option value="" disabled>No cities available</option>
                            )
                        )}
                    </select>
                </div>
            </div>
        </div>
    );
}
