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
    to='/'>
        Studio
    </Link>

    <Link 
    className="nav-link"
    onClick={() => setLocation(2)}
    to='/'>
        Acoustics
    </Link>

    <Link
    className="nav-link" 
    onClick={() => setLocation(3)}
    to='/'>
        Live
    </Link>



    <Link 
    className="nav-link"
    onClick={() => setLocation(4)}
    to='/'>
        About
    </Link>

    <Link
    className="nav-link" 
    onClick={() => setLocation(5)}
    to='/'>
        Contact
    </Link>

    

</nav>
        </>
    );
}

export default Nav;