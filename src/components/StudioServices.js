import {Link} from "react-router-dom";
import {useEffect} from "react";



function StudioServices ({setLocation}) {

    useEffect(() => {
        setLocation(1);
    })
    return(
        <div className="studio-services-tab">
            <h3>Studio Services</h3>
            <Link 
            onClick={()=> setLocation(6)}
            className="studio-service-button"
            to="/recording">
                Recording
            </Link>
            <Link 
            onClick={()=> setLocation(7)}
            className="studio-service-button"
            to="/mixing">
                Mixing
            </Link>
            <Link 
            onClick={()=> setLocation(8)}
            className="studio-service-button"
            to="/mastering">
                Mastering
            </Link>
            <Link 
            onClick={()=> setLocation(9)}
            className="studio-service-button"
            to="/production">
                Production
            </Link>
            <Link 
            onClick={()=> setLocation(10)}
            className="studio-service-button"
            to="/dkwyn">
                Don't Know What You Need?
            </Link>

        </div>
    );
}

export default StudioServices;