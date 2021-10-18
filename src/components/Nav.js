import {Link} from "react-router-dom";

function Nav ({setLocation}) {
    return (
        <>
            <nav>

    <Link 
    className="nav-link"
    onClick={() => setLocation(0)}
    to='/'>
        KULL
    </Link>

    <Link 
    className="nav-link"
    onClick={() => setLocation(1)}
    to='/studio'>
        Studio
    </Link>

    <Link 
    className="nav-link"
    onClick={() => setLocation(2)}
    to='/acoustics'>
        Acoustics
    </Link>

    <Link
    className="nav-link" 
    onClick={() => setLocation(3)}
    to='/live'>
        Live
    </Link>



    <Link 
    className="nav-link"
    onClick={() => setLocation(4)}
    to='/about'>
        About
    </Link>

    <Link
    className="nav-link" 
    onClick={() => setLocation(5)}
    to='/contact'>
        Contact
    </Link>

    

</nav>
        </>
    );
}

export default Nav;