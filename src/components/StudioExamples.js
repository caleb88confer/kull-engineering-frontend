import {useEffect} from 'react';

function StudioExamples ({setLocation}) {

    useEffect(() => {
        setLocation(2);
    })

    return(
        <h1>StudioExamples tab</h1>
    );
}

export default StudioExamples;