import React from 'react'

const DirectionButton = ({ onClick, children, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};


export default DirectionButton