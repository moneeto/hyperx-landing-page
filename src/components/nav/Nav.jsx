import React, {useState} from "react";
import './Nav.scss'

export const Nav = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => { 
        window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener('scroll', changeBackground) // window scroll

    return ( 
        <nav className={navbar ? 'nav scrollDown' : 'nav'}>
            <ul className="ul-nav">
                <a href="#welcome-section"><li className="item-li-nav">Home</li></a>
                <a href="#newproducts-section"><li className="item-li-nav">New Products</li></a>
                <a href="#categories-section"><li className="item-li-nav">Categories</li></a>
                <a href="#models-section"><li className="item-li-nav">Models</li></a>
                <a href="#product-section"><li className="item-li-nav">Featured</li></a>
                <a href="#dayOffer1-section"><li className="item-li-nav">Day Offers</li></a>
                <a href="#"><li className="item-li-nav">Contact Us</li></a>
            </ul>

        </nav>
    )
}