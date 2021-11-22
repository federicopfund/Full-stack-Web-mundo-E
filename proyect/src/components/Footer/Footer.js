import React from 'react';
import Logo from '../../assets/img/footer-logo.svg';
import {Link} from 'react-scroll';


const Footer = () =>{

    return(
    <footer>
        <p>2021 © All rights reserved.</p>
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            <img src={Logo} alt="Logo25Watts" />
        </Link>
    </footer>
    )
}



export default Footer;