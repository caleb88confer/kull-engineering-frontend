import {useEffect} from 'react';

function MixingLocation ({setLocation}) {
    useEffect(() => {
        setLocation(7);
        window.scrollTo(0, 0)
    })
    return (
        <>
        </>
    );
}
export default MixingLocation;