
import Pixel from './Pixel';

const Grid = ({ backgroundColor, drawing, setDrawing, color, setPixelInfo, defaultGrid, loadedSketch}) => {
    const renderGrid = () => {
        if(defaultGrid){
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
            return grid;
        } else {
            console.log('making custom sketch now');
            let grid = [];
            for(let i = 0; i < 960; i++) {
                if(loadedSketch[i] === undefined || null) {
                    grid.push(
                        <Pixel 
                        key={i} 
                        value={i} 
                        backgroundColor={backgroundColor}
                        />
                    )
                } else {
                    grid.push(
                        <Pixel 
                        key={i} 
                        value={i} 
                        backgroundColor={loadedSketch[i][1]}
                        />
                    )
                }
            }
            return grid;
        }
    }

    const handleClick = (e) => {
        if(!drawing && e.target.className === 'pixel') {
            setDrawing(true);
            e.target.style.backgroundColor = color;
            const pixelLocation = parseInt(e.target.attributes[1].nodeValue);
            const pixelColor = e.target.attributes[2].nodeValue.slice(18, -1);

            setPixelInfo((state) => {
                state[pixelLocation] = [pixelLocation, pixelColor];
                return [...state]
            })
        } else if (drawing && e.target.className === 'pixel') {
            setDrawing(false);
        }
    }

    const handleDrag = (e) => {
        if(e.target.className === 'pixel') {
            e.target.style.backgroundColor = color;

            const pixelLocation = parseInt(e.target.attributes[1].nodeValue);
            const pixelColor = e.target.attributes[2].nodeValue.slice(18, -1);

            setPixelInfo((state) => {
                state[pixelLocation] = [pixelLocation, pixelColor];
                return [...state]
            })
        }
    }

    return (
        <div
            className="grid"
            onMouseDown={(e) => handleClick(e)}
            onMouseUp={(e) => handleClick(e)}
            onMouseOver={drawing ? (e) => handleDrag(e) : null}
        >
            {renderGrid()}
        </div>
    )
}

export default Grid;