import {Button, Card, CloseButton, Col, Row} from "react-bootstrap";

export default function FoodItemCard({food, handleDeleteFood, handleShow}) {

    function food_date(food) {
        const date = new Date(food.id);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()

    }

    function food_time(food) {
        const date = new Date(food.id);
        return date.getHours() + ':' + date.getMinutes()

    }

    return (<Col xs={3} className='my-3'>
        <Card>
            <Card.Body>
                <Card.Subtitle><Row>
                    <Col>{food.id}</Col>
                    <Col xs='auto'><CloseButton onClick={() => handleDeleteFood(food)}/></Col>
                </Row></Card.Subtitle>
                <Card.Text>Event ID: {food.event_id}</Card.Text>
                <Card.Text>Time: {food.id}</Card.Text>
                <Card.Text>User ID: {food.user_id}</Card.Text>
                <Card.Text>Accepted?: {food.accepted.toString()}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs='auto'><Button onClick={handleShow}>Edit</Button></Col>
                </Row>
            </Card.Footer>
        </Card>
    </Col>)
}