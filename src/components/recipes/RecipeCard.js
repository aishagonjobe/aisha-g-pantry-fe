import {Button, Card, CloseButton, Col, Row} from "react-bootstrap";
import {useState} from "react";
import UpdateFood from "./UpdateFoodItem";

export default function FoodItemCard({food, handleDeleteFoodItem}) {
    // const [foodId, setFoodId] = useState('')
    // const [image, setFoodImage] = useState('')
    // const [name, setFoodName] = useState('')
    // const [weight, setWeight] = useState('')
    // const [calories, setCalories] = useState('')
    const [show, setShow] = useState(false)

    function handleShow(){
        setShow(true);
    }

    return (<>
        <UpdateFood show={show}/>
        <Col xs={3} className='my-3'>
            <Card>
                <Card.Body>
                    <Card.Subtitle><Row>
                        <Col>{food.id}</Col>
                        <Col xs='auto'><CloseButton onClick={() => handleDeleteFoodItem(food)}/></Col>
                    </Row></Card.Subtitle>
                    <Card.Text>Image: {food.image}</Card.Text>
                    <Card.Text>Name: {food.name}</Card.Text>
                    <Card.Text>Weight: {food.weight}</Card.Text>
                    <Card.Text>Calories: {food.calories}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col xs='auto'><Button onClick={handleShow}>Edit</Button></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    </>)

}