import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

export default function NewFood({handleCloseNewFood, handleShowNewFood, handleCreateFoodItem, show}) {
    const [foodName, setFoodName] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [weight, setWeight] = useState('')
    const [calories, setCalories] = useState('')
    const [foodCategory, setFoodCategory] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        handleCloseNewFood();
        handleCreateFoodItem({
            foodName, foodImage, weight, calories, foodCategory
        });
    }

    function handleFoodNameChange(event) {
        setFoodName(event.target.value)
    }

    function handleFoodImageChange(event) {
        setFoodImage(event.target.value)
    }


    function handleWeightChange(event) {
        setWeight(event.target.value)
    }

    function handleCaloriesChange(event) {
        setCalories(event.target.value)
    }

    function handleCategoryChange(event) {
        setFoodCategory(event.target.value)
    }

    return (
        <>
            <Button onClick={handleShowNewFood}>New Item</Button>
            <Modal show={show} onHide={handleCloseNewFood}>
                <Modal.Header closeButton>
                    <Modal.Title>New Food</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your task's text"
                                          onChange={handleFoodNameChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter your task's text"
                                          onChange={handleFoodImageChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Weight</Form.Label>
                            <Form.Control type="text" placeholder="Enter your event's text"
                                          onChange={handleWeightChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Calories</Form.Label>
                            <Form.Control type="text" placeholder="Enter your event's text"
                                          onChange={handleCaloriesChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter your event's text"
                                          onChange={handleCategoryChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}