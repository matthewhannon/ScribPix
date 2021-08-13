import React from 'react';

const ShowSavedSketches = ({ savedSketch, setCurrentGrid }) => {

    const showSaved = () => {
        const saved = savedSketch.map((sketch, i) => {
            return <button className="load-btn" key={i} onClick={() => { setCurrentGrid(sketch) }}>{i + 1}</button>
        })
        return saved;
    }

    return (
        <div className="show-load-btns" >
            {showSaved()}
        </div>
    );
}

export default ShowSavedSketches;