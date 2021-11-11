import {Container, Image, Nav, Navbar} from "react-bootstrap";
import "./logo.png";
import Logo from "./MyPantryLogo.png"
import "../css/auth.css"

function Navigation(handleLogoutRequest) {

    return (
        <>
            <Navbar expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#home"><Image src={Logo} alt="My Pantry"/></Navbar.Brand>
                    <Nav.Link className="my-2" href="/logout"
                              onClick={handleLogoutRequest}>Logout</Nav.Link>
                    {/*<Navbar.Offcanvas*/}
                    {/*    id="offcanvasNavbar"*/}
                    {/*    aria-labelledby="offcanvasNavbarLabel"*/}
                    {/*    placement="end"*/}
                    {/*>*/}
                    {/*    <Offcanvas.Header closeButton>*/}
                    {/*        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>*/}
                    {/*    </Offcanvas.Header>*/}
                    {/*    <Offcanvas.Body>*/}
                    {/*        <Nav variant="pills" className="justify-content-end flex-grow-1 pe-3">*/}
                    {/*            <Nav.Link className="my-2" href="#action1">Home</Nav.Link>*/}
                    {/*            <Nav.Link className="my-2" href="#action2">Pantry</Nav.Link>*/}
                    {/*            <Nav.Link className="my-2" href="#action3">Recipes</Nav.Link>*/}
                    {/*            <Nav.Link className="my-2" href="#action4">User Settings</Nav.Link>*/}

                    {/*        </Nav>*/}
                    {/*    </Offcanvas.Body>*/}
                    {/*</Navbar.Offcanvas>*/}
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;