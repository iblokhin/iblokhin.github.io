export const HOST = `${
    document.location.protocol
}//jsonplaceholder.typicode.com`;

export const environment = {
    api: {
        posts: {
            list: `${HOST}/posts`,
            comments: `${HOST}/posts`,
            delete: `${HOST}/posts`,
            update: `${HOST}/posts`,
            create: `${HOST}/posts`,
        },
        comments: {
            list: `${HOST}/comments`
        },
    }
};
