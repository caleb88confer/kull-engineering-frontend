import {Link} from "react-router-dom";
import {useEffect} from "react";

import '../Css/StudioServices.css';


function StudioServices ({setLocation, setContactSubject}) {

    useEffect(() => {
        setLocation(1);
        window.scrollTo(0, 0)
    })
    return(
        <div className="studio-services-tab">

        <div className="studio-service">
            <Link 
            className="studio-service-contact-link"
            onClick={()=> setContactSubject('Recording')}
            >
                <div className="studio-service-left">
                    <h3 className="studio-service-title">Recording</h3>
                    <div className="studio-price">
                        <p className="studio-price-text">Music - $15/hour per instrument</p>
                        <p className="studio-price-text">Podcasts - $20/hour</p>
                    
                    </div>
                </div>
            </Link>

            <div className="studio-service-right">
                <ul className="studio-service-description">
                    <li className="text">
                    A four piece band recording would cost $60/hour. Price Negotiable, I’d rather get your music out than not if money is an issue. Email me and we can figure something out.
                    </li>
                    <li className="text">
                    A producer can be provided at an additional $15/hour. EX. A four piece band with a producer would cost $75/hour. 
                    </li>
                    <li className="text">
                    It is recommended that you use our in-house producer to make sessions more time efficient, less taxing on musicians, and/or musical input while maintaining all song rights. 
                    </li>
                
                </ul>

            </div>
                
        </div>

            

           


        
        <div className="studio-service">

            <Link 
            className="studio-service-contact-link"
            onClick={()=> setContactSubject('Mixing')}
            >
                <div className="studio-service-left">
                    <h3 className="studio-service-title">Mixing</h3>
                    <div className="studio-price">
                        <p className="studio-price-text">Music - price depends on size of project</p>
                        <p className="studio-price-text">Podcasts - $25/hour</p>
                    
                    </div>
                </div>
            </Link>

            <div className="studio-service-right">
                <ul className="studio-service-description">
                    <li className="text">
                    Pay by the hour or by the project.
                    </li>
                    <li className="text">
                    Like everything else at KULL, please inquire even if you cannot afford, we will try our best to work something out. 
                    </li>
                   
                
                </ul>

            </div>
                

            

           


        </div>

        <div className="studio-service">

        <Link 
            className="studio-service-contact-link"
            onClick={()=> setContactSubject('Mastering')}
            >
                <div className="studio-service-left">
                    <h3 className="studio-service-title">Mastering</h3>
                    <div className="studio-price">
                    <p className="studio-price-text">$40 per song</p> 
                    
                    </div>
                </div>
            </Link>

       

            <div className="studio-service-right">
                <ul className="studio-service-description">
                    <li className="text">
                    Please inquire even if you cannot afford, we will try our best to work something out. 
                    </li>
                    
                
                </ul>

            </div>
                

            

           


        </div>

        
    </div>
    );
}

export default StudioServices;