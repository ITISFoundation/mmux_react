import React, { useState } from 'react';

export default function FileSelector(props) {
    const [fileName, setFileName] = useState(props.defaultFileName || 'No file selected');

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    }

    // function setFileDefault(props) {
    //     if (props.defaultFileName) {
    //         setFileName(props.defaultFileName)
    //     }

    // }

    // setFileDefault(props.defaultFileName)  // not working
    return (
        < div >

            <input type="file" onChange={handleFileChange} />
        </div >
    );
}