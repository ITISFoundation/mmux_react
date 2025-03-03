import React from 'react';

export default function FileSelector(props) {

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            props.setFileName(file.name);
        }
    }

    return (
        < div >
            <input type="file" onChange={handleFileChange} />
        </div >
    );
}