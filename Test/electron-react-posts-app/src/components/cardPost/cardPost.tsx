import React from 'react';
import {Button, ButtonToolbar, Card} from 'react-bootstrap';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './styles.scss';

const CardPost = ({dataPost, setDisplayModal, deletePost, goToPost}: any) => {
    return (
        <Card className="card-post">
            <span onClick={() => deletePost(dataPost.id)}>
                <FontAwesomeIcon
                    className="card-post__icon-trash"
                    icon={faTrashAlt}
                />
            </span>
            <Card.Img className="card-post__image" variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title className="card-post__title">
                    {dataPost.title}
                </Card.Title>
                <Card.Text className="card-post__text">
                    {dataPost.body}
                </Card.Text>
                <ButtonToolbar className="card-post__buttons">
                    <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => goToPost(dataPost.id)}
                    >
                        View details
                    </Button>
                    <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => setDisplayModal(true)}
                    >
                        Edit Post
                    </Button>
                </ButtonToolbar>
            </Card.Body>
        </Card>
    )
};

export default CardPost;