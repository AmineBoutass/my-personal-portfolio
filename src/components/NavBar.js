import { NavBar , Container } from"react-boostrap";
export const NavBar = () => {
    return(
        <NavBar  expand ="lg">
    <Container>
      <NavBar.Brand href="#home">
        <img src={''} alt="logo"/>
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav">
      <span className="navbae-toggler-icon"></span>
      </NavBar.Toggle>
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>   
          <Nav.Link href="#projects">Projects</Nav.Link>          
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