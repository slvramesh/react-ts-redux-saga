import { iContact } from '../interface/contactInterface';

import {
    GET_CONTACT_LIST,
    ADD_CONTACT
} from '../actions/actionTypes';

export const getContactListAction = () => ({
    type: GET_CONTACT_LIST,
});

export const addContactAction = (contact: iContact) => ({
    type: ADD_CONTACT,
    payload: { contact }
});