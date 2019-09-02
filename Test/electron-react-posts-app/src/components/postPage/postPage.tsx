import React from 'react';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Image} from 'react-bootstrap';
import './styles.scss';

const PostPage = ({goToBack, data}: any) => {
    return (
        <div className="post-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="main-title">
                            <span className="go-back" onClick={goToBack}>
                                <FontAwesomeIcon className="back-icon" icon={faArrowLeft}/>
                                go back
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Image className="post-page__img" src="https://via.placeholder.com/720" fluid />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{data.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{data.body}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Comments</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage;