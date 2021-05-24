const role = null;

const updateRole = (state=role,action) => {
    switch(action.type) {
        case "ADD_ROLE" : return state = action.payload ;
        default:
            return state;
    }
}

export default updateRole;