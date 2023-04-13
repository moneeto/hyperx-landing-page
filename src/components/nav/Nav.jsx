import React, {useState} from "react";
import './Nav.scss'

export const Nav = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => { 
        if(window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground) // window scroll

    return ( 
        <nav className={navbar ? 'nav' : 'nav'}>
            <ul className="ul-nav">
                <a href="#"><li className="item-li-nav">Home</li></a>
                <a href="#"><li className="item-li-nav">New Products</li></a>
                <a href="#"><li className="item-li-nav">Categories</li></a>
                <a href="#"><li className="item-li-nav">Models</li></a>
                <a href="#"><li className="item-li-nav">X Product</li></a>
                <a href="#"><li className="item-li-nav">Day Offers</li></a>
                <a href="#"><li className="item-li-nav">Contact Us</li></a>
            </ul>

        </nav>
    )
}