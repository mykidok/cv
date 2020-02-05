import React from "react";

const lineReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LINE':
            action.payload.id = Date.now();
            return [...state, action.payload];
        case 'CLEAR_STATE':
            return state = [];
        default:
            return state
    }
};

export default lineReducer