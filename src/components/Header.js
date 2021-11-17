

import {Link} from "react-router-dom";

import '../Css/Header.css';

function Header ({location, setContactSubject}) {


    const headerData = [
        { 
            // https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80

            "location": "home",
            "img": "https://images.unsplash.com/photo-1616528279874-b3d3b50ab6c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
            'title': "People aren't perfect.",
            "tag": "But sound is! Let's bridge the gap.",
            "contact": false,
            "subject": "Home"
        },
        {
            "location": "studio",
            "img": "https://images.unsplash.com/photo-1612408885627-efe742ec2d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "title": "Studio",
            "tag": "whether you come to the studio or we come to you, this is your one stop shop for getting your song/podcast onto every streaming platform",
            "contact": true,
            "subject": "Studio"
        },
        {
            "location": "acoustics",
            "img": "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
            "title": "Acoustics",
            "tag": "Whether you need custom-built walls and fully sourced equipment or help to position your speakers, we can help you to begin making high-quality music. For a theater, we can provide the best entertainment acoustics for your room, whether that be a venue or a basement",
            "contact": true,
            "subject": "Acoustics"
        },
        {
            "location": "live",
            "img": "https://images.unsplash.com/photo-1603815878781-536e057a3e7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "title": "Live",
            "tag": "whether you need a live sound engineer or want to rent microphones and speakers for your next gig, we can provide quality sound for your fans to hear.",
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
            "title": "Recording",
            "tag": "This is the recording page",
            "contact": true,
            "subject": "Recording"
        },
        {
            "location": "mixing",
            "img": "https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "title": "Mixing",
            "tag": "This is the mixing page",
            "contact": true,
            "subject": "Mixing"
        },
        {
            "location": "mastering",
            "img": "https://images.unsplash.com/photo-1565828751789-6de4e57775d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "title": "Mastering",
            "tag": "This is the mastering page",
            "contact": true,
            "subject": "Mastering"
        },
        {
            "location": "production",
            "img": "https://images.unsplash.com/photo-1609557926604-e5e3844fdae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "title": "Production",
            "tag": "This is the production page",
            "contact": true,
            "subject": "Production"
        },
        {
            "location": "dkwyn",
            "img": "https://images.unsplash.com/photo-1618218168350-6e7c81151b64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
            "title": "",
            "tag": "dont know what you need?",
            "contact": true,
            "subject": "Dont Know What I Need"
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