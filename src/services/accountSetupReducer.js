import { CONSTANTS, initialState } from './constants';

const accountSetupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD:
            return {
                ...state,
                [action.payload.type]: [...state[action.payload.type], action.payload]
            };
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