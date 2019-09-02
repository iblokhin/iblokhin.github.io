import * as React from 'react';
import {Form} from 'formik';
import {
    Button,
    Form as FormBootstrap,
    Modal
} from 'react-bootstrap';
const {
    Header,
    Title,
    Body,
    Footer,
} = Modal;
const {
    Group,
    Label,
    Control
} = FormBootstrap;
const {Feedback} = Control;

const PostModalForm = (props: any) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        displayModal,
        setDisplayModal,
        titleForm,
        handleSubmit,
    } = props;

    return (
        <Modal show={displayModal} onHide={() => setDisplayModal(false)}>
            <Form>
                <Header closeButton>
                    <Title>{titleForm}</Title>
                </Header>
                <Body>
                    <Group controlId="formTitle">
                        <Label>
                            Title
                        </Label>
                        <Control
                            name="title"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            placeholder="Enter title"
                            isInvalid={!!errors.title && !!touched.title}
                        />
                        <Feedback type="invalid">
                            {errors.title}
                        </Feedback>
                    </Group>

                    <Group controlId="formBody">
                        <Label>
                            Description
                        </Label>
                        <Control
                            name="body"
                            as="textarea"
                            rows="3"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.body}
                            isInvalid={!!errors.body && !!touched.body}
                            placeholder="Enter description"
                        />
                        <Feedback type="invalid">
                            {errors.body}
                        </Feedback>
                    </Group>
                </Body>
                <Footer>
                    <Button variant="secondary" onClick={() => setDisplayModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Footer>
            </Form>
        </Modal>
    )
};

export default PostModalForm;