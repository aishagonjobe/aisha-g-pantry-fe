import {Container, Image, Nav, Navbar} from "react-bootstrap";
import "./logo.png";
import Logo from "./MyPantryLogo.png"
import "../css/auth.css"

function Navigation({token, handleLogoutRequest}) {

    return (
        <>
            <Navbar expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#home"><Image src={Logo} alt="My Pantry"/></Navbar.Brand>
                    {token ?
                        <Nav.Link className="my-2" href=""
                              onClick={handleLogoutRequest}>Logout</Nav.Link>
                    : <></>}
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;