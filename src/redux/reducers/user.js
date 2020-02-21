function userReducer(currentState = {}, { type, payload }) {
    console.log(payload);
    switch(type) {
        case 'SET_USER':
            return {
                ...currentState,
                ...payload
            }
        default:
            return currentState;
    }
}

export default userReducer;