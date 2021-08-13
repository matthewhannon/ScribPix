import React, { useState } from 'react';
import Grid from './components/Grid';
import Colors from './components/Colors';
import Save from './components/Save';
import Header from './components/Header';
import CurrentColor from './components/CurrentColor';

const App = () => {
    const [color, setColor] = useState('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState('#3742fa');
    const [defaultGrid, setDefaultGrid] = useState([]);
    const [currentGrid, setCurrentGrid] = useState([]);
    const [savedSketchData, setSavedSketchData] = useState([]);
    const [drawing, setDrawing] = useState(false);

    return (
        <div className="app">
            <Header />
            <Grid
                drawing={drawing}
                setDrawing={setDrawing}
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
                savedSketchData={savedSketchData}
                setSavedSketchData={setSavedSketchData}
                currentGrid={currentGrid}
                />
        </div>
    )
}

export default App;