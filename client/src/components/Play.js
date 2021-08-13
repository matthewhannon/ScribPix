import React from 'react';

const Play = ({ setCurrentGrid, savedSketch }) => {

    const playAnimations = () => {
        savedSketch.map((sketch) => {
            setTimeout(() => {
                setCurrentGrid(sketch)
            }, 500);
        })
    }

    return (
        <button onClick={() => {playAnimations()}} >Play</button>
    );
}

export default Play;