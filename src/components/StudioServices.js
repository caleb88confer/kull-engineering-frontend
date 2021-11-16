import {Link} from "react-router-dom";
import {useEffect} from "react";

import '../Css/StudioServices.css';


function StudioServices ({setLocation}) {

    useEffect(() => {
        setLocation(1);
        window.scrollTo(0, 0)
    })
    return(
        <div className="studio-services-tab">
            <h3>Studio Services</h3>
            <div className="buttons-tab">

                    <Link 
                        onClick={()=> setLocation(6)}
                        className="studio-service-button"
                        to="/recording">
                <div className="button">
                            Recording
                </div>
                    </Link>

                    <Link 
                        onClick={()=> setLocation(7)}
                        className="studio-service-button"
                        to="/mixing">
                <div className="button">
                            Mixing
                </div>
                    </Link>

                    <Link 
                        onClick={()=> setLocation(8)}
                        className="studio-service-button"
                        to="/mastering">
                <div className="button">
                            Mastering
                </div>
                    </Link>

                    <Link 
                        onClick={()=> setLocation(9)}
                        className="studio-service-button"
                        to="/production">
                <div className="button">
                            Production
                </div>
                    </Link>

                    <Link 
                        onClick={()=> setLocation(10)}
                        className="studio-service-button dkwyn"
                        to="/dkwyn">
                <div className="button">
                            Don't Know What You Need?
                </div>
                    </Link>

            </div>

        </div>
    );
}

export default StudioServices;