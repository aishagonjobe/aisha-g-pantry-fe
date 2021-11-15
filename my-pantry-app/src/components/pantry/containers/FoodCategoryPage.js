import {Col, Container, Row} from "react-bootstrap";
import LoadingFoodItem from "../../loading/LoadingItem";

export default function FoodCategoryPage() {
    return (<Container>
            <Row>
                <Col><LoadingFoodItem/></Col>
                <Col><LoadingFoodItem/></Col>
                <Col><LoadingFoodItem/></Col>
            </Row>
            <Row>
                <Col><LoadingFoodItem/></Col>
                <Col><LoadingFoodItem/></Col>
                <Col><LoadingFoodItem/></Col>
            </Row>
        </Container>
    )
}