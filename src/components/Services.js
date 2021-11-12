import {Link} from "react-router-dom";
import {useEffect} from "react";

import '../Css/Services.css';



function Services ({setLocation}) {

    useEffect(() => {
        setLocation(0);
    })
    return(
        <div className="services-tab">

            <div className="service">

                <h3 className="service-title">Studio</h3>

                <div className="img">
                    <Link 
                    onClick={() => setLocation(1)}
                    to="/studio">
                        <div className="studio-img">

                        </div>
                        
                      

                    </Link>
                </div>

                <div className="service-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, numquam. Ut laborum voluptate illo molestias.
                </div>

            </div>
            <div className="service">
                
                <h3 className="service-title">Acoustics</h3>

                <div className="img">
                    <Link 
                    onClick={() => setLocation(2)}
                    to="/acoustics">
                        <div className="acoustics-img">

                        </div>
                        {/* <img className="service-img" src="https://images.unsplash.com/photo-1617994452722-4145e196248b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" /> */}
                    </Link>
                </div>
                <div className="service-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, numquam. Ut laborum voluptate illo molestias.
                </div>

            </div>
            <div className="service">
            
                <h3 className="service-title">Live Sound</h3>

                <div className="img">
                    <Link
                    to="/live"
                    onClick={()=> setLocation(3)}
                    >
                        <div className="live-img">

                        </div>
                    
                    </Link>
                </div>

                <div className="service-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, numquam. Ut laborum voluptate illo molestias.
                </div>

            </div>

            
        </div>
    );
}

export default Services;