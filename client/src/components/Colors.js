import React from 'react';

const Colors = ({ setColor, eraseColor }) => {
    let colorsPalette = ['#ffffff', '#f1f2f6', '#dfe4ea', '#ced6e0', '#a4b0be', '#747d8c', '#2f3542'];

    const showPalette = colorsPalette.map((color, i) => {
        return (
                <button 
                    key={i}
                    onClick={() => {setColor(color)}} 
                    className={`color-btn ${i}`} 
                    style={{backgroundColor: `${color}`}}>
                </button>
        )
    })

    return (
        <div className="colors">
            {showPalette}
            <button className='color-btn' style={{backgroundColor: eraseColor}} onClick={() => setColor(eraseColor)}></button>
        </div>
    )
}

export default Colors;