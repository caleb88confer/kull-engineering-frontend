import {useEffect} from 'react';

function LiveLocation ({setLocation}) {

    useEffect(() => {
        setLocation(3);
        window.scrollTo(0, 0)
    })
    return (
        <>
        </>
    )
}

export default LiveLocation;