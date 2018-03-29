export default (state= {}, action) => {
    switch (action.type) {
        case 'SET_MY_NAME' :
            console.log('taking the name and save it.');
            return action.payload;
            break;
    }
    return state;
};

