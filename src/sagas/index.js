import { all } from 'redux-saga/effects';
import handleError from './handleError';
import logActionsSaga from './logActions';
import session from './session';

/**
 * Root Saga
 */
const allSagas = [
    handleError(),
    logActionsSaga(),
    session(),
];

export default function* rootSaga() {
    yield all(allSagas);
}