

import {Link} from "react-router-dom";

import '../Css/Header.css';

function Header ({location, setContactSubject}) {


    const headerData = [
        { 
            // https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80

            "location": "home",
            "img": "https://images.unsplash.com/photo-1616528279874-b3d3b50ab6c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
            'title': "People aren't perfect.",
            "tag": "But sound is! Choose your service to get started.",
            "contact": false,
            "subject": "Home"
        },
        {
            "location": "studio",
            "img": "https://images.unsplash.com/photo-1609557926604-e5e3844fdae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "title": "Studio",
            "tag": "Recording, Mixing, and/or Mastering for songs and Podcasts",
            "contact": true,
            "subject": "Studio"
        },
        {
            "location": "acoustics",
            "img": "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
            "title": "Acoustics",
            "tag": "Design your own studio and/or theater. Commercial or home",
            "contact": true,
            "subject": "Acoustics"
        },
        {
            "location": "live",
            "img": "https://images.unsplash.com/photo-1603815878781-536e057a3e7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "title": "Live",
            "tag": "Hire a live sound engineer or rent live sound equipment.",
            "contact": true,
            "subject": "Live"
        },
        {
            "location": "about",
            "img": "https://images.unsplash.com/photo-1566939865316-6e5817647ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "Meet the Team",
            "contact": false,
            "subject": "About"

        },
        {
            "location": "contact",
            "img": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the contact page",
            "contact": false,
            "subject": "Contact"
        }
        
    ]
    

    if (headerData[location].contact) {
        return (
            <div className="header-tab">
            <img 
            className={`header-img ${headerData[location].location}-header-img`}
            src={headerData[location].img} alt="header" />
            <p className={`${headerData[location].location}-title header-title-generic`}>
                {headerData[location].title}
            </p>
            <p className={`${headerData[location].location}-tag header-tag-generic`}>
                {headerData[location].tag}
            </p>
            <div className="contact-box">
            <Link
            className="contact-button"
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
            className={`header-img ${headerData[location].location}-header-img`}
            src={headerData[location].img} alt="header" />
            <p className={`${headerData[location].location}-title header-title-generic`}>
                {headerData[location].title}
            </p>
            <p className={`${headerData[location].location}-tag header-tag-generic`}>
                {headerData[location].tag}
            </p>
        </div>
    );
}

export default Header;