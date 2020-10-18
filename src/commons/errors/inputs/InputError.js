import React from 'react';
import '../inputs/InputError.css';

const InputError = ({text}) => {
    return(
        <div className="input-error-container">
            <span>{text}</span>
        </div>
    )
}

export default InputError;