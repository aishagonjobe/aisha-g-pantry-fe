import '../../css/auth.css';
import {Button, FloatingLabel, Form} from 'react-bootstrap'
import {useState} from "react";
import {useDispatch} from "react-redux";


function Login({
                   handleLoginRequest,
                   handleCreateUser,
                   loginPending,
                   loginFailure,
                   createUserPending,
                   createUserFailed
               }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [RegisterShow, setRegisterShow] = useState(false);
    const handleRegisterClose = () => setRegisterShow(false);
    const handleRegisterShow = () => setRegisterShow(true);
    const dispatch = useDispatch();

    function handleLogin(event) {
        event.preventDefault();
        handleLoginRequest(username, password);
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
                        <Form className="login-form" onSubmit={handleLogin}>
                            <span className="login-form-title">Please Login</span>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control className="wrap-input" type="text" placeholder="Username"
                                              onChange={onUsernameChange}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control className="wrap-input" type="password" placeholder="Password"
                                              onChange={onPasswordChange}/>
                            </FloatingLabel>
                            <div className="container-login-form-btn">
                                <Button className="login-form-btn">Login</Button>
                            </div>
                            <div className="text-center">
                                <span className="txt2"><Button variant="link" onClick={handleRegisterShow}>New User? Sign up</Button></span>
                            </div>
                        </Form>
                        <div className="login-more"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;