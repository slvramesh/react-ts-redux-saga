import { takeEvery, fork, put } from 'redux-saga/effects';

import { GET_CONTACT_LIST } from '../actions/actionTypes';

// create a generator function
function* fetchData() {
    try {
        yield put({ type: GET_CONTACT_LIST, data: {} })
    } catch (e) {
        console.log(e);
    }
}

const contactListSaga = [
    takeEvery(GET_CONTACT_LIST, fetchData)
];

export default contactListSaga;