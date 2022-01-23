import {Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa';

import { useState, useEffect } from "react";


import '../Css/Nav.css';

function Nav ({location}) {
  const [menuToggle, setMenuToggle] = useState(false)
  const [smallScreenLinks, setSmallScreenLinks] = useState('small-screen-on')
  const [selectedLink, setSelectedLink] = useState({
      home: '',
      studio: '',
      acoustics: '',
      live: '',
      about: '',
      contact: '',
      recording: '',
      mixing: '',
      mastering: '',
      production: '',
      dkwyn: ''
  });

  useEffect(() => {
    if(location === 0) setSelectedLink({
        home: 'selected-link',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 1) setSelectedLink({
        home: '',
        studio: 'selected-link',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 2) setSelectedLink({
        home: '',
        studio: '',
        acoustics: 'selected-link',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 3) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: 'selected-link',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 4) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: 'selected-link',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 5) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: 'selected-link',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 6) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: 'selected-link',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 7) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: 'selected-link',
        mastering: '',
        production: '',
        dkwyn: ''
    })
    if(location === 8) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: 'selected-link',
        production: '',
        dkwyn: ''
    })
    if(location === 9) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: 'selected-link',
        dkwyn: ''
    })
    if(location === 10) setSelectedLink({
        home: '',
        studio: '',
        acoustics: '',
        live: '',
        about: '',
        contact: '',
        recording: '',
        mixing: '',
        mastering: '',
        production: '',
        dkwyn: 'selected-link'
    })
  }, [location])

  useEffect(() => {
    setMenuToggle(false);
  }, [location])
    

    function handleMenuToggle () {
        if (menuToggle) {
            setMenuToggle(false);
            setSmallScreenLinks('small-screen-on');
        } else {
            setMenuToggle('menu-toggle-on');
            setSmallScreenLinks(false);
        }
    }

    return (
        <>
            <nav className={menuToggle}>
<div className="nav-main">
    <Link 
    className={`nav-link home-link ${selectedLink.home}`}
    to='/'>
        <p id="home-link">
            KULL
            </p> 
            
    </Link>

    <FaBars
    onClick={() => handleMenuToggle()} 
    className="nav-menu"
    />
    

        

</div>
    <div className="space">

    </div>


<div className='links'>
   
    <div className="link">
        <Link 
        className={`nav-link ${selectedLink.studio} ${smallScreenLinks}`}
        to='/studio'>
            <p>
            Studio

            </p>
        </Link>
    </div>
            

 

    <div className="link">
        <Link 
        className={`nav-link ${selectedLink.acoustics} ${smallScreenLinks}`}
        to='/acoustics'>
            <p>
            Acoustics

            </p>
        </Link>

    </div>

    <div className="link">
        <Link
        className={`nav-link ${selectedLink.live} ${smallScreenLinks}`} 
        to='/live'>
            <p>
            Live

            </p>
        </Link>

    </div>

    <div className="link">
        <Link 
        className={`nav-link ${selectedLink.about} ${smallScreenLinks}`}
        to='/about'>
            <p>
            About

            </p>
        </Link>

    </div>

    <div className="link">
        <Link
        className={`nav-link ${selectedLink.contact} ${smallScreenLinks}`} 
        to='/contact2'>
            <p>
            Contact

            </p>
        </Link>

    </div>

    
</div>

  
    
</nav>

        </>
    );
}

export default Nav;

    

    



   

    

    
    

    
