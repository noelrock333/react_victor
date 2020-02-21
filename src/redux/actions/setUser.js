function action(user) {
    console.log('SET_USER')
    return { type: 'SET_USER', payload: user }
}

export default action;