import {useEffect} from 'react';

import '../Css/About.css';


function About ({setLocation}) {

    useEffect(() => {
        setLocation(4);
    })

    return(
        <div className="about-description-tab">
            <h2 className="about-description-title">
            here is the team!
            </h2>
            <p className="about-description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero dicta fugiat optio beatae iste perspiciatis provident est soluta nam facilis assumenda ex amet, quibusdam vero, quas saepe nesciunt odio? 
            </p>
        </div>
    );
}

export default About;