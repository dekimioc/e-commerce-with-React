import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUsers: null
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER: 
           return {
                ...state,
                currentUsers: action.payload
        }
        default:
            return state;
    }
}

export default UserReducer;