import {useEffect} from 'react';

function About ({setLocation}) {

    useEffect(() => {
        setLocation(4);
    })

    return(
        <h1>About tab</h1>
    );
}

export default About;