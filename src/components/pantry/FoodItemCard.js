import {Button, Card, CardImg, CloseButton, Col, Row} from "react-bootstrap";
import {useState} from "react";
import UpdateFood from "./UpdateFoodItem";
import CardHeader from "react-bootstrap/CardHeader";

export default function FoodItemCard({food, handleUpdateFoodItem, handleDeleteFoodItem, favorite}) {
    // const [foodId, setFoodId] = useState('')
    // const [image, setFoodImage] = useState('')
    // const [name, setFoodName] = useState('')
    // const [weight, setWeight] = useState('')
    // const [calories, setCalories] = useState('')
    const [show, setShow] = useState(false)

    function handleShow(){
        setShow(true);
    }

    function handleClose(){
        setShow(false);
    }

    return (<>
        <UpdateFood food={food} handleClose={handleClose} handleShow={handleShow} show={show} handleUpdateFoodItem={handleUpdateFoodItem}/>
        <Col xs={3} className='my-3'>
            <Card>
                <CardHeader>
                    <Col xs='auto'><CloseButton onClick={() => handleDeleteFoodItem(food)}/></Col>
                </CardHeader>
                <CardImg src={food.foodImage}/>
                <Card.Title>{food.foodName}</Card.Title>
                <Card.Body>
                    <Card.Text>Item # {food.id}</Card.Text>
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