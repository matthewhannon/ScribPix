import React from 'react';

const CurrentColor = ({ color }) => {
    return (
        <div className="current-color-container">
            <h3>Current Color: </h3>
            <div className="current-color" style={{backgroundColor: color}}></div>
        </div>
    )
}

export default CurrentColor;