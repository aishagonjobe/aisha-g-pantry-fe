import {registerUser, requestLogin} from "../services/auth.service";
import {initiateGetFood} from "./pantry.module";
import {initiateGetRecipe} from "./recipe.module";

// Actions
export const REGISTRATION_REQUEST = 'auth/REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'auth/REGISTRATION_SUCCESS'
export const REGISTRATION_FAILURE = 'auth/REGISTRATION_FAILURE'

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
export const LOGOUT = 'auth/LOGOUT'

// Reducer
const initialState = {
    createUserPending: false,
    createUserFailure: false,
    createUserSuccess: false,
    token: '',
    loginPending: false,
    loginFailure: false,
    loginSuccess: false,
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                ...state,
                createUserPending: true
            }

        case REGISTRATION_SUCCESS:
            return {
                ...state,
                createUserPending: false,
                createUserFailure: false,
                token: action.token
            }

        case REGISTRATION_FAILURE:
            return {
                ...state,
                createUserPending: false,
                createUserFailure: true
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loginPending: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginPending: false,
                loginFailure: false,
                token: action.token
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginPending: false,
                loginFailure: true
            }

        case LOGOUT:
            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
}

// Action Creators
export function registrationRequest() {
    return {type: REGISTRATION_REQUEST}
}

export function registrationSuccess(token) {
    return {type: REGISTRATION_SUCCESS, token: token}
}

export function registrationFailure() {
    return {type: REGISTRATION_FAILURE}
}

export function loginRequest() {
    return {type: LOGIN_REQUEST}
}

export function loginSuccess(token) {
    return {type: LOGIN_SUCCESS, token: token}
}

export function loginFailure() {
    return {type: LOGIN_FAILURE}
}

export function logout() {
    return {type: LOGOUT}
}

// Side Effects
export function initiateRegistration(credentials) {
    return function register(dispatch) {
        dispatch(registrationRequest())
        registerUser(credentials).then(response => {
            if (!response.ok) {
                dispatch(registrationFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(registrationFailure())
                    return
                }
                if (json.message !== 'created') {
                    dispatch(registrationFailure())
                    return
                }

                dispatch(registrationSuccess(json.token))
            })
        })
    }
}

export function initiateLogin(credentials) {
    return function login(dispatch) {
        dispatch(loginRequest())
        requestLogin(credentials).then(response => {
            if (!response.ok) {
                dispatch(loginFailure())
                return
            }

            response.text().then(data => {
                if (!data) {
                    dispatch(loginFailure())
                    return
                }

                localStorage.setItem("Login Success", data)

                dispatch(loginSuccess(data))
                dispatch(initiateGetFood())
                dispatch(initiateGetRecipe())
            })
        })
    }
}

export function initiateLogout() {
    return function logout(dispatch) {
        dispatch(logout());
        localStorage.removeItem("token");
    }
}