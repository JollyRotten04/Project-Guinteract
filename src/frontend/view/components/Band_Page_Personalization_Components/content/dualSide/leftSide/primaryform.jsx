import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";
import "./primaryForm.css";

const BandNameYear = ({ setInputs, status, closePage, setPrimaryPageStatus, inputs, isAllFilled }) => {
    const bandName = useRef(null);
    const year = useRef(null);
    
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select an Option');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // id references for error messages
    const bandNameId = useRef(null);
    const bandYearId = useRef(null);

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

    useEffect(() => {
        console.log(inputs);
        if (inputs) {
            const { firstPage } = inputs;

            if((firstPage?.bandName !== '') && (firstPage?.year !== '') && (firstPage?.selected !== '')){
                isAllFilled(inputs);
            }

            else{
                isAllFilled(false);
            }
        }
    }, [inputs]); // Dependency array includes inputs to trigger when inputs change


    const collectData = useCallback(() => {
        let passed = false;

        // Safeguard to ensure refs are not null before accessing their value
        const sanitizedBandname = bandName.current ? bandName.current.value.trim() : '';
        const sanitizedYear = year.current ? parseInt(year.current.value.trim(), 10) : '';

        // console.log(sanitizedBandname);
        // console.log(sanitizedYear);
        // console.log(sanitizedGenre);

        if (/^[a-zA-Z0-9_\-\s]+$/.test(sanitizedBandname) || sanitizedBandname === '') {
            passed = true;
            bandNameId.current.textContent = "";
        } else {
            bandNameId.current.textContent = "Please enter a valid band name*";
        }

        if (
            /^\d+$/.test(sanitizedYear) ||
            sanitizedYear > new Date().getFullYear() ||
            sanitizedYear < 1900 ||
            isNaN(sanitizedYear)
        ) {
            bandYearId.current.textContent = "";
            passed = true;
        } else {
            bandYearId.current.textContent = "Please enter a valid year*";
        }

        if(selected === ''){
            bandYearId.current.textContent = "Please select a genre*";
        }

        if (passed) {
            setInputs((prevState) => ({
                ...prevState,
                firstPage: {
                    bandName: sanitizedBandname,
                    year: sanitizedYear,
                    genre: selected,
                },
            }));

            closePage((prev) => !prev);
        } else {
            setPrimaryPageStatus((prev) => !prev);
        }

    }, [setInputs, closePage, setPrimaryPageStatus]);


    useEffect(() => {
        if (status) {
            collectData();
        }
    }, [status, collectData]);
    
        const selectOption = (option) => {
            setSelected(option);

            setIsOpen(false);
        };
    
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
    
        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        useEffect(() => {
            console.log(selected)
        }, [selected])

    return (
        <div className="bandNameYear">
            <div className="formContainer">

                <div className="element" id="element1">
                    <label>The band is called...</label>
                    <input
                        type="text"
                        id="bandNameInputField"
                        placeholder="Black Veil Brides"
                        ref={bandName}
                        name="bandName" // Added name attribute for handling changes
                        value={inputs?.firstPage?.bandName || ''} // Use the safeguarded default value
                        onChange={handleChange} // Added onChange handler
                    />
                    <span className="errorTag" ref={bandNameId}></span> {/* Error message span */}
                </div>
                    
                <div className="element" id="element2">
                    <div className="subElements">
                        <label>It was formed in the year...</label>
                        <input
                            type="number"
                            id="bandFormationYearInput"
                            min="1900"
                            max="2100"
                            placeholder="e.g., 2000"
                            ref={year}
                            name="year" // Added name attribute for handling changes
                            value={inputs?.firstPage?.year || ''} // Use the safeguarded default value
                            onChange={handleChange} // Added onChange handler
                        />
                        <span className="errorTag" ref={bandYearId}></span> {/* Error message span */}
                    </div>

                    <div className="subElements">
                        <label>{`Band's genre of music is...`}</label>
                        <div 
                            id="bandGenreSelection"
                            name="genre" // Added name attribute for handling changes
                            value={inputs?.firstPage?.genre || ''} // Use the safeguarded default value
                            onChange={handleChange} // Added onChange handler
                            className="custom-select" 
                            ref={dropdownRef}>
                                
                                <div className="select-selected" onClick={toggleDropdown}>{selected}</div>
                                
                                {isOpen && (
                                <div className="select-items">
                                    <div onClick={() => selectOption('')}>--Select an option--</div>
                                    <div onClick={() => selectOption('Alternative')}>Alternative</div>
                                    <div onClick={() => selectOption('Blues')}>Blues</div>
                                    <div onClick={() => selectOption('Classical')}>Classical</div>
                                    <div onClick={() => selectOption('Country')}>Country</div>
                                    <div onClick={() => selectOption('Electronic')}>Electronic</div>
                                    <div onClick={() => selectOption('Folk')}>Folk</div>
                                    <div onClick={() => selectOption('Gospel')}>Gospel</div>
                                    <div onClick={() => selectOption('Hip-Hop')}>Hip-Hop</div>
                                    <div onClick={() => selectOption('Jazz')}>Jazz</div>
                                    <div onClick={() => selectOption('Metal')}>Metal</div>
                                    <div onClick={() => selectOption('Pop')}>Pop</div>
                                    <div onClick={() => selectOption('R&B')}>R&B</div>
                                    <div onClick={() => selectOption('Rock')}>Rock</div>
                                    <div onClick={() => selectOption('World')}>World</div>
                                </div>
                                )}
                            {/* <span className="errorTag" ref={genreId}></span> */}
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
