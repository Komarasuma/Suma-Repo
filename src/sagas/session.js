import { takeLatest, put, select } from "redux-saga/effects";
import { message } from 'antd';

import { setAction } from '../reducers/genericReducer'

export default function* watchCreateSession() {
    yield takeLatest("CREATE_SESSION", createSession)
}

function* createSession(action) {
    try {
        // yield put(setLoading(true))
        let loginDetails = action.payload;
        if (loginDetails.username === "admin" && loginDetails.password === "p@55word-dats-itms") {
            yield put(setAction("SESSION")({status: true, token: "", error: null}))
        } else {
            message.error('Invalid username/password');
            // yield put(setAction("SESSION")({status: false, token: "", error: "Invalid username/password"}))
        }
    } catch (e) {
        console.log(e);
    }
}