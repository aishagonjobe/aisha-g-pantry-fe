import './App.css';
import {connect} from 'react-redux';
import MyPantry from "./components/MyPantry";
import {logout} from "./modules/auth.module";
import Register from "./components/auth/Register";
import Navigation from "./components/Navigation";

function App(
    dispatch, token, user,
    handleLoginRequest, loginFailure, loginPending, handleLogoutRequest,
    handleCreateUserRequest, createUserPending, createUserFailure,
) {
    if (token) {
        return (
            <>
                <div className="app-container">
                    <div><Navigation handleLogoutRequest={() => dispatch(logout())}/></div>
                    <div><MyPantry/></div>
                </div>
            </>)
    } else {
        return (
            <>
                {/*<Navbar/>*/}
                <Register
                    handleLoginRequest={handleLoginRequest}
                    loginFailure={loginFailure}
                    loginPending={loginPending}
                    handleCreateUserRequest={handleCreateUserRequest}
                    createUserPending={createUserPending}
                    createUserFailure={createUserFailure}
                />
            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        ...state.auth,
        ...state.pantry,
        ...state.recipe,
        ...state.user
    }
}

export default connect(mapStateToProps)(App);