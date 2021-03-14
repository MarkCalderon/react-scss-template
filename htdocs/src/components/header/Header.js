import React from 'react'
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__titleArea">
                    <h1 className="header__titleMainText">REACT</h1>
                </div>
                <ul className="header__link">
                    <li className="header__linkItem"><a className="header__linkAnchor" href="#">HOME</a></li>
                    <li className="header__linkItem"><a className="header__linkAnchor" href="#">RECRUIT</a></li>
                    <li className="header__linkItem"><a className="header__linkAnchor" href="#">ABOUT US</a></li>
                    <li className="header__linkItem"><a className="header__linkAnchor" href="#">CONTACT US</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header