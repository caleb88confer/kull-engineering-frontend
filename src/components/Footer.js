import {Link} from "react-router-dom";
import { useState } from "react";


function Footer (props) {

    return (
        <footer>
            <p className="footer-text">copyright © 2021 James Kull Engineering</p>

<div className="footer-links">
    <a className="footer-link" href="/">HOME</a>
    <a className="footer-link" href="/about">ABOUT</a>
    <a className="footer-link" href="/contact">CONTACT</a>

</div>

        </footer>
    );
}

export default Footer;