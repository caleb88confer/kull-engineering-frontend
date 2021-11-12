import '../Css/Social.css';

function Social (props) {
    return(
        <div className="social-tab">
            <h2>Connect with me and check out my work on Social Media!</h2>
            <div className='all-social-icons'>
                <div>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCDHIB26c8Nckg0VZIFXbBrg">
                        <img src="https://cdn.pixabay.com/photo/2016/04/24/14/36/youtube-1349702_960_720.png" alt="" className="social-img" />
                        </a>
                </div>
                <div>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/kull_music/?hl=en">
                       <img src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" alt="" className="social-img" /> 
                        
                    </a>
                </div>
                <div>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/jameskullacoustics/">
                       <img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png" alt="" className="social-img" /> 
                        
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Social;