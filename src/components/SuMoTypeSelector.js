import { useState } from 'react';
const options = ['Gaussian Process (Surfpack)', 'MLP'];

export default function SuMoTypeSelector() {
    const [selected, setSelected] = useState(options[0]);

    const toggleOption = () => {
        setSelected(selected === options[0] ? options[1] : options[0]);
    };

    return (
        <div>

            <p>SuMo type: {selected}
                <button onClick={toggleOption}>
                    Switch
                </button>
            </p>
        </div>
    );
}