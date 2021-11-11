import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import LoadingCategory from "./loading/LoodingCategory";
import PantryPage from "./pantry/PantryPage";
import RecipePage from "./recipes/RecipesPage";
import Banner from "./MyPantryBanner.gif"
import AccountSettings from "./auth/AccountSettings";

export default function MyPantry() {
    return (
        <Container fluid>
            <img src={Banner} alt={"Let's Get Cooking!"}/>
            <Container fluid>
                <br></br>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Pantry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Recipes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">

                                    <Row><h2>Pantry</h2></Row>
                                    <Row>
                                        <LoadingCategory/>
                                        <LoadingCategory/>
                                    </Row>
                                    <br></br>
                                    <br></br>
                                    <Row><h2>Recipes</h2></Row>
                                    <Row>
                                        <LoadingCategory/>
                                        <LoadingCategory/>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <PantryPage/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <RecipePage/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <AccountSettings/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </Container>
    )
}