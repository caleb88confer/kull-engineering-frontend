import {useEffect} from 'react';

function RecordingLocation ({setLocation}) {
    useEffect(() => {
        setLocation(6);
        window.scrollTo(0, 0)
    })
    return (
        <>
        </>
    );
}
export default RecordingLocation;