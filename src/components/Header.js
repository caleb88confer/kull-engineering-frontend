function Header ({location}) {
    const headerData = [
        {
            "location": "home",
            "img": "",
            "tag": "",
            "contact": false
        },
        {
            "location": "studio",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "acoustics",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "live",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "about",
            "img": "",
            "tag": "",
            "contact": false
        },
        {
            "location": "contact",
            "img": "",
            "tag": "",
            "contact": false
        },
        {
            "location": "recording",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "mixing",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "mastering",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "production",
            "img": "",
            "tag": "",
            "contact": true
        },
        {
            "location": "dkwyn",
            "img": "",
            "tag": "",
            "contact": true
        }
    ]
    

    
    return (
        <div>
            <h1>{headerData[location].location}</h1>
        </div>
    );
}

export default Header;