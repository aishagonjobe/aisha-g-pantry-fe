import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {initiateUpdateFoodCategory} from "../../../modules/pantry.module";

export default function UpdateFoodCategory({show, handleClose}) {
    const dispatch = useDispatch();
    const [id, setFoodCategoryId] = useState('');
    const [user_id, setUser_id] = useState('');
    const [event_id, setFoodCategory_id] = useState('');
    const [accepted, setAccepted] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        handleClose();
        dispatch(initiateUpdateFoodCategory({
            id, user_id, event_id, accepted
        }));
    }

    function handleIdChange(event) {
        setFoodCategoryId(event.target.value)
    }


    function handleUserIDChange(event) {
        setUser_id(event.target.value)
    }

    function handleFoodCategoryIDChange(event) {
        setFoodCategory_id(event.target.value)
    }

    function handleAcceptanceChange(event) {
        setAccepted(event.target.value)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Food Category</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Category ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter your task's text"
                                      onChange={handleIdChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>FoodCategory ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter your task's text"
                                      onChange={handleFoodCategoryIDChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter your task's text"
                                      onChange={handleUserIDChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Accepted?</Form.Label>
                        <Form.Control type="text" placeholder="Enter your event's text"
                                      onChange={handleAcceptanceChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}