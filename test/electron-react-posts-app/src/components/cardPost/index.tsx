import React, {useState} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CardPost from './cardPost';
import {deletePost, fetchOnePost} from '../../core/stores/home/actions';
import PostModalForm from '../postModalForm';
import './styles.scss';

const CardPostWrapper = ({dataPost, history, deletePost, fetchOnePost}: any) => {
    const [displayModal, setDisplayModal] = useState(false);
    const fetchPost = (postId: number) => {
        fetchOnePost(postId)
        history.push('/post');
    };

    return (
        <>
            <CardPost
                goToPost={fetchPost}
                dataPost={dataPost}
                setDisplayModal={(displayModal: boolean) => setDisplayModal(displayModal)}
                deletePost={deletePost}
            />
            <PostModalForm
                titleForm="Edit post"
                data={dataPost}
                newPost={false}
                displayModal={displayModal}
                setDisplayModal={(displayModal: boolean) => setDisplayModal(displayModal)}
            />
        </>
    )
}

const mapDispatchToProps = {
    deletePost,
    fetchOnePost
};

export default compose(
    connect(
        null,
        mapDispatchToProps
    ),
)(withRouter(CardPostWrapper));