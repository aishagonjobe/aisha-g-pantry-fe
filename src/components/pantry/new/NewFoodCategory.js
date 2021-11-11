import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {initiateCreateFoodCategory} from "../../store/action/FoodCategorys.action";

export default function NewFoodCategory({show, handleClose}) {
    const dispatch = useDispatch();
    const [id, setFoodCategoryId] = useState('');
    const [event_id, setEvent_id] = useState('');
    const [user_id, setUser_id] = useState('');
    const [accepted, setAccepted] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        handleClose();
        dispatch(initiateCreateFoodCategory({
            id, event_id, user_id, accepted
        }));
    }

    function handleIdChange(event) {
        setFoodCategoryId(event.target.value)
    }

    function handleEventIDChange(event) {
        setEvent_id(event.target.value)
    }

    function handleUserIDChange(event) {
        setUser_id(event.target.value)
    }


    function handleAcceptanceChange(event) {
        setAccepted(event.target.value)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Food Category</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Category ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter your task's text"
                                      onChange={handleIdChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Event ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter your task's text"
                                      onChange={handleEventIDChange}/>
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