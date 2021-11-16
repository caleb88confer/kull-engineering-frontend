import {useEffect} from 'react';

function ProductionLocation ({setLocation}) {
    useEffect(() => {
        setLocation(9);
        window.scrollTo(0, 0)
    })
    return (
        <>
        </>
    );
}
export default ProductionLocation;