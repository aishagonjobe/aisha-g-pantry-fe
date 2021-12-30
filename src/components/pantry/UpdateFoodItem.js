import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

export default function UpdateFood({food, handleClose, handleUpdateFoodItem, show}) {
    const [foodName, setFoodName] = useState(food.foodName)
    const [foodImage, setFoodImage] = useState(food.foodImage)
    const [weight, setWeight] = useState(food.weight)
    const [calories, setCalories] = useState(food.calories)
    const [foodCategory, setFoodCategory] = useState(food.foodCategory)
    const id = food.id

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

    function handleSubmit(event) {
        event.preventDefault()
        handleClose();
        handleUpdateFoodItem({
            id, foodName, foodImage, weight, calories, foodCategory
        });
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Food</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Name</Form.Label>
                            <Form.Control type="text" placeholder={food.foodName}
                                          defaultValue={food.foodName}
                                          onChange={handleFoodNameChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Image</Form.Label>
                            <Form.Control type="text" placeholder={food.foodImage}
                                          defaultValue={food.foodImage}
                                          onChange={handleFoodImageChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Weight</Form.Label>
                            <Form.Control type="text" placeholder={food.weight}
                                          defaultValue={food.weight}
                                          onChange={handleWeightChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Calories</Form.Label>
                            <Form.Control type="text" placeholder={food.calories}
                                          defaultValue={food.calories}
                                          onChange={handleCaloriesChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Item Category</Form.Label>
                            <Form.Control type="text" placeholder={food.foodCategory}
                                          defaultValue={food.foodCategory}
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