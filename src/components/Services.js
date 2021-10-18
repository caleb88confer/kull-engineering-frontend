import {Link} from "react-router-dom";


function Services ({setLocation}) {
    return(
        <div className="services-tab">

            <div className="studio-service">
                <h3>Studio</h3>
                <Link 
                onClick={() => setLocation(1)}
                to="/studio">
                    <img className="service-img" src="https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Link>
                <div className="service-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, numquam. Ut laborum voluptate illo molestias.
                </div>
            </div>

            <div className="acoustic-service">
                <h3>Acoustics</h3>
                <Link 
                onClick={() => setLocation(2)}
                to="/acoustics">
                    <img className="service-img" src="https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Link>
                <div className="service-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque molestias ullam veritatis non.   
                </div>               
            </div>

            <div className="live-service">
                <h3>Live Sound</h3>
                <Link
                to="/live"
                onClick={()=> setLocation(3)}
                >
                <img className="service-img" src="https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Link>
                <div className="service-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, mollitia iure? Nesciunt, quos veritatis sint assumenda.
                </div>
            </div>
            
        </div>
    );
}

export default Services;