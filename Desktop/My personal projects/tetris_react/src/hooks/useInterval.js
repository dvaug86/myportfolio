import { useEffect, useRef } from "react";

//custom hook by Dan Abramov
export const useInterval = (callback, delay) => {

    const savedCallback = useRef();

    //remeber the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    
    //set up the interval

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [delay]);
};


