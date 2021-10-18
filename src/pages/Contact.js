import {useEffect} from 'react';

function Contact ({setLocation, contactSubject}) {
    useEffect(() => {
        setLocation(5);
    })
    if (contactSubject === "Dont Know What I Need") {
        return(
            <div className="contact-tab">
    
                <h1>Contact tab</h1>
                <h3>Dont know what you need help with?</h3>
    
            </div>
        );
    }
    return(
        <div className="contact-tab">

            <h1>Contact tab</h1>
            <h3>You wanted help with {contactSubject}?</h3>

        </div>
    );
}

export default Contact;