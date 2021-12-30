import {
    createRecipe,
    createRecipeCategory,
    deleteRecipe,
    deleteRecipeCategory,
    requestRecipe,
    requestRecipeCategory,
    updateRecipe,
    updateRecipeCategory
} from "../services/recipes.service";

// Actions
export const GET_RECIPES_REQUEST = 'recipe/GET_RECIPES_REQUEST'
export const GET_RECIPES_SUCCESS = 'recipe/GET_RECIPES_SUCCESS'
export const GET_RECIPES_FAILURE = 'recipe/GET_RECIPES_FAILURE'

export const CREATE_RECIPE_REQUEST = 'recipe/CREATE_RECIPE_REQUEST'
export const CREATE_RECIPE_SUCCESS = 'recipe/CREATE_RECIPE_SUCCESS'
export const CREATE_RECIPE_FAILURE = 'recipe/CREATE_RECIPE_FAILURE'

export const UPDATE_RECIPE_REQUEST = 'recipe/UPDATE_RECIPE_REQUEST'
export const UPDATE_RECIPE_SUCCESS = 'recipe/UPDATE_RECIPE_SUCCESS'
export const UPDATE_RECIPE_FAILURE = 'recipe/UPDATE_RECIPE_FAILURE'

export const DELETE_RECIPE_REQUEST = 'recipe/DELETE_RECIPE_REQUEST'
export const DELETE_RECIPE_SUCCESS = 'recipe/DELETE_RECIPE_SUCCESS'
export const DELETE_RECIPE_FAILURE = 'recipe/DELETE_RECIPE_FAILURE'

export const GET_RECIPE_CATEGORY_REQUEST = 'recipe/GET_RECIPE_CATEGORY_REQUEST'
export const GET_RECIPE_CATEGORY_SUCCESS = 'recipe/GET_RECIPE_CATEGORY_SUCCESS'
export const GET_RECIPE_CATEGORY_FAILURE = 'recipe/GET_RECIPE_CATEGORY_FAILURE'

export const CREATE_RECIPE_CATEGORY_REQUEST = 'recipe/CREATE_RECIPE_CATEGORY_REQUEST'
export const CREATE_RECIPE_CATEGORY_SUCCESS = 'recipe/CREATE_RECIPE_CATEGORY_SUCCESS'
export const CREATE_RECIPE_CATEGORY_FAILURE = 'recipe/CREATE_RECIPE_CATEGORY_FAILURE'

export const UPDATE_RECIPE_CATEGORY_REQUEST = 'recipe/UPDATE_RECIPE_CATEGORY_REQUEST'
export const UPDATE_RECIPE_CATEGORY_SUCCESS = 'recipe/UPDATE_RECIPE_CATEGORY_SUCCESS'
export const UPDATE_RECIPE_CATEGORY_FAILURE = 'recipe/UPDATE_RECIPE_CATEGORY_FAILURE'

export const DELETE_RECIPE_CATEGORY_REQUEST = 'recipe/DELETE_RECIPE_CATEGORY_REQUEST'
export const DELETE_RECIPE_CATEGORY_SUCCESS = 'recipe/DELETE_RECIPE_CATEGORY_SUCCESS'
export const DELETE_RECIPE_CATEGORY_FAILURE = 'recipe/DELETE_RECIPE_CATEGORY_FAILURE'

// Reducer
const initialState = {
    getRecipePending: false,
    getRecipeFailure: false,
    recipe: [],
    createRecipePending: false,
    createRecipeFailure: false,
    createRecipeSuccess: false,
    updateRecipePending: false,
    updateRecipeFailure: false,
    updateRecipeSuccess: false,
    deleteRecipePending: false,
    deleteRecipeFailure: false,
    deleteRecipeSuccess: false,
}

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES_REQUEST:
            return {...state, getRecipePending: true}

        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                getRecipePending: false,
                getRecipeFailure: false,
                getRecipeSuccess: true,
                recipe: action.recipe
            }

        case GET_RECIPES_FAILURE:
            return {
                ...state,
                getRecipePending: false,
                getRecipeFailure: true,
                getRecipeSuccess: false
            }

        case CREATE_RECIPE_REQUEST:
            return {...state, createRecipePending: true}

        case CREATE_RECIPE_SUCCESS:
            return {
                ...state,
                createRecipePending: false,
                createRecipeFailure: false,
                createRecipeSuccess: true
            }

        case CREATE_RECIPE_FAILURE:
            return {
                ...state,
                createRecipePending: false,
                createRecipeFailure: true,
                createRecipeSuccess: false
            }

        case DELETE_RECIPE_REQUEST:
            return {...state, deleteRecipePending: true}

        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                deleteRecipePending: false,
                deleteRecipeFailure: false,
                deleteRecipeSuccess: true
            }

        case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                deleteRecipePending: false,
                deleteRecipeFailure: true,
                deleteRecipeSuccess: false
            }

        case GET_RECIPE_CATEGORY_REQUEST:
            return {...state, getRecipeCategoryPending: true}

        case GET_RECIPE_CATEGORY_SUCCESS:
            return {
                ...state,
                getRecipeCategoryPending: false,
                getRecipeCategoryFailure: false,
                getRecipeCategorySuccess: true,
                recipe: action.recipe
            }

        case GET_RECIPE_CATEGORY_FAILURE:
            return {
                ...state,
                getRecipeCategoryPending: false,
                getRecipeCategoryFailure: true,
                getRecipeCategorySuccess: false
            }

        case CREATE_RECIPE_CATEGORY_REQUEST:
            return {...state, createRecipeCategoryPending: true}

        case CREATE_RECIPE_CATEGORY_SUCCESS:
            return {
                ...state,
                createRecipeCategoryPending: false,
                createRecipeCategoryFailure: false,
                createRecipeCategorySuccess: true
            }

        case CREATE_RECIPE_CATEGORY_FAILURE:
            return {
                ...state,
                createRecipeCategoryPending: false,
                createRecipeCategoryFailure: true,
                createRecipeCategorySuccess: false
            }

        case DELETE_RECIPE_CATEGORY_REQUEST:
            return {...state, deleteRecipeCategoryPending: true}

        case DELETE_RECIPE_CATEGORY_SUCCESS:
            return {
                ...state,
                deleteRecipeCategoryPending: false,
                deleteRecipeCategoryFailure: false,
                deleteRecipeCategorySuccess: true
            }

        case DELETE_RECIPE_CATEGORY_FAILURE:
            return {
                ...state,
                deleteRecipeCategoryPending: false,
                deleteRecipeCategoryFailure: true,
                deleteRecipeCategorySuccess: false
            }

        default:
            return state
    }
}

// Action Creators
function getRecipeRequest() {
    return {type: GET_RECIPES_REQUEST}
}

function getRecipeSuccess(recipe) {
    return {
        type: GET_RECIPES_SUCCESS,
        recipe: recipe
    }
}

function getRecipeFailure() {
    return {type: GET_RECIPES_FAILURE}
}

function createRecipeRequest() {
    return {type: CREATE_RECIPE_REQUEST}
}

function createRecipeSuccess() {
    return {type: CREATE_RECIPE_SUCCESS}
}

function createRecipeFailure() {
    return {type: CREATE_RECIPE_FAILURE}
}

function updateRecipeRequest() {
    return {type: UPDATE_RECIPE_REQUEST}
}

function updateRecipeSuccess() {
    return {type: UPDATE_RECIPE_SUCCESS}
}

function updateRecipeFailure() {
    return {type: UPDATE_RECIPE_FAILURE}
}

function deleteRecipeRequest() {
    return {type: DELETE_RECIPE_REQUEST}
}

function deleteRecipeSuccess() {
    return {type: DELETE_RECIPE_SUCCESS}
}

function deleteRecipeFailure() {
    return {type: DELETE_RECIPE_FAILURE}
}

function getRecipeCategoryRequest() {
    return {type: GET_RECIPE_CATEGORY_REQUEST}
}

function getRecipeCategorySuccess(recipeCategory) {
    return {
        type: GET_RECIPE_CATEGORY_SUCCESS,
        recipeCategory: recipeCategory
    }
}

function getRecipeCategoryFailure() {
    return {type: GET_RECIPE_CATEGORY_FAILURE}
}

function createRecipeCategoryRequest() {
    return {type: CREATE_RECIPE_CATEGORY_REQUEST}
}

function createRecipeCategorySuccess() {
    return {type: CREATE_RECIPE_CATEGORY_SUCCESS}
}

function createRecipeCategoryFailure() {
    return {type: CREATE_RECIPE_CATEGORY_FAILURE}
}

function updateRecipeCategoryRequest() {
    return {type: UPDATE_RECIPE_CATEGORY_REQUEST}
}

function updateRecipeCategorySuccess() {
    return {type: UPDATE_RECIPE_CATEGORY_SUCCESS}
}

function updateRecipeCategoryFailure() {
    return {type: UPDATE_RECIPE_CATEGORY_FAILURE}
}

function deleteRecipeCategoryRequest() {
    return {type: DELETE_RECIPE_CATEGORY_REQUEST}
}

function deleteRecipeCategorySuccess() {
    return {type: DELETE_RECIPE_CATEGORY_SUCCESS}
}

function deleteRecipeCategoryFailure() {
    return {type: DELETE_RECIPE_CATEGORY_FAILURE}
}

// Side Effects
export function initiateGetRecipe() {
    return function getRecipe(dispatch, getState) {
        dispatch(getRecipeRequest())
        requestRecipe(getState().user.token).then(response => {
            if (!response.ok) {
                dispatch(getRecipeFailure())
                return
            }
            console.log(response)
            response.json().then(json => {
                if (!json) {
                    dispatch(getRecipeFailure())
                    return
                }

                dispatch(getRecipeSuccess(json))
            })
        })
    }
}

export function initiateCreateRecipe(recipeItem) {
    return function createRecipeDispatcher(dispatch, getState) {
        dispatch(createRecipeRequest())
        createRecipe(getState().user.token, recipeItem).then(response => {
            if (!response.ok) {
                dispatch(createRecipeFailure())
                return
            }

            response.json().then(json => {
                if (!json) {
                    dispatch(createRecipeFailure())
                    return
                }

                dispatch(createRecipeSuccess())
                dispatch(initiateGetRecipe())
            })
        })
    }
}

export function initiateUpdateRecipe(recipeItem) {
    return function updateRecipeDispatcher(dispatch, getState) {
        dispatch(updateRecipeRequest())
        updateRecipe(getState().user.token, recipeItem).then(response => {
            if (!response.ok) {
                dispatch(updateRecipeFailure())
                return
            }

            response.json().then(json => {
                if (!json) {
                    dispatch(updateRecipeFailure())
                    return
                }

                dispatch(updateRecipeSuccess())
                dispatch(initiateGetRecipe())
            })
        }, () => dispatch(updateRecipeFailure()))
    }
}


export function initiateDeleteRecipe(recipeItem) {
    return function deleteRecipeDispatcher(dispatch, getState) {
        dispatch(deleteRecipeRequest())
        deleteRecipe(getState().user.token, recipeItem).then(response => {
            if (!response.ok) {
                dispatch(deleteRecipeFailure())
                return
            }

            response.json().then(json => {
                if (!json) {
                    dispatch(deleteRecipeFailure())
                    return
                }

                if (json !== 'Deleted successfully.') {
                    dispatch(deleteRecipeFailure())
                    return
                }

                dispatch(deleteRecipeSuccess())
                dispatch(initiateGetRecipe())
            })
        })
    }
}

export function initiateGetRecipeCategory() {
    return function getRecipeCategory(dispatch, getState) {
        dispatch(getRecipeCategoryRequest())
        requestRecipeCategory(getState().user.token).then(response => {
            if (!response.ok) {
                dispatch(getRecipeCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json.recipeCategory_list) {
                    dispatch(getRecipeCategoryFailure())
                    return
                }

                dispatch(getRecipeCategorySuccess(json.recipeCategory_list))
            })
        })
    }
}

export function initiateCreateRecipeCategory(recipeCategory) {
    return function createRecipeCategoryDispatcher(dispatch, getState) {
        dispatch(createRecipeCategoryRequest())
        createRecipeCategory(getState().user.token, recipeCategory).then(response => {
            if (!response.ok) {
                dispatch(createRecipeCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json) {
                    dispatch(createRecipeCategoryFailure())
                    return
                }

                dispatch(createRecipeCategorySuccess())
                dispatch(initiateGetRecipeCategory())
            })
        })
    }
}

export function initiateUpdateRecipeCategory(recipeCategory) {
    return function updateRecipeCategoryDispatcher(dispatch, getState) {
        dispatch(updateRecipeCategoryRequest())
        updateRecipeCategory(getState().user.token, recipeCategory).then(response => {
            if (!response.ok) {
                dispatch(updateRecipeCategoryFailure())
                return
            }

            response.json().then(json => {
                if (!json) {
                    dispatch(updateRecipeCategoryFailure())
                    return
                }

                dispatch(updateRecipeCategorySuccess())
                dispatch(initiateGetRecipeCategory())
            })
        }, () => dispatch(updateRecipeCategoryFailure()))
    }
}

export function initiateDeleteRecipeCategory(recipeCategory) {
    return function deleteRecipeCategoryDispatcher(dispatch, getState) {
        dispatch(deleteRecipeCategoryRequest())
        deleteRecipeCategory(getState().user.token, recipeCategory).then(response => {
            if (!response.ok) {
                dispatch(deleteRecipeCategoryFailure())
                return
            }

            response.text().then(json => {
                if (!json) {
                    dispatch(deleteRecipeCategoryFailure())
                    return
                }

                if (json !== 'Deleted successfully.') {
                    dispatch(deleteRecipeCategoryFailure())
                    return
                }

                dispatch(deleteRecipeCategorySuccess())
                dispatch(initiateGetRecipeCategory())
            })
        })
    }
}