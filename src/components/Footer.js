import { Link } from "react-router-dom";

function Footer (props) {

    return (
        <footer>
            <p className="footer-text">copyright © 2021 James Kull Engineering</p>

<div className="footer-links">
        <Link
        className="footer-link"
        to='/'>
            <p>HOME</p>
        </Link>
        <Link
        className="footer-link"
        to='/about'>
            <p>ABOUT</p>
        </Link>
        <Link
        className="footer-link"
        to='/contact'>
            <p>CONTACT</p>
        </Link>

</div>

        </footer>
    );
}

export default Footer;