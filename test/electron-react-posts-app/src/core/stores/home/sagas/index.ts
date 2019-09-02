import {all} from 'redux-saga/effects';
import {
    // deletePostWatcher,
    // updatePostWatcher,
    // createPostWatcher,
    fetchCommentsPostWatcher,
    fetchPostsWatcher
} from './watchers';

export default function* () {
    yield all([
        fetchPostsWatcher(),
        fetchCommentsPostWatcher(),
        // deletePostWatcher(),
        // updatePostWatcher()
        // createPostWatcher()
    ]);
}
