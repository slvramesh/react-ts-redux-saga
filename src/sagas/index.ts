import { all } from 'redux-saga/effects';

import contactListSaga from './contactListSaga';

export default function* rootSaga() {
    yield all([
        contactListSaga
    ])
}