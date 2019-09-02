import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {IHomeStoreEntity} from '../../core/interfaces/home';
import Posts from './posts';
import './styles.scss';

const PostsWrapper = (props: any) => {
    return (
        <Posts posts={props.posts} />
    )
};

const mapStateToProps = ({home}: {home: IHomeStoreEntity}) => ({
    posts: home.posts,
});

export default compose(
    connect(
        mapStateToProps,
        null
    )
)(PostsWrapper);