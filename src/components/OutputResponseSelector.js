import React, { useState } from 'react';
// import { MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel } from '@material-ui/core';
const responses = ['Output1', 'Output2', 'Output3', 'Output4'];

export default function OutputResponseSelector() {
    const [selectedResponse, setSelectedResponse] = useState(responses[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLogEnabled, setIsLogEnabled] = useState(false);

    const handleResponseClick = (response) => {
        setSelectedResponse(response);
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {selectedResponse}

                {isDropdownOpen && (
                    <ul>
                        {responses.map((response, index) => (
                            <li key={index} onClick={() => handleResponseClick(response)}>
                                {response}
                            </li>
                        ))}
                    </ul>
                )}
                <label>
                    <input
                        type="checkbox"
                        checked={isLogEnabled}
                        onChange={() => setIsLogEnabled(!isLogEnabled)}
                    />
                    Log
                </label>
            </div>
        </div>
    );
};
