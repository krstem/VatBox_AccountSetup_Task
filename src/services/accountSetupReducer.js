import { CONSTANTS, initialState } from './constants';

const accountSetupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD:
            return [].concat(state, action.payload);
        case CONSTANTS.EDIT:
            return state.map((leader) => {
                if (leader.id === action.payload.id) {
                    return {
                        ...leader,
                        name: action.payload.name,
                        phoneNumber: action.payload.phoneNumber,
                        email: action.payload.email
                    }
                } else return leader;
            });
        case CONSTANTS.ADD_CONTACTS:
            return [].concat(state, action.payload);
        case CONSTANTS.EDIT_CONTACTS:
            return state.map((contact) => {
                if (contact.id === action.payload.id) {
                    return {
                        ...contact,
                        name: action.payload.name,
                        phoneNumber: action.payload.phoneNumber,
                        email: action.payload.email
                    }
                } else return contact;
            });
        default:
            return initialState;
    }
};

export default accountSetupReducer;