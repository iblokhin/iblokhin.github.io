import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PostPage from './postPage';
import {
    fetchCommentsPost,
    fetchPosts,
} from '../../core/stores/home/actions';
import {IHomeStoreEntity} from '../../core/interfaces/home';
import './styles.scss';

const PostPageWrapper = ({data, history}: any) => {
    return (
        <PostPage data={data} goToBack={() => history.goBack()} />
    )
};

const mapStateToProps = ({home}: {home: IHomeStoreEntity}) => ({
    data: home.activePost,
});

const mapDispatchToProps = {
    fetchPosts,
    fetchCommentsPost,
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(withRouter(PostPageWrapper));