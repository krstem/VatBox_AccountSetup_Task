export const PROCESS_MESSAGE = {
    LOADING: 'Loading...',
};

export const CONSTANTS = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE'
}

export const initialState = {
    leaders: [
        {
            id: 1,
            name: 'Julia Libder',
            phoneNumber: '+46-591-409173',
            email: 'julia.libder@amco.com'
        }
    ],
    contacts: [
        {
            id: 1,
            name: 'Maria Armstrong',
            phoneNumber: '+46-591-409173',
            email: 'maria@armstrong.com'
        }
    ]
}