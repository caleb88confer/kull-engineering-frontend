import {Link} from "react-router-dom";


function Header ({location, setLocation}) {
    const headerData = [
        {
            "location": "home",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the home page",
            "contact": false
        },
        {
            "location": "studio",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the studio page",
            "contact": true
        },
        {
            "location": "acoustics",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the acoustics page",
            "contact": true
        },
        {
            "location": "live",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the live page",
            "contact": true
        },
        {
            "location": "about",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the about page",
            "contact": false
        },
        {
            "location": "contact",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the contact page",
            "contact": false
        },
        {
            "location": "recording",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the recording page",
            "contact": true
        },
        {
            "location": "mixing",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the mixing page",
            "contact": true
        },
        {
            "location": "mastering",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the mastering page",
            "contact": true
        },
        {
            "location": "production",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "This is the production page",
            "contact": true
        },
        {
            "location": "dkwyn",
            "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            "tag": "dont know what you need?",
            "contact": true
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
            onClick={() => setLocation(5)}
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