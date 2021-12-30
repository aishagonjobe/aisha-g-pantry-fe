import config from "../config";

export function requestFood(token) {
    return fetch(`${config.pantryAPI}/get-foods`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function createFood(token, food) {
    return fetch(`${config.pantryAPI}/create-food`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(food)
    })
}

export function requestFoodItem(token, food) {
    return fetch(`${config.pantryAPI}/get-food-item/${food.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function updateFood(token, food) {
    return fetch(`${config.pantryAPI}/update-food?id=${food.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(food)
    })
}

export function deleteFood(token, food) {
    return fetch(`${config.pantryAPI}/delete-food?id=${food.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(food)
    })
}


export function requestFoodCategory(token) {
    return fetch(`${config.pantryAPI}/food-category`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function createFoodCategory(token, foodCategory) {
    return fetch(`${config.pantryAPI}/create-food-category`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(foodCategory)
    })
}

export function updateFoodCategory(token, foodCategory) {
    return fetch(`${config.pantryAPI}/update-food-category/${foodCategory.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(foodCategory)
    })
}

export function deleteFoodCategory(token, foodCategory) {
    return fetch(`${config.pantryAPI}/delete-food-category/${foodCategory.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(foodCategory)
    })
}