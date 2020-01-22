import {
    GET_CONTACT_LIST,
    ADD_CONTACT
} from '../actions/actionTypes';

const initialState = {
    contactList: [{
        id: 1,
        name: "Mohan",
        age: 23
    }, {
        id: 2,
        name: "Kumar s",
        age: 34
    }, {
        id: 3,
        name: "Anitha V",
        age: 31
    }
    ]
}

const contactReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
            return { ...state, loading: true };

        case ADD_CONTACT: {
            console.log("Reducer Add payload : ", action);
            if (action.payload) {
                let { contactList } = state;
                const { name, age } = action.payload.contact;
                const id = Date.now();
                contactList.push({ id, name, age });
                return { ...state, contactList }
            }
            else {
                return { ...state }
            }
        }
            break;

        default:
            return initialState;
    }
};

export default contactReducer;