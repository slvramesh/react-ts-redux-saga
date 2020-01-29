import {
    GET_CONTACT_LIST,
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT_LIST_SUCCESS,
    GET_CONTACT_LIST_FAIL
} from '../actions/actionTypes';

const initialState = {
    contactList: []
}

export const contactReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
            console.log("Reducer GET_CONTACT_LIST : ", action);
            return { ...state, loading: true };

        case GET_CONTACT_LIST_SUCCESS:
            console.log("Reducer GET_CONTACT_LIST_SUCCESS : ", action);
            return { ...state, ...action, loading: false };

        case GET_CONTACT_LIST_FAIL:
            return { ...state, ...action, loading: false };

        case ADD_CONTACT: {
            console.log("Reducer Add payload : ", action);
            const { name, age } = action.payload;
            return {
                ...state,
                contactList: [...state.contactList, { id: Date.now(), name, age }]
            }
        }

        case EDIT_CONTACT: {
            console.log("Reducer EDIT payload : ", action.payload);
            return modifyContactState(state, action.payload)
        }

        case DELETE_CONTACT: {
            console.log("Reducer DELETE payload : ", action.payload);
            return { ...state, contactList: [...state.contactList.filter((c: any) => (c.id !== action.payload.id))] }
        }

        default:
            return initialState;
    }
};

const modifyContactState = (contactState: any, contactChanges: any) => {
    return {
        ...contactState,
        loading: false,
        contactList: contactState.contactList.map((c: any) => {
            if (c.id === contactChanges.id) {
                return { ...c, ...contactChanges };
            } else {
                return c;
            }
        })
    };
};
