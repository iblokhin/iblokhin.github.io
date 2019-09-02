import apiService from '../';
import {environment} from '../../../../environments/environment';

export function getPosts() {
    return apiService.get({
        url: environment.api.posts.list
    });
}

export function getCommentsPost(id: number) {
    return apiService.get({
        url: `${environment.api.posts.comments}/${id}/comments`
    });
}

export function deletePost(id: number) {
    return apiService.delete({
        url: `${environment.api.posts.delete}/${id}`
    })
}

export function updatePost({id, data}: {id: number, data: any}) {
    return apiService.put({
        url: `${environment.api.posts.update}/${id}`,
        data
    })
}

export function createPost(data: any) {
    return apiService.post({
        url: environment.api.posts.create,
        data
    })
}