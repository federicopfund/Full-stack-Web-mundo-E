import React,{useState} from "react";
import Logo from "../../assets/img/top-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {

    const [navBar,setnavBar] = useState(false)

    const scrollNav = () =>{
        if (window.scrollY >= 100 && window.innerWidth >= 576) {
            setnavBar(true);
        }else{
            setnavBar(false);
        }
    }
    window.addEventListener('resize',scrollNav);
    window.addEventListener('scroll',scrollNav);

    const scrollUp = () => {
        scroll.scrollToTop();
    };

    return(
        <header id="header" className={navBar ? 'header onScroll' : 'header'}>
            <div>
                <a href="#home">
                    <img src={Logo} alt="Logo25Watts" onClick={scrollUp} />
                </a>
                <nav>
                    <ul>
                        <li><Link
                            activeClass="active"
                            onClick={scrollUp}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Home
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            About
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Products
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Services
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Contact
                            </Link>
                        </li>
                    </ul>
                </nav>      
            </div>
        </header>
    )
}


export default Header;
