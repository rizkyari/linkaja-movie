import {takeLatest, put, call, all} from "redux-saga/effects";
import {getDataSuccess,getDataFailed} from "../actions/action";
import request from "../../helpers/request/request";

export function* getData(){
    const url = `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`;
    const config = {
        method: "get",
        headers: {
            "Accept": "application/json",
        },
    };
    try{
        const result = yield call(request, url, config);
        yield put(getDataSuccess(result));
    } catch(error){
        put(getDataFailed(error));
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest("GET_DATA", getData),
    ]);
}