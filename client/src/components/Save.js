import React from 'react';

const Save = ({ savedSketchData }) => {
    const handleClick = () => {
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.download = 'image.png';
        link.href = savedSketchData;
        link.target = '_blank';
        link.click();
    }

    return <button onClick={handleClick} className="save-btn">download PNG</button>
}

export default Save;