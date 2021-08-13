import React from 'react';

const Pixel = ({ backgroundColor, value }) => {
    return (
        <div 
            className="pixel"
            style={{backgroundColor: backgroundColor}}
            value={value}
        >
        </div>
    )
}

export default Pixel;