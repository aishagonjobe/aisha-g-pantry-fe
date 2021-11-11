import {Button, Container, FloatingLabel, Form, Tab, Tabs} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";

function AccountSettings({
                             handleUpdateUser,
                             updatePending,
                             updateFailure,
                             updateUserPending,
                             updateUserFailure
                         }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [LoginShow, setLoginShow] = useState(false);
    const handleLoginShow = () => setLoginShow(true);
    const dispatch = useDispatch();

    function updateUser(event) {
        event.preventDefault();
        handleUpdateUser(firstName, lastName, username, password);
    }


    function onFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event) {
        setLastName(event.target.value)
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <Container className="my-4">
            <Tabs defaultActiveKey="update" className="mb-3">
                <Tab eventKey="update" title="Update Account">
                    <Form className="update-form" onSubmit={updateUser}>
                        <span className="login-form-title">Update Settings</span>
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                            <Form.Control className="wrap-input" type="text" placeholder="First Name"
                                          onChange={onFirstNameChange}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                            <Form.Control className="wrap-input" type="text" placeholder="First Name"
                                          onChange={onLastNameChange}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                            <Form.Control className="wrap-input" type="text" placeholder="Username"
                                          onChange={onUsernameChange}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control className="wrap-input" type="password" placeholder="Password"
                                          onChange={onPasswordChange}/>
                        </FloatingLabel>
                        <div className="container-login-form-btn">
                            <Button className="login-form-btn">Submit</Button>
                        </div>
                    </Form>
                </Tab>
                <Tab eventKey="delete" title="Delete">
                    <Container className="delete-form">
                        <span className="login-form-title">Delete Account</span>
                        <span className="login-form-title"><h5>Please note, this cannot be undone.</h5></span>
                        <div className="container-login-form-btn">
                            <Button className="login-form-btn">Delete</Button>
                        </div>
                    </Container>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default AccountSettings;