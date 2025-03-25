import React from 'react';

const Textarea = ({ placeholder, value, onChange, className }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-1 focus:outline-none border-b-blue-400 p-4 h-[150px]`}
        />
    );
};

export default Textarea;