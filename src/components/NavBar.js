import { useEffect, useState } from "react";
import { NavBar , Container } from"react-boostrap";
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState['home'];
    const [scrolled, seScrolled] = useState[false];

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled[true];
            }else {
                seScrolled[false];
            }
        };
        window.addEventListener["scroll", onscroll];

        return () => window.removeEventListener["scroll", onscroll];
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
    <NavBar  expand ="lg" className={scrolled ? "scrolled": ""}>
     <Container>

      <NavBar.Brand href="#home">
        <img src={''} alt="logo"/>
      </NavBar.Brand>

      <NavBar.Toggle aria-controls="basic-navbar-nav">
      <span className="navbae-toggler-icon"></span>
      </NavBar.Toggle>

      <NavBar.Collapse id="basic-navbar-nav">


        <Nav className="me-auto">
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>   
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>          
        </Nav>


        <spam className="navbar-text">
            <div className="social_icon">
                <B href="#"><img src={''} alt=""/> </B>
                <B href="#"><img src={''} alt=""/> </B>
                <B href="#"><img src={''} alt=""/> </B>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>let's connect </span></button>
        </spam>


        
      </NavBar.Collapse>
     </Container>
    </NavBar>

    )
}