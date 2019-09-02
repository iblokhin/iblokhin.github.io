const mapPropsToValues = (
    props: any
) => {
    const {
        title = '',
        body = '',

    } = props.data || {};
    return {
        title,
        body,
    };
};

const validate = (values: any) => {
    let errors: any = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.body) {
        errors.body = 'Required';
    }

    return errors;
};

const handleSubmit = (values: any, formProps: any): any => {
    let newData = {};
    console.log('VALUES', values);
    console.log('props', formProps);
    if(!formProps.props.newPost) {
        newData = {
            ...formProps.props.data,
            ...values
        };
        formProps.props.updatePost({id: formProps.props.data.id, data: newData});
        formProps.props.setDisplayModal(false);
    } else {
        formProps.props.createPost(values);
        formProps.props.setDisplayModal(false);
        formProps.resetForm();
    }
};

export const formConfig: any = {
    mapPropsToValues,
    handleSubmit,
    validate
};
