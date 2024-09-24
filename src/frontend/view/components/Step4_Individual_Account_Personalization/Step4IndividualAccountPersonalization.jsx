// src/Step4IndividualAccountPersonalization.js
import './Step4IndividualAccountPersonalizationStyles.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function Step4IndividualAccountPersonalization({ allSelected, setUserInput, userInput }) {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);

    useEffect(() => {
        if (userInput.month && userInput.year && userInput.day) {
            setSelectedDay(userInput.day);
            setSelectedMonth(userInput.month);
            setSelectedYear(userInput.year);
        }
    }, [userInput]);

    const setSelected = (name, value) => {
        if (name === 'month') {
            setSelectedMonth(value);
            setUserInput((prev) => ({
                ...prev,
                step4: { ...prev.step4, month: value },
            }));
        } else if (name === 'day') {
            setSelectedDay(value);
            setUserInput((prev) => ({
                ...prev,
                step4: { ...prev.step4, day: value },
            }));
        } else if (name === 'year') {
            setSelectedYear(value);
            setUserInput((prev) => ({
                ...prev,
                step4: { ...prev.step4, year: value },
            }));
        }
    };

    useEffect(() => {
        if (selectedDay !== null && selectedYear !== null && selectedMonth !== null) {
            allSelected(true);
        }
    }, [selectedDay, selectedYear, selectedMonth, allSelected]);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const years = Array.from({ length: 124 }, (_, i) => 1900 + i);

    return (
        <div className="step4IndividualAccountPersonalization">
            <p id="mainLabel">Next, when were you born?</p>
            <div className="dropdownContainers">
                <div id="monthDropdown" className="custom-select">
                    <CustomDropdown
                        options={months}
                        selectedValue={selectedMonth}
                        onChange={(value) => setSelected('month', value)}
                        placeholder="Month"
                    />
                </div>
                <div id="dayDropdown" className="custom-select">
                    <CustomDropdown
                        options={days.map(String)} // Convert numbers to strings for the dropdown
                        selectedValue={selectedDay}
                        onChange={(value) => setSelected('day', value)}
                        placeholder="Day"
                    />
                </div>
                <div id="yearDropdown" className="custom-select">
                    <CustomDropdown
                        options={years.map(String)} // Convert numbers to strings for the dropdown
                        selectedValue={selectedYear}
                        onChange={(value) => setSelected('year', value)}
                        placeholder="Year"
                    />
                </div>
            </div>
        </div>
    );
}

Step4IndividualAccountPersonalization.propTypes = {
    allSelected: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.object.isRequired,
};
