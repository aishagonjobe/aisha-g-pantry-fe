import '../../css/auth.css';
import {Button, FloatingLabel, Form} from 'react-bootstrap'
import {useState} from "react";


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
    // const [RegisterShow, setRegisterShow] = useState(false);
    // const [LoginShow, setLoginShow] = useState(false);
    // const handleLoginClose = () => setLoginShow(false);


    function handleLogin(event) {
        event.preventDefault();
        handleLoginRequest({username, password});
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <>
            <div className="limiter">
                <div className="container-login">
                    <div className="wrap-login">
                        <Form className="login-form">
                            <span className="login-form-title">Please Login</span>
                            <FloatingLabel
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control className="wrap-input" type="text" placeholder="Username"
                                              onChange={onUsernameChange}/>
                            </FloatingLabel>
                            <FloatingLabel label="Password">
                                <Form.Control className="wrap-input" type="password"
                                              autoComplete="current-password"
                                              placeholder="Password"
                                              onChange={onPasswordChange}/>
                            </FloatingLabel>
                            <div className="container-login-form-btn">
                                <Button className="login-form-btn" onClick={handleLogin}>Login</Button>
                            </div>
                            <div className="text-center">
                            </div>
                        </Form>
                        {/*<Register className="login-form" registerShow={RegisterShow} onClick={handleLoginClose}/>*/}
                        <div className="login-more"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;