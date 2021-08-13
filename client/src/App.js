import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import Colors from './components/Colors';
import Save from './components/Save';
import ShowSavedSketches from './components/ShowSavedSketches';
import Header from './components/Header';
import CurrentColor from './components/CurrentColor';
import html2canvas from 'html2canvas';

const App = () => {
    const [color, setColor] = useState('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState('#3742fa');
    const [defaultGrid, setDefaultGrid] = useState([]);
    const [currentGrid, setCurrentGrid] = useState([]);
    const [savedSketchData, setSavedSketchData] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            html2canvas(document.querySelector('.grid'))
            .then(canvas => {
                return canvas.toDataURL();
            })
            .then(data => {
                setSavedSketchData(data);
            })
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [currentGrid]);

    return (
        <div className="app">
            <Header />
            <Grid
                backgroundColor={backgroundColor} 
                color={color}
                defaultGrid={defaultGrid}
                setDefaultGrid={setDefaultGrid}
                currentGrid={currentGrid}
                setCurrentGrid={setCurrentGrid}/>
            <Colors 
                setColor={setColor}
                eraseColor={backgroundColor} />
            <CurrentColor color={color} />
            <Save 
                savedSketchData={savedSketchData}/>
        </div>
    )
}

export default App;