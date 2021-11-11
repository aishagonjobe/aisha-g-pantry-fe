import {deleteUser, updateUser} from "../services/auth.service";

// Actions
export const UPDATE_USER_REQUEST = 'user/UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'user/UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'user/UPDATE_USER_FAILURE'

export const DELETE_USER_REQUEST = 'user/DELETE_USER_REQUEST'
export const DELETE_USER_SUCCESS = 'user/DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'user/DELETE_USER_FAILURE'

// Reducer
const initialState = {
    user: [],
    updateUserPending: false,
    updateUserFailure: false,
    updateUserSuccess: false,
    deleteUserPending: false,
    deleteUserFailure: false,
    deleteUserSuccess: false,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {...state, updateUserPending: true}

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUserPending: false,
                updateUserFailure: false,
                updateUserSuccess: true
            }

        case UPDATE_USER_FAILURE:
            return {
                ...state,
                updateUserPending: false,
                updateUserFailure: true,
                updateUserSuccess: false
            }
        case DELETE_USER_REQUEST:
            return {...state, deleteUserPending: true}

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUserPending: false,
                deleteUserFailure: false,
                deleteUserSuccess: true
            }

        case DELETE_USER_FAILURE:
            return {
                ...state,
                deleteUserPending: false,
                deleteUserFailure: true
            }
        default:
            return state
    }
}

// Action Creators
function updateUserRequest() {
    return {type: UPDATE_USER_REQUEST}
}

function updateUserSuccess(user) {
    return {type: UPDATE_USER_SUCCESS}
}

function updateUserFailure() {
    return {type: UPDATE_USER_FAILURE}
}

function deleteUserRequest() {
    return {type: DELETE_USER_REQUEST}
}

function deleteUserSuccess(user) {
    return {type: DELETE_USER_SUCCESS}
}

function deleteUserFailure() {
    return {type: DELETE_USER_FAILURE}
}

// Side Effects
export function initiateUpdateUser(user) {

    return function updateUserDispatcher(dispatch, getState) {
        dispatch(updateUserRequest())
        updateUser(getState().user.token, user)
            .then(response => {
                if (!response.ok) {
                    dispatch(updateUserFailure())
                    return
                }

                response.json().then(json => {
                    console.log(json.Message)
                    if (!json.Message) {
                        dispatch(updateUserFailure())
                        return
                    }
                    if (json.Message !== 'User Modified!') {
                        dispatch(updateUserFailure())
                        return
                    }

                    dispatch(updateUserSuccess())
                }, () => dispatch(updateUserFailure()))
            }, () => dispatch(updateUserFailure()))
    }
}

export function initiateDeleteUser(user) {
    return function deleteUserDispatcher(dispatch, getState) {
        dispatch(deleteUserRequest())
        deleteUser(getState().user.token, user)
            .then(response => {
                if (!response.ok) {
                    dispatch(deleteUserFailure())
                    return
                }
                response.json().then(json => {
                    if (!json.message) {
                        dispatch(deleteUserFailure())
                        return
                    }
                    if (json.message !== 'User Deleted!') {
                        dispatch(deleteUserFailure())
                        return
                    }

                    dispatch(deleteUserSuccess())
                }, () => dispatch(deleteUserFailure()))
            }, () => dispatch(deleteUserFailure()))
    }
}
