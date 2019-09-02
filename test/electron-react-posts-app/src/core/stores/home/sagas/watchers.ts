import {takeLatest} from 'redux-saga/effects';
import makeSagaRequest from '../../../../utils/make-saga-request';
import {
    DELETE_POST,
    FETCH_COMMENTS_POST,
    FETCH_POSTS,
    UPDATE_POST,
    CREATE_POST
} from '../actions/home.action-types';
import {
    getCommentsPost,
    getPosts,
    deletePost,
    updatePost,
    createPost
} from '../../../services/api/home';

export function* fetchPostsWatcher() {
    yield takeLatest(
        [FETCH_POSTS],
        makeSagaRequest({
            apiRequest: getPosts
        })
    );
}

export function* fetchCommentsPostWatcher() {
    yield takeLatest(
        [FETCH_COMMENTS_POST],
        makeSagaRequest({
            apiRequest: getCommentsPost
        })
    );
}

export function* deletePostWatcher() {
    yield takeLatest(
        [DELETE_POST],
        makeSagaRequest({
            apiRequest: deletePost
        })
    );
}

export function* updatePostWatcher() {
    yield takeLatest(
        [UPDATE_POST],
        makeSagaRequest({
            apiRequest: updatePost
        })
    )
}

export function* createPostWatcher() {
    yield takeLatest(
        [CREATE_POST],
        makeSagaRequest({
            apiRequest: createPost
        })
    )
}