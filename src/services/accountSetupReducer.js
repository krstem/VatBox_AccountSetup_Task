import { CONSTANTS, initialState } from './constants';

const accountSetupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD:
            return {
                ...state,
                [action.payload.type]: [...state[action.payload.type], action.payload]
            };
        case CONSTANTS.EDIT:
            const indexOfUser = state[action.payload.type].findIndex(user => user.id === action.payload.id);
            let newState = { ...state };
            newState[action.payload.type][indexOfUser] = action.payload;
            return newState;
        case CONSTANTS.DELETE:
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].filter(person => person.id !== action.payload.id)
            }
        default:
            return initialState;
    }
};

export default accountSetupReducer;