import React from 'react';

import '../input/Input.css';

const Input = ({attribute,handleChange,param}) => {

    return(
        <input
            id = {attribute.id}
            name = {attribute.name}
            placeholder = {attribute.placeholder}
            type = {attribute.type}
            onChange = { (e) => handleChange( e.target.name, e.target.value ) }
            className = { param ?  'input-error' : 'regular-style' }
        ></input>
    )
}

export default Input;