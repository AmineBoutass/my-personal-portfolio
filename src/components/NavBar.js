import { useEffect, useState } from "react";
import { Navbar ,Container, Nav } from"react-boostrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-navIcon1.svg';
import navIcon2 from '../assets/img/nav-navIcon2.svg';
import navIcon3 from '../assets/img/nav-navIcon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }else {
                seScrolled(false);
            }
        };
        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
    <Navbar  expand ="lg" className={scrolled ? "scrolled": ""}>
     <Container>

      <Navbar.Brand href="#home">
        <img src={logo} alt="logo"/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span className="navbae-toggler-icon"></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">


        <Nav className="me-auto">
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>   
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>          
        </Nav>


        <spam className="navbar-text">
            <div className="social_icon">
                <B href="#"><img src={navIcon1} alt=""/> </B>
                <B href="#"><img src={navIcon2} alt=""/> </B>
                <B href="#"><img src={navIcon3} alt=""/> </B>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>let's connect </span></button>
        </spam>


        
      </Navbar.Collapse>
     </Container>
    </Navbar>

    )
}