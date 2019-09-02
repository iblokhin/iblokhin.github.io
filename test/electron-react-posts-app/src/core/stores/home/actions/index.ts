import {IActionCreator} from '../../../interfaces/common';
import {
    DELETE_POST,
    FETCH_COMMENTS_POST,
    FETCH_POSTS,
    FETCH_ONE_POST,
    SET_ACTIVE_POST_ID,
    UPDATE_POST,
    CREATE_POST
} from './home.action-types';

export const fetchPosts: IActionCreator<string> = payload => ({
    type: FETCH_POSTS,
    payload
});

export const fetchOnePost: IActionCreator<number> = payload => ({
    type: FETCH_ONE_POST,
    payload
});

export const fetchCommentsPost: IActionCreator<string> = payload => ({
    type: FETCH_COMMENTS_POST,
    payload
});

// TODO will be delete late
export const setActivePostId: IActionCreator<string> = payload => ({
    type: SET_ACTIVE_POST_ID,
    payload
});

export const deletePost: IActionCreator<number> = payload => ({
    type: DELETE_POST,
    payload
});

export const updatePost: IActionCreator<any> = payload => ({
   type: UPDATE_POST,
   payload
});

export const createPost: IActionCreator<any> = payload => ({
   type: CREATE_POST,
   payload
});