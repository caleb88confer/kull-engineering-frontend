import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';

function Header ({location, setLocation, contactSubject, setContactSubject}) {


    const headerData = [
        {
            "location": "home",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the home page",
            "contact": false,
            "subject": "Home"
        },
        {
            "location": "studio",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the studio page",
            "contact": true,
            "subject": "Studio"
        },
        {
            "location": "acoustics",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the acoustics page",
            "contact": true,
            "subject": "Acoustics"
        },
        {
            "location": "live",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the live page",
            "contact": true,
            "subject": "Live"
        },
        {
            "location": "about",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the about page",
            "contact": false,
            "subject": "About"

        },
        {
            "location": "contact",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the contact page",
            "contact": false,
            "subject": "Contact"
        },
        {
            "location": "recording",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the recording page",
            "contact": true,
            "subject": "Recording"
        },
        {
            "location": "mixing",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the mixing page",
            "contact": true,
            "subject": "Mixing"
        },
        {
            "location": "mastering",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the mastering page",
            "contact": true,
            "subject": "Mastering"
        },
        {
            "location": "production",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the production page",
            "contact": true,
            "subject": "Production"
        },
        {
            "location": "dkwyn",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "dont know what you need?",
            "contact": true,
            "subject": "Dont Know What I Need"
        }
    ]
    

    if (headerData[location].contact) {
        return (
            <div className="header-tab">
            <img 
            className="header-img"
            src={headerData[location].img} alt="header" />
            <p className='header-tag'>
                {headerData[location].tag}
            </p>
            <Link
            className="contact-button"
            onClick={() => setLocation(5)}
            onClick={() => setContactSubject(headerData[location].subject)}
            to='/contact'
            >
            Contact
            </Link>

        </div>
        )
    }    
    return (
        <div className="header-tab">
            <img 
            className="header-img"
            src={headerData[location].img} alt="header image" />
            <p className='header-tag'>
                {headerData[location].tag}
            </p>
        </div>
    );
}

export default Header;