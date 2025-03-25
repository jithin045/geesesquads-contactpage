import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-1 focus:outline-none border-b-blue-400 p-4 `}
        />
    );
};

export default Input;