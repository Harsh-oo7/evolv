const allDish = [];

const updateState = (state=allDish,action) => {
    switch(action.type) {
        case "ADD_DISH" : return state = action.payload ;
        default:
            return state;
    }
}

export default updateState;