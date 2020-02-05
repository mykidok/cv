export function addLine(line) {
    return {
        type: 'ADD_LINE',
        payload: line
    }
}

export function clearState() {
    return { type: 'CLEAR_STATE' }
}