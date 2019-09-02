import {IActionHandler, IServerError} from '../../../interfaces/common';
import {IHomeStoreEntity} from '../../../interfaces/home';

export const startProcessing: IActionHandler<IHomeStoreEntity> = state => ({
    ...state,
    pending: true,
    error: null
});

export const errorProcessing: IActionHandler<IHomeStoreEntity, IServerError> = (
    state,
    payload
) => ({
    ...state,
    pending: false,
    error: payload
});

export const fetchOnePost: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    activePost: state.posts.find(({id}: {id: number}) => id === payload),
    error: null
});

export const successFetchingPosts: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: payload,
    error: null
});

export const successFetchingCommentsPost: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: (() => {
        const comments = payload.filter(({postId}: {postId: number}) => postId === state.activePostId);
        return state.posts.map((item: any) => {
            if (item.id === state.activePostId) {
                return {
                    ...item,
                    comments
                }
            }
            return item
        })
    })(),
    error: null
});

export const successDeletePost: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: (() => {
        return state.posts.filter((id: number) => id !== payload)
    })(),
    error: null
});

export const successDeletePostFake: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: state.posts.filter(({id}: {id: number}) => id !== payload),
    error: null
});

export const successUpdatePost: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: payload,
    error: null
});

export const successUpdatePostFake: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: (() => {
        return state.posts.map((item: any) => {
            if(item.id === payload.id) {
                return {
                    ...item,
                    ...payload.data
                }
            }

            return item;
        })
    })(),
    error: null
});

export const successCreatePost: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: payload,
    error: null
});

export const successCreatePostFake: IActionHandler<
    IHomeStoreEntity,
    any
    > = (state, payload) => ({
    ...state,
    pending: false,
    posts: (() => {
        const uniqueId = new Date().getUTCMilliseconds(); // test data
        const userId = 1; // test data
        const newPost = {
            ...payload,
            userId: userId,
            id: uniqueId
        };

        return state.posts.length ? [newPost, ...state.posts] : [newPost];
    })(),
    error: null
});
