import {AnyAction} from 'redux';
import {put, call} from 'redux-saga/effects';
import {ISagaRequestArgs} from '../core/interfaces/common';
import {
    startProcessActionCreator,
    successProcessActionCreator,
    failureProcessActionCreator
} from '../core/stores/common.action-creators';

export default function makeSagaRequest({apiRequest, successCallback, failureCallback}: ISagaRequestArgs) {
    return function* ({type, payload}: AnyAction) {
        yield put(startProcessActionCreator(type));

        try {
            const response = yield call(apiRequest, payload);
            yield put(successProcessActionCreator(type, response));
            if (successCallback) {
                yield successCallback(response);
            }
        } catch (error) {
            yield put(failureProcessActionCreator(type, error));
            if (failureCallback) {
                yield failureCallback(error);
            }
        }
    };
}
