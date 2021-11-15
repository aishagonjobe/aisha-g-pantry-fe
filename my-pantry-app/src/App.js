import {connect} from 'react-redux';
import Login from "./components/auth/Login";
import Navigation from "./components/Navigation";
import MyPantry from "./components/MyPantry";
import {initiateLogin} from "./modules/auth.module";

function App({
                 dispatch, token, handleLoginRequest, loginFailure,
                 loginPending, handleLogoutRequest, handleCreateUserRequest,
                 createUserPending, createUserFailure
             }) {
    return (
        <>
            {token ?
                <>
                    <MyPantry/>
                </> : <>
                    <Navigation
                        handleLogoutRequest={handleLogoutRequest}
                    />
                    <Login
                        handleLoginRequest={(credentials) => dispatch(initiateLogin(credentials))}
                        loginFailure={loginFailure}
                        loginPending={loginPending}
                        handleCreateUserRequest={handleCreateUserRequest}
                        createUserPending={createUserPending}
                        createUserFailure={createUserFailure}
                    />
                </>
            }
        </>
    )
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