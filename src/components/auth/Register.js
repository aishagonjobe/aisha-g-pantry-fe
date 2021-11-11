import '../../css/auth.css';
import {Button, FloatingLabel, Form} from 'react-bootstrap'
import {useState} from "react";
import {useDispatch} from "react-redux";


function Register({
                      handleLogin,
                      handleCreateUser,
                      loginPending,
                      loginFailure,
                      createUserPending,
                      createUserFailed
                  }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [LoginShow, setLoginShow] = useState(false);
    const handleLoginShow = () => setLoginShow(true);
    const dispatch = useDispatch();

    function registerUser(event) {
        event.preventDefault();
        handleCreateUser(firstName, lastName, username, password);
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
        <>
            {/*<Register show={RegisterShow} handleClose={handleRegisterClose}/>*/}
            <div className="limiter">
                <div className="container-login">
                    <div className="wrap-login">
                        <Form className="register-form" onSubmit={handleLogin}>
                            <span className="login-form-title">Sign Up</span>
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
                                <Button className="login-form-btn" onClick={registerUser}>Register</Button>
                            </div>
                            <div className="text-center">
                                <span className="txt2"><Button variant="link" onClick={handleLoginShow}>Have an account? Sign in</Button></span>
                            </div>
                        </Form>
                        <div className="login-more"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;