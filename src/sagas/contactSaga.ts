import {
    takeLatest, call, put,
    //all 
} from 'redux-saga/effects';

import { getContactListApi } from '../api/contactApi';
import { iMsgType } from '../utils/enum';
import { messages } from '../utils/messages';

import {
    GET_CONTACT_LIST,
    GET_CONTACT_LIST_SUCCESS,
    GET_CONTACT_LIST_FAIL
} from '../actions/actionTypes';

function* getContactListAsync() {
    try {
        const payload = {};
        const data = yield call(getContactListApi, payload);
        console.log(" getContactListAsync data : ", data);
        yield put({ type: GET_CONTACT_LIST_SUCCESS, contactList: [...data] });
    } catch (err) {
        const notification = {
            msgType: iMsgType.ERROR,
            msgText: messages.serviceError
        }
        yield put({
            type: GET_CONTACT_LIST_FAIL, isError: true,
            notification
        });
    }
}

export default function* contactSaga() {
    yield takeLatest(GET_CONTACT_LIST, getContactListAsync);
}