import {AnyAction} from 'redux';
import {IHomeStoreEntity} from '../../../interfaces/home';
import {
    CREATE_POST,
    DELETE_POST,
    FETCH_COMMENTS_POST, FETCH_ONE_POST,
    FETCH_POSTS,
    // SET_ACTIVE_POST_ID,
    UPDATE_POST
} from '../actions/home.action-types';
import {FAILURE, PENDING, SUCCESS} from '../../common.action-types';
import {
    errorProcessing,
    startProcessing,
    successFetchingPosts,
    successFetchingCommentsPost,
    // successDeletePost,
    successDeletePostFake,
    // successUpdatePost
    successUpdatePostFake,
    // successCreatePost,
    successCreatePostFake,
    fetchOnePost,
} from './handlers';

const initialState: IHomeStoreEntity = {
    posts: [],
    activePost: {},
    activePostId: 0,

    pending: false,
    error: null,
};

const actionHandlers = {
    [FETCH_POSTS + PENDING]: startProcessing,
    [FETCH_POSTS + SUCCESS]: successFetchingPosts,
    [FETCH_POSTS + FAILURE]: errorProcessing,

    [FETCH_ONE_POST]: fetchOnePost,

    [FETCH_COMMENTS_POST + PENDING]: startProcessing,
    [FETCH_COMMENTS_POST + SUCCESS]: successFetchingCommentsPost,
    [FETCH_COMMENTS_POST + FAILURE]: errorProcessing,

    [DELETE_POST]: successDeletePostFake,
    // [DELETE_POST + PENDING]: startProcessing,
    // [DELETE_POST + SUCCESS]: successDeletePost,
    // [DELETE_POST + FAILURE]: errorProcessing,

    [UPDATE_POST]: successUpdatePostFake,
    // [UPDATE_POST + PENDING]: startProcessing,
    // [UPDATE_POST + SUCCESS]: successUpdatePost,
    // [UPDATE_POST + FAILURE]: errorProcessing,

    [CREATE_POST]: successCreatePostFake,
    // [CREATE_POST + PENDING]: startProcessing,
    // [CREATE_POST + SUCCESS]: successCreatePost,
    // [CREATE_POST + FAILURE]: errorProcessing,

    // TODO will be delete late
    // [SET_ACTIVE_POST_ID]: setActivePostId,
};

export default (state = initialState, action: AnyAction) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action.payload) : state;
};
