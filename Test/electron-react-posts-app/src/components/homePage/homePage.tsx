import React from 'react';
import Posts from '../posts';
import {Button} from 'react-bootstrap';
import PostModalForm from '../postModalForm';
import './styles.scss';

const HomePage = ({displayModal, setDisplayModal}: any) => {
    return (
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="main-title">Posts</h2>
                    </div>
                    <div className="col-md-3 text-right align-self-center">
                        <Button
                            variant="outline-secondary"
                            onClick={() => setDisplayModal(true)}
                        >
                            Create Post
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <Posts />
                </div>
            </div>

            <PostModalForm
                titleForm="Create post"
                newPost={true}
                displayModal={displayModal}
                setDisplayModal={setDisplayModal}
            />
        </div>
    )
}

export default HomePage;