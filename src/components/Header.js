import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';

function Header ({location, setLocation, contactSubject, setContactSubject}) {


    const headerData = [
        {
            "location": "home",
            "img": "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            'title': 'Hello!',
            "tag": "This is the home page",
            "contact": false,
            "subject": "Home"
        },
        {
            "location": "studio",
            "img": "https://images.unsplash.com/photo-1612408885627-efe742ec2d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the studio page",
            "contact": true,
            "subject": "Studio"
        },
        {
            "location": "acoustics",
            "img": "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
            "tag": "This is the acoustics page",
            "contact": true,
            "subject": "Acoustics"
        },
        {
            "location": "live",
            "img": "https://images.unsplash.com/photo-1603815878781-536e057a3e7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the live page",
            "contact": true,
            "subject": "Live"
        },
        {
            "location": "about",
            "img": "https://images.unsplash.com/photo-1566939865316-6e5817647ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the about page",
            "contact": false,
            "subject": "About"

        },
        {
            "location": "contact",
            "img": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the contact page",
            "contact": false,
            "subject": "Contact"
        },
        {
            "location": "recording",
            "img": "https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the recording page",
            "contact": true,
            "subject": "Recording"
        },
        {
            "location": "mixing",
            "img": "https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the mixing page",
            "contact": true,
            "subject": "Mixing"
        },
        {
            "location": "mastering",
            "img": "https://images.unsplash.com/photo-1565828751789-6de4e57775d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the mastering page",
            "contact": true,
            "subject": "Mastering"
        },
        {
            "location": "production",
            "img": "https://images.unsplash.com/photo-1609557926604-e5e3844fdae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the production page",
            "contact": true,
            "subject": "Production"
        },
        {
            "location": "dkwyn",
            "img": "https://images.unsplash.com/photo-1618218168350-6e7c81151b64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
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
            <p className="header-title">
                {headerData[location].title}
            </p>
            <p className='header-tag'>
                {headerData[location].tag}
            </p>
            <div className="contact-box">
            <Link
            className="contact-button"
            onClick={() => setLocation(5)}
            onClick={() => setContactSubject(headerData[location].subject)}
            to='/contact'
            >
            Contact
            </Link>

            </div>

        </div>
        )
    }    
    return (
        <div className="header-tab">
            <img 
            className="header-img"
            src={headerData[location].img} alt="header image" />
            <p className="header-title">
                {headerData[location].title}
            </p>
            <p className='header-tag'>
                {headerData[location].tag}
            </p>
        </div>
    );
}

export default Header;