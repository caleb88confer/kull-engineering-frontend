import {useState, useEffect} from 'react';
import '../Css/Contact.css';


function Contact ({setLocation, contactSubject, setContactSubject}) {
  
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  useEffect(() => {
      setLocation(5);
      window.scrollTo(0, 0)
      setForm((prevState) => ({
        ...prevState,
        subject: contactSubject,
    }));
      
  }, [])

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };


  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  
       return (
            <div className="contact-tab">
                <form
                className='contact-form'
                    onSubmit={handleSubmit}
                >
                    
                        {/* <legend>React NodeMailer Contact Form</legend> */}

                      
                        <div className="form-left">
                            <label htmlFor="email">Email</label>
                            <label htmlFor="subject">Subject</label>
                            <label htmlFor="message">Message</label>

                        </div>
                        <div className='form-right'>
                            <input 
                                onChange={handleChange}
                                name="email"
                                value={form.email}
                            />
                            <input 
                                onChange={handleChange}
                                name="subject"
                                value={form.subject}
                            /> 
                            <textarea
                                onChange={handleChange}
                                name="message"
                                value={form.message}
                            />
                            <button>Send Message</button>

                        </div>
                   
                </form>

            </div>
       );
}

export default Contact;