import { useState, useEffect } from 'react';

function getWindowDimenstions() {
    const {innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimenstions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimenstions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);  
    
    return windowDimensions;
}