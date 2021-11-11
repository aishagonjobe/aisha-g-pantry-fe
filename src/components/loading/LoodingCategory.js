import {Card, Carousel, Col, Placeholder, Row} from "react-bootstrap";
import LoadingItem from "./LoadingItem";

export default function LoadingCategory() {
    return (
        <Row className="my-3">
            <Card>
                <Card.Body>
                    <Placeholder as={Card.Subtitle} animation="glow">
                        <Placeholder xs={6}/>
                    </Placeholder>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <Row>
                                <Col><LoadingItem/></Col>
                                <Col><LoadingItem/></Col>
                                <Col><LoadingItem/></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col><LoadingItem/></Col>
                                <Col><LoadingItem/></Col>
                                <Col><LoadingItem/></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col><LoadingItem/></Col>
                                <Col><LoadingItem/></Col>
                                <Col><LoadingItem/></Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Card.Body>
            </Card>
        </Row>
    )
}
