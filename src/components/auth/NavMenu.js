import {Button, Container, Nav, Navbar} from "react-bootstrap";
import "../logo.png";


function NavMenu() {

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src="../logo.png" width="60" height="60"/></Navbar.Brand>
                <Navbar.Brand href="#home"><h1>My Pantry</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="m-5-justify-content-end">
                        <Nav.Link href="#Services">Services</Nav.Link>
                        <Nav.Link href="#About">About Us</Nav.Link>
                        <Nav.Link href="#Contact">Contact Us</Nav.Link>
                        <Nav.Link href="#login"><Button variant="outline-warning" size={"lg"}>Login</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu;