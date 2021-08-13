import React, { useEffect, createRef } from 'react';
import Pixel from './Pixel';

const Grid = ({ backgroundColor, color, defaultGrid, setDefaultGrid, currentGrid, setCurrentGrid, drawing, setDrawing }) => {
    const ref = createRef();

    useEffect(() => {
        setCurrentGrid(defaultGrid);
    }, [setCurrentGrid, defaultGrid]);

    useEffect(() => {
        const loadDefaultGrid = () => {
            let grid = [];
            for(let i = 0; i < 960; i++) {
                grid.push(
                    <Pixel 
                        key={i}
                        value={i}
                        backgroundColor={backgroundColor}
                    />
                )
            }
            setDefaultGrid(grid);
        }
        loadDefaultGrid()
    },[setDefaultGrid, backgroundColor]);

    useEffect(() => {
        const isItGrid = (e) => {
            if(!ref.current.contains(e.target)) {
                setDrawing(false);
            }
        }
        document.body.addEventListener('mouseup', isItGrid, { capture: true })

        return (() => {
            document.body.removeEventListener('mouseup', isItGrid, { capture: true })
        })
    }, [ref, setDrawing])

    const updatePixelColor = (location, color) => {
        let gridPixels = [...currentGrid];
        let updatedPixel = <Pixel key={location} value={location} backgroundColor={color} />

        gridPixels[location] = updatedPixel;
        setCurrentGrid(gridPixels);
    }

    const handleClick = (e) => {
        if(!drawing && e.target.className === 'pixel' && e.type === 'mousedown') {
            setDrawing(true);
            e.target.style.backgroundColor = color;
            const pixelLocation = parseInt(e.target.attributes[1].nodeValue);
            const pixelColor = e.target.attributes[2].nodeValue.slice(18, -1);
            updatePixelColor(pixelLocation, pixelColor);
        } else if (drawing && e.target.className === 'pixel') {
            setDrawing(false);
        }
    }

    const handleDrag = (e) => {
        if(e.target.className === 'pixel') {
            e.target.style.backgroundColor = color;
            const pixelLocation = parseInt(e.target.attributes[1].nodeValue);
            const pixelColor = e.target.attributes[2].nodeValue.slice(18, -1);
            updatePixelColor(pixelLocation, pixelColor);
        }
    }

    return (
        <div 
            ref={ref}
            className="grid"
            onMouseDown={(e) => handleClick(e)}
            onMouseUp={(e) => handleClick(e)}
            onMouseOver={drawing ? (e) => handleDrag(e) : null}
        >
            {currentGrid}
        </div>
    )
}

export default Grid;