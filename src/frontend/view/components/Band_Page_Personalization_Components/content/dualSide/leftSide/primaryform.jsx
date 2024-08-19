import PropTypes from "prop-types";
import { useRef, useEffect, useCallback } from "react";
import "./primaryForm.css";

const BandNameYear = ({ setInputs, status, closePage, setPrimaryPageStatus, inputs }) => {
    const bandName = useRef(null);
    const year = useRef(null);
    const genre = useRef(null);

    // id
    const bandNameId = useRef(null);
    const bandYearId = useRef(null);
    const genreId = useRef(null);

    // Function to handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            firstPage: {
                ...prevState.firstPage,
                [name]: value, // Update the specific field in the state
            },
        }));
    };

    const collectData = useCallback(() => {
        let passed = true;

        const sanitizedBandname = bandName.current.value.trim();
        const sanitizedYear = parseInt(year.current.value.trim(), 10);
        const saniizedGenre = genre.current.value;

        console.log(sanitizedBandname);
        console.log(sanitizedYear);
        console.log(saniizedGenre);

        if (!/^[a-zA-Z0-9_-]+$/.test(sanitizedBandname) || sanitizedBandname == null) {
            bandNameId.current.textContent = "Please enter a valid band name*";
            passed = false;
        } else {
            bandNameId.current.textContent = "";
        }

        if (
            !/^\d+$/.test(sanitizedYear) ||
            sanitizedYear > new Date().getFullYear() ||
            sanitizedYear < 1900 ||
            isNaN(sanitizedYear)
        ) {
            bandYearId.current.textContent = "Please enter a valid year*";
            passed = false;
        } else {
            bandYearId.current.textContent = "";
        }

        if (saniizedGenre === "") {
            genreId.current.textContent = "Please select a genre*";
            passed = false;
        } else {
            genreId.current.textContent = "";
        }

        if (passed) {
            setInputs((prevState) => ({
                ...prevState,
                firstPage: {
                    bandName: bandName.current.value,
                    year: year.current.value,
                    genre: genre.current.value,
                },
            }));

            closePage((prev) => !prev);
            console.log("Adjusted");
        } else {
            setPrimaryPageStatus((prev) => !prev);
        }
        console.log(" submit successfully");
    }, [setInputs, closePage, setPrimaryPageStatus]);

    useEffect(() => {
        console.log("status" + status);
        if (status) {
            collectData();
            console.log("Adjust");
        }
    }, [status, collectData, closePage]);

    // Safeguard: Provide default values if inputs is not properly initialized
    const bandNameValue = inputs?.firstPage?.bandName || ''; // Default to empty string if undefined
    const yearValue = inputs?.firstPage?.year || ''; // Default to empty string if undefined
    const genreValue = inputs?.firstPage?.genre || ''; // Default to empty string if undefined

    return (
        <div className = "bandNameYear">
            <div className="formContainer">
                <h3>First, can you provide us some basic information about your band?</h3>

                <div className="element" id="element1">
                    <label>The band is called...</label>
                    <input
                        type="text"
                        placeholder="Black Veil Brides"
                    />
                </div>

                    
                <div className="element" id="element2">
                    <div className="subElements">
                        <label>It was formed in the year...</label>
                        <input
                            type="number"
                            min="1900"
                            max="2100"
                            placeholder="e.g., 2000"
                        />
                    </div>

                    <div className="subElements">
                        <label>{`Band's genre of music is...`}</label>
                        <div className="custom-select">
                            <select
                                ref={genre}
                                name="genre" // Added name attribute for handling changes
                                value={genreValue} // Use the safeguarded default value
                                onChange={handleChange} // Added onChange handler
                            >
                                <option value="">--Select an option--</option>
                                <option value="alternative">Alternative</option>
                                <option value="blues">Blues</option>
                                <option value="classical">Classical</option>
                                <option value="country">Country</option>
                                <option value="electronic">Electronic</option>
                                <option value="folk">Folk</option>
                                <option value="gospel">Gospel</option>
                                <option value="hip-hop">Hip-Hop</option>
                                <option value="jazz">Jazz</option>
                                <option value="metal">Metal</option>
                                <option value="pop">Pop</option>
                                <option value="r&b">R&B</option>
                                <option value="rock">Rock</option>
                                <option value="world">World</option>
                            </select>
                            <span className="errorTag" ref={genreId}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

BandNameYear.propTypes = {
    setInputs: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
    closePage: PropTypes.func.isRequired,
    setPrimaryPageStatus: PropTypes.func.isRequired,
    inputs: PropTypes.shape({
        firstPage: PropTypes.shape({
            bandName: PropTypes.string,
            year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            genre: PropTypes.string,
        }),
    }).isRequired,
};

export default BandNameYear;
