import React, {useEffect} from 'react';
import {Redirect, Route} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {PAGE_ROUTES} from '../../constants/pages-routes';
import Header from '../header';
import HomePage from '../homePage';
import PostPage from '../postPage';
import {fetchPosts} from '../../core/stores/home/actions';
import './styles.scss';

const MainPage = (props: any) => {

    useEffect(() => {
        props.fetchPosts();
    });

    return (
        <div className="main-layout">
            <Header />
            <div>
                <Route
                    exact
                    path={PAGE_ROUTES.HOME}
                    name="Home Page"
                    component={HomePage}
                />
                <Route
                    exact
                    path={PAGE_ROUTES.POST}
                    name="Home Page"
                    component={PostPage}
                />
                <Redirect to={PAGE_ROUTES.HOME} />
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    fetchPosts,
};

export default compose(
    connect(
        null,
        mapDispatchToProps
    )
)(MainPage);