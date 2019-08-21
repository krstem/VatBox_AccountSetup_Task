import { CONSTANTS, initialState } from './constants';

const accountSetupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD:
            return {
                ...state,
                [action.payload.type]: [...state[action.payload.type], action.payload]
            };
        default:
            return initialState;
    }
};

export default accountSetupReducer;