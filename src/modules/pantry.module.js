import {
    createFood,
    createFoodCategory,
    deleteFood,
    deleteFoodCategory,
    requestFood,
    requestFoodCategory,
    updateFood,
    updateFoodCategory
} from "../services/pantry.service";

// Actions
export const GET_FOODS_REQUEST = 'pantry/GET_FOODS_REQUEST'
export const GET_FOODS_SUCCESS = 'pantry/GET_FOODS_SUCCESS'
export const GET_FOODS_FAILURE = 'pantry/GET_FOODS_FAILURE'

export const CREATE_FOOD_REQUEST = 'pantry/CREATE_FOOD_REQUEST'
export const CREATE_FOOD_SUCCESS = 'pantry/CREATE_FOOD_SUCCESS'
export const CREATE_FOOD_FAILURE = 'pantry/CREATE_FOOD_FAILURE'

export const UPDATE_FOOD_REQUEST = 'pantry/UPDATE_FOOD_REQUEST'
export const UPDATE_FOOD_SUCCESS = 'pantry/UPDATE_FOOD_SUCCESS'
export const UPDATE_FOOD_FAILURE = 'pantry/UPDATE_FOOD_FAILURE'

export const DELETE_FOOD_REQUEST = 'pantry/DELETE_FOOD_REQUEST'
export const DELETE_FOOD_SUCCESS = 'pantry/DELETE_FOOD_SUCCESS'
export const DELETE_FOOD_FAILURE = 'pantry/DELETE_FOOD_FAILURE'

export const GET_FOOD_CATEGORY_REQUEST = 'pantry/GET_FOOD_CATEGORY_REQUEST'
export const GET_FOOD_CATEGORY_SUCCESS = 'pantry/GET_FOOD_CATEGORY_SUCCESS'
export const GET_FOOD_CATEGORY_FAILURE = 'pantry/GET_FOOD_CATEGORY_FAILURE'

export const CREATE_FOOD_CATEGORY_REQUEST = 'pantry/CREATE_FOOD_CATEGORY_REQUEST'
export const CREATE_FOOD_CATEGORY_SUCCESS = 'pantry/CREATE_FOOD_CATEGORY_SUCCESS'
export const CREATE_FOOD_CATEGORY_FAILURE = 'pantry/CREATE_FOOD_CATEGORY_FAILURE'

export const UPDATE_FOOD_CATEGORY_REQUEST = 'pantry/UPDATE_FOOD_CATEGORY_REQUEST'
export const UPDATE_FOOD_CATEGORY_SUCCESS = 'pantry/UPDATE_FOOD_CATEGORY_SUCCESS'
export const UPDATE_FOOD_CATEGORY_FAILURE = 'pantry/UPDATE_FOOD_CATEGORY_FAILURE'

export const DELETE_FOOD_CATEGORY_REQUEST = 'pantry/DELETE_FOOD_CATEGORY_REQUEST'
export const DELETE_FOOD_CATEGORY_SUCCESS = 'pantry/DELETE_FOOD_CATEGORY_SUCCESS'
export const DELETE_FOOD_CATEGORY_FAILURE = 'pantry/DELETE_FOOD_CATEGORY_FAILURE'

// Reducer
const initialState = {
    getFoodPending: false,
    getFoodFailure: false,
    food: [],
    createFoodPending: false,
    createFoodFailure: false,
    createFoodSuccess: false,
    updateFoodPending: false,
    updateFoodFailure: false,
    updateFoodSuccess: false,
    deleteFoodPending: false,
    deleteFoodFailure: false,
    deleteFoodSuccess: false,

    getFoodCategoryPending: false,
    getFoodCategoryFailure: false,
    foodCategory: [],
    createFoodCategoryPending: false,
    createFoodCategoryFailure: false,
    createFoodCategorySuccess: false,
    updateFoodCategoryPending: false,
    updateFoodCategoryFailure: false,
    updateFoodCategorySuccess: false,
    deleteFoodCategoryPending: false,
    deleteFoodCategoryFailure: false,
    deleteFoodCategorySuccess: false,
}

export default function pantryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FOODS_REQUEST:
            return {...state, getFoodPending: true}

        case GET_FOODS_SUCCESS:
            return {
                ...state,
                getFoodPending: false,
                getFoodFailure: false,
                getFoodSuccess: true,
                food: action.food
            }

        case GET_FOODS_FAILURE:
            return {
                ...state,
                getFoodPending: false,
                getFoodFailure: true,
                getFoodSuccess: false
            }

        case CREATE_FOOD_REQUEST:
            return {...state, createFoodPending: true}

        case CREATE_FOOD_SUCCESS:
            return {
                ...state,
                createFoodPending: false,
                createFoodFailure: false,
                createFoodSuccess: true
            }

        case CREATE_FOOD_FAILURE:
            return {
                ...state,
                createFoodPending: false,
                createFoodFailure: true,
                createFoodSuccess: false
            }

        case DELETE_FOOD_REQUEST:
            return {...state, deleteFoodPending: true}

        case DELETE_FOOD_SUCCESS:
            return {
                ...state,
                deleteFoodPending: false,
                deleteFoodFailure: false,
                deleteFoodSuccess: true
            }

        case DELETE_FOOD_FAILURE:
            return {
                ...state,
                deleteFoodPending: false,
                deleteFoodFailure: true,
                deleteFoodSuccess: false
            }

        case GET_FOOD_CATEGORY_REQUEST:
            return {...state, getFoodCategoryPending: true}

        case GET_FOOD_CATEGORY_SUCCESS:
            return {
                ...state,
                getFoodCategoryPending: false,
                getFoodCategoryFailure: false,
                getFoodCategorySuccess: true,
                food: action.food
            }

        case GET_FOOD_CATEGORY_FAILURE:
            return {
                ...state,
                getFoodCategoryPending: false,
                getFoodCategoryFailure: true,
                getFoodCategorySuccess: false
            }

        case CREATE_FOOD_CATEGORY_REQUEST:
            return {...state, createFoodCategoryPending: true}

        case CREATE_FOOD_CATEGORY_SUCCESS:
            return {
                ...state,
                createFoodCategoryPending: false,
                createFoodCategoryFailure: false,
                createFoodCategorySuccess: true
            }

        case CREATE_FOOD_CATEGORY_FAILURE:
            return {
                ...state,
                createFoodCategoryPending: false,
                createFoodCategoryFailure: true,
                createFoodCategorySuccess: false
            }

        case DELETE_FOOD_CATEGORY_REQUEST:
            return {...state, deleteFoodCategoryPending: true}

        case DELETE_FOOD_CATEGORY_SUCCESS:
            return {
                ...state,
                deleteFoodCategoryPending: false,
                deleteFoodCategoryFailure: false,
                deleteFoodCategorySuccess: true
            }

        case DELETE_FOOD_CATEGORY_FAILURE:
            return {
                ...state,
                deleteFoodCategoryPending: false,
                deleteFoodCategoryFailure: true,
                deleteFoodCategorySuccess: false
            }

        default:
            return state
    }
}

// Action Creators
function getFoodRequest() {
    return {type: GET_FOODS_REQUEST}
}

function getFoodSuccess(food) {
    return {
        type: GET_FOODS_SUCCESS,
        food: food
    }
}

function getFoodFailure() {
    return {type: GET_FOODS_FAILURE}
}

function createFoodRequest() {
    return {type: CREATE_FOOD_REQUEST}
}

function createFoodSuccess() {
    return {type: CREATE_FOOD_SUCCESS}
}

function createFoodFailure() {
    return {type: CREATE_FOOD_FAILURE}
}

function updateFoodRequest() {
    return {type: UPDATE_FOOD_REQUEST}
}

function updateFoodSuccess() {
    return {type: UPDATE_FOOD_SUCCESS}
}

function updateFoodFailure() {
    return {type: UPDATE_FOOD_FAILURE}
}

function deleteFoodRequest() {
    return {type: DELETE_FOOD_REQUEST}
}

function deleteFoodSuccess() {
    return {type: DELETE_FOOD_SUCCESS}
}

function deleteFoodFailure() {
    return {type: DELETE_FOOD_FAILURE}
}

function getFoodCategoryRequest() {
    return {type: GET_FOOD_CATEGORY_REQUEST}
}

function getFoodCategorySuccess(foodCategory) {
    return {
        type: GET_FOOD_CATEGORY_SUCCESS,
        foodCategory: foodCategory
    }
}

function getFoodCategoryFailure() {
    return {type: GET_FOOD_CATEGORY_FAILURE}
}

function createFoodCategoryRequest() {
    return {type: CREATE_FOOD_CATEGORY_REQUEST}
}

function createFoodCategorySuccess() {
    return {type: CREATE_FOOD_CATEGORY_SUCCESS}
}

function createFoodCategoryFailure() {
    return {type: CREATE_FOOD_CATEGORY_FAILURE}
}

function updateFoodCategoryRequest() {
    return {type: UPDATE_FOOD_CATEGORY_REQUEST}
}

function updateFoodCategorySuccess() {
    return {type: UPDATE_FOOD_CATEGORY_SUCCESS}
}

function updateFoodCategoryFailure() {
    return {type: UPDATE_FOOD_CATEGORY_FAILURE}
}

function deleteFoodCategoryRequest() {
    return {type: DELETE_FOOD_CATEGORY_REQUEST}
}

function deleteFoodCategorySuccess() {
    return {type: DELETE_FOOD_CATEGORY_SUCCESS}
}

function deleteFoodCategoryFailure() {
    return {type: DELETE_FOOD_CATEGORY_FAILURE}
}

// Side Effects
export function initiateGetFood() {
    return function getFood(dispatch, getState) {
        dispatch(getFoodRequest())
        requestFood(getState().user.token).then(response => {
            if (!response.ok) {
                dispatch(getFoodFailure())
                return
            }

            response.json().then(json => {
                if (!json.food_list) {
                    dispatch(getFoodFailure())
                    return
                }

                dispatch(getFoodSuccess(json.food_list))
            })
        })
    }
}

export function initiateCreateFood(food) {
    return function createFoodDispatcher(dispatch, getState) {
        dispatch(createFoodRequest())
        createFood(getState().user.token, food).then(response => {
            if (!response.ok) {
                dispatch(createFoodFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(createFoodFailure())
                    return
                }

                if (json.message !== 'created') {
                    dispatch(createFoodFailure())
                    return
                }

                dispatch(createFoodSuccess())
                dispatch(initiateGetFood())
            })
        })
    }
}

export function initiateUpdateFood(food) {
    return function updateFoodDispatcher(dispatch, getState) {
        dispatch(updateFoodRequest())
        updateFood(localStorage.getItem("token"), food).then(response => {
            if (!response.ok) {
                dispatch(updateFoodFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(updateFoodFailure())
                    return
                }
                if (json.message !== 'updated') {
                    dispatch(updateFoodFailure())
                    return
                }

                dispatch(updateFoodSuccess())
                dispatch(initiateGetFood())
            })
        }, () => dispatch(updateFoodFailure()))
    }
}


export function initiateDeleteFood(food) {
    return function deleteFoodDispatcher(dispatch, getState) {
        dispatch(deleteFoodRequest())
        deleteFood(getState().user.token, food).then(response => {
            if (!response.ok) {
                dispatch(deleteFoodFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(deleteFoodFailure())
                    return
                }

                if (json.message !== 'delete') {
                    dispatch(deleteFoodFailure())
                    return
                }

                dispatch(deleteFoodSuccess())
                dispatch(initiateGetFood())
            })
        })
    }
}

export function initiateGetFoodCategory() {
    return function getFoodCategory(dispatch, getState) {
        dispatch(getFoodCategoryRequest())
        requestFoodCategory(getState().user.token).then(response => {
            if (!response.ok) {
                dispatch(getFoodCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json.foodCategory_list) {
                    dispatch(getFoodCategoryFailure())
                    return
                }

                dispatch(getFoodCategorySuccess(json.foodCategory_list))
            })
        })
    }
}

export function initiateCreateFoodCategory(foodCategory) {
    return function createFoodCategoryDispatcher(dispatch, getState) {
        dispatch(createFoodCategoryRequest())
        createFoodCategory(getState().user.token, foodCategory).then(response => {
            if (!response.ok) {
                dispatch(createFoodCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(createFoodCategoryFailure())
                    return
                }

                if (json.message !== 'created') {
                    dispatch(createFoodCategoryFailure())
                    return
                }

                dispatch(createFoodCategorySuccess())
                dispatch(initiateGetFoodCategory())
            })
        })
    }
}

export function initiateUpdateFoodCategory(foodCategory) {
    return function updateFoodCategoryDispatcher(dispatch, getState) {
        dispatch(updateFoodCategoryRequest())
        updateFoodCategory(localStorage.getItem("token"), foodCategory).then(response => {
            if (!response.ok) {
                dispatch(updateFoodCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(updateFoodCategoryFailure())
                    return
                }
                if (json.message !== 'updated') {
                    dispatch(updateFoodCategoryFailure())
                    return
                }

                dispatch(updateFoodCategorySuccess())
                dispatch(initiateGetFoodCategory())
            })
        }, () => dispatch(updateFoodCategoryFailure()))
    }
}

export function initiateDeleteFoodCategory(foodCategory) {
    return function deleteFoodCategoryDispatcher(dispatch, getState) {
        dispatch(deleteFoodCategoryRequest())
        deleteFoodCategory(getState().user.token, foodCategory).then(response => {
            if (!response.ok) {
                dispatch(deleteFoodCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json.message) {
                    dispatch(deleteFoodCategoryFailure())
                    return
                }

                if (json.message !== 'delete') {
                    dispatch(deleteFoodCategoryFailure())
                    return
                }

                dispatch(deleteFoodCategorySuccess())
                dispatch(initiateGetFoodCategory())
            })
        })
    }
}