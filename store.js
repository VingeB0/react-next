import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'My first product',
            price: 50,
            description: 'I like turtles',
            image: 'https://placeimg.com/640/480/nature',
            id: 1
        },{
            name: 'My second product',
            price: 100,
            description: 'I like zonks',
            image: 'https://placeimg.com/640/480/nature?t=1531145800438',
            id: 2
        },{
            name: 'My third product',
            price: 150,
            description: 'I like dragons',
            image: 'https://placeimg.com/640/480/nature?t=1531145814857',
            id: 3
        }
    ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(reducer, initialState)
}