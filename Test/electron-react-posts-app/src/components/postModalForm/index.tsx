import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import {formConfig} from './form-config';
import PostModalForm from './postModalForm';
import {
    createPost,
    updatePost
} from '../../core/stores/home/actions';

interface IPostModalWrapper {
    titleForm: string;
    data: any;
    newPost: boolean;
    displayModal: boolean;
    setDisplayModal: any;
    resetForm: any;
}

const PostModalWrapper = (props: IPostModalWrapper) => {

    const setDisplayModal = (displayModal: boolean) => {
        props.setDisplayModal(displayModal);
        props.resetForm();
    };

    return (
        <PostModalForm
            {...props}
            setDisplayModal={setDisplayModal}
        />
    )
};

const mapDispatchToProps = ({
    updatePost,
    createPost
});

export default compose(
    connect(
        null,
        mapDispatchToProps,
    ),
    withFormik(formConfig),
)(PostModalWrapper) as React.FC<any>;