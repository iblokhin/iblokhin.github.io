import {all} from 'redux-saga/effects';

// sagas
import homeSagas from './home/sagas';

export default function* rootSaga() {
    yield all([
        homeSagas(),
    ]);
}
