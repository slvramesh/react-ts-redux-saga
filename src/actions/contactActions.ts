import { iContact } from '../interface/contactInterface';

import {
    GET_CONTACT_LIST,
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT
} from '../actions/actionTypes';

export const getContactListAction = () => {
    console.log(" getContactListAction Action invoked")
    return {
        type: GET_CONTACT_LIST
    };
}

export const addContactAction = (contact: iContact) => ({
    type: ADD_CONTACT,
    payload: { ...contact }
});

export const editContactAction = (contact: iContact) => ({
    type: EDIT_CONTACT,
    payload: { ...contact }
});

export const deleteContactAction = (contact: iContact) => ({
    type: DELETE_CONTACT,
    payload: { ...contact }
});