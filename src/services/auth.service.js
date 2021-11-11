import config from "../config";

export function registerUser(credentials) {
    return fetch(`${config.userAPI} + /create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    })
}

export function requestLogin(credentials) {
    return fetch(`${config.userAPI}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}

export function requestUser(token, user) {
    return fetch(`${config.userAPI}/user-settings/ + ${user.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function updateUser(token, user) {
    return fetch(`${config.userAPI} + /update/ + ${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(user)
    })
}

export function deleteUser(token, user) {
    return fetch(`${config.userAPI} + /delete/ + ${user.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(user)
    })
}