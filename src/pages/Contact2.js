import {useState} from "react";

function Contact2 (props) {

const [form, setForm] = useState({ name: "", email: "", message: "" });

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

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
//   test

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1 className="contact-heading">Contact</h1>
                <div className="contact-header-image-container">
                    <img 
                    className="contact-header-image"
                    src="https://i.imgur.com/ndYzh2Q.png" alt="flask" />
                </div>
            </div>
            <div className="contact-greeting">
               <h2> Hello! feel free to reach out to me</h2> 
            </div>
            <div className="contact-form">
                <form
                    onSubmit={handleSubmit}
                    name="contact" 
                    netlify 
                    data-netlify="true"
                    >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field">
                        <input
                        onChange={handleChange}
                        name="name"
                        placeholder="name"
                        type="text" />
                    </div>
                    <div className="field">
                        <input 
                        onChange={handleChange}
                        name="email"
                        placeholder="email"
                        type="text" />
                    </div>
                    <div className="field">
                        <textarea
                        onChange={handleChange}
                        className="blinking"
                        name="message"
                        placeholder="message"
                        rows="4"
                        cols="25" />
                    </div>
                    <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                    </div>

                    <input type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    )
}

export default Contact2;