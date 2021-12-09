import {useState, useEffect} from 'react';
import '../Css/Contact.css';


function Contact ({setLocation, contactSubject}) {
    useEffect(() => {
        setLocation(5);
        window.scrollTo(0, 0)
    })

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });
    // sending email info to backend
    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              subject: "",
              name: "",
              message: "",
            });
          });
      };

    // handle contact form changing mailer state 
    function handleStateChange(e) {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
       return (
            <div className="contact-tab">
                <form
                className='contact-form'
                    onSubmit={submitEmail}
                >
                    
                        {/* <legend>React NodeMailer Contact Form</legend> */}

                      
                        <div className="form-left">
                            <label htmlFor="email">Email</label>
                            <label htmlFor="subject">Subject</label>
                            <label htmlFor="message">Message</label>

                        </div>
                        <div className='form-right'>
                            <input 
                                onChange={handleStateChange}
                                name="email"
                                value={mailerState.email}
                            />
                            <input 
                                onChange={handleStateChange}
                                name="subject"
                                value={contactSubject}
                            /> 
                            <textarea
                                onChange={handleStateChange}
                                name="message"
                                value={mailerState.message}
                            />
                            <button>Send Message</button>

                        </div>
                   
                </form>

            </div>
       );
}

export default Contact;