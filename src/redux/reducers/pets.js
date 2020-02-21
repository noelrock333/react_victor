function petReducer(currentState = [], { type, payload }) {
    console.log(payload);
    switch(type) {
        case 'SET_PET':
            return [
                ...currentState,
                payload
            ]
        default:
            return currentState;
    }
}

export default petReducer;