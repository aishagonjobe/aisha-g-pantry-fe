import config from "../config";

export function requestRecipe(token) {
    return fetch(`${config.recipesAPI} + /get-recipes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function createRecipe(token, recipe) {
    return fetch(`${config.recipesAPI} + /create-recipe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(recipe)
    })
}

export function updateRecipe(token, recipe) {
    return fetch(`${config.recipesAPI} + /update-recipe/ + ${recipe.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(recipe)
    })
}

export function deleteRecipe(token, recipe) {
    return fetch(`${config.recipesAPI} + /delete-recipe/ + ${recipe.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(recipe)
    })
}


export function requestRecipeCategory(token) {
    return fetch(`${config.recipesAPI} + /recipe-categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function createRecipeCategory(token, recipeCategory) {
    return fetch(`${config.recipesAPI} + /create-recipe-category`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(recipeCategory)
    })
}

export function updateRecipeCategory(token, recipeCategory) {
    return fetch(`${config.recipesAPI} + /update-recipe-category/ + ${recipeCategory.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(recipeCategory)
    })
}

export function deleteRecipeCategory(token, recipeCategory) {
    return fetch(`${config.recipesAPI} + /delete-recipe-category/ + ${recipeCategory.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(recipeCategory)
    })
}