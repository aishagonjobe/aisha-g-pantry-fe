import {Container, Row} from "react-bootstrap";
import LoadingCategory from "../loading/LoodingCategory";

export default function RecipePage() {
    return (<Container fluid>
            {/*<img src={RecipesBanner} alt={"Let's Get Cooking!"}/>*/}
            <Row><h2>Recipes</h2></Row>
            <Row>
                <LoadingCategory/>
                <LoadingCategory/>
                <LoadingCategory/>
            </Row>
        </Container>
    )
}