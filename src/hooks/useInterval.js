import { useEffect } from 'react';

const useInterval = (fn, time) => {
    useEffect(() => {
        const iv = setInterval(fn, time);
        return () => {
            clearInterval(iv);
        }
    }, [])
}

export default useInterval;