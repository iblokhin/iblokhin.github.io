import React from 'react';
import CardPost from '../cardPost';
import './styles.scss';

const Posts = ({posts}: {posts: any}) => {
    return (
        <div className="posts">
            <div className="container">
                <div className="row">
                    {
                        posts && posts.length
                            ? posts.map((post: any) =>
                            <div
                                className="col-md-3"
                                key={`post-${post.id}`}>
                                <CardPost
                                    dataPost={post}
                                />
                            </div>)
                            : null
                    }
                </div>
            </div>
        </div>
    )
};

export default Posts;