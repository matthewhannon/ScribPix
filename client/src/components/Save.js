import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

const Save = ({ savedSketchData, setSavedSketchData, currentGrid }) => {
    const [buttonActive, setButtonActive] = useState(false);

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
    }, [currentGrid, setSavedSketchData]);

    useEffect(() => {
        const delayDownload = () => {
            console.log('click');
            setButtonActive(false);
            setTimeout(() => {
                setButtonActive(true);
            }, 350);
        }

        document.addEventListener('click', delayDownload);

        return () => {
            document.removeEventListener('click', delayDownload);
        }
    }, [])

    const handleClick = () => {
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.download = 'image.png';
        link.href = savedSketchData;
        link.target = '_blank';
        link.click();
    }

    return (
        <button 
            disabled={!buttonActive}
            onClick={handleClick}
            className="save-btn">download PNG
        </button>
    )
}

export default Save;