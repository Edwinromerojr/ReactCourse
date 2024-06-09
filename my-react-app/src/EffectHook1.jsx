// useEffect(function, [dependencies])

import React, {useState, useEffect} from 'react';

function Effect1() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER");

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);


    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}
export default Effect1;