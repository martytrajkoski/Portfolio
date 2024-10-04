import { Navbar as NavbarBs, Nav, Container } from "react-bootstrap"
import { Link } from "react-scroll"

export function Navbar(){
    return(
        <NavbarBs sticky="top" className="shadow-sm mt-3" >
            <Container fluid>
                <Nav>
                    <Nav.Link as={Link} to='home' smooth={true} duration={500} >Home</Nav.Link>
                    <Nav.Link as={Link} to='about' smooth={true} duration={500}>About</Nav.Link>
                    <Nav.Link as={Link} to='experience' smooth={true} duration={500}>Experience</Nav.Link>
                    <Nav.Link as={Link} to='projects' smooth={true} duration={500}>Projects</Nav.Link>
                    <Nav.Link as={Link} to='contact' smooth={true} duration={500}>Contact</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}