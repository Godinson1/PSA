import React, {useState}  from 'react'
import './Navbar.css';
import '../header/header.css';
import { Link } from 'react-router-dom';




const Navbar = () => {

    const [bar, setBar] = useState(true);

    const toggleMenu = () => {
        setBar(!bar);
    }
   
    return (
        <div>
            <nav>
            <div className="logo">PSA</div>
            <label for="btn" className="icon">
                <span onClick={toggleMenu} 
                className={bar ? "fa fa-bars" : "fa fa-times"}></span>
            </label>
            <input type="checkbox" id="btn" />
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li>
                <label for="btn-1" className="show">Resources +</label>
                   <Link to="/">Resources</Link>
                <input type="checkbox" id="btn-1"/>
                <ul>
                    <li><Link to="/">Materials</Link></li>
                    <li><Link to="/">Recordings</Link></li>
                </ul>
            </li>
            <li><Link to="/">Tutors Board</Link></li>
            <li>
                <label for="btn-2" className="show">MSME +</label>
                    <Link to="/">MSME</Link>
                <input type="checkbox" id="btn-2"/>
            <ul>
            <li><Link to="/">Scholarships</Link></li>
            <li><Link to="/">Fundings</Link></li>
            </ul>
            </li>
            <li><Link to="/">Contacts</Link></li>
            </ul>
            </nav>
        </div>
    )
}


export default Navbar;