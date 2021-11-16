import {Link} from "react-router-dom";
import {useEffect} from "react";

import '../Css/Services.css';



function Services ({setLocation}) {

    useEffect(() => {
        setLocation(0);
        window.scrollTo(0, 0)
    })
    return(
        <div className="services-tab">

            <div className="service">
                    <Link 
                    className="service-link"
                    to="/studio">

                <h3 className="service-title">Studio</h3>

                <div className="img">
                        <div className="studio-img">

                        </div>
                        
                      

                </div>
                <div className="service-description">
                click me If you need your song or podcast recorded, mixed, and or mastered. 
                </div>
                    </Link>


            </div>
            <div className="service">
                    <Link 
                    className="service-link"
                    to="/acoustics">
                
                <h3 className="service-title">Acoustics</h3>

                <div className="img">
                        <div className="acoustics-img">

                        </div>
                        {/* <img className="service-img" src="https://images.unsplash.com/photo-1617994452722-4145e196248b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" /> */}
                </div>
                <div className="service-description">
                click me if you want your own home/commercial studio or theater. 
                </div>

                    </Link>
            </div>
            <div className="service">
                    <Link
                    className="service-link"
                    to="/live"
                    >
            
                <h3 className="service-title">Live</h3>

                <div className="img">
                        <div className="live-img">

                        </div>
                    
                </div>

                <div className="service-description">
                click me if you want a live sound engineer or want to rent live sound equipment. 
                </div>

                    </Link>
            </div>

            
        </div>
    );
}

export default Services;