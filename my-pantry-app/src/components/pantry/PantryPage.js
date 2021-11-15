import {Container, Row} from "react-bootstrap";
import LoadingCategory from "../loading/LoodingCategory";

export default function PantryPage() {
    return (<Container fluid>
            {/*<img src={PantryBanner} alt={"Let's Get Cooking!"}/>*/}
            <Row><h2>Pantry</h2></Row>
            <Row>
                <LoadingCategory/>
                <LoadingCategory/>
                <LoadingCategory/>
            </Row>
        </Container>
    )
}