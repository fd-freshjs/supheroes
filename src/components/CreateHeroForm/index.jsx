import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const createHeroSchema = yup.object().shape({
    nickname: yup.string().required(),
});

function CreateHeroForm (props) {
    const initialValues = {
        nickname: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={createHeroSchema}
        >
            {() => (
                <Form>
                    <label>
                        <Field name='nickname' placeholder='Nickname' />
                        <ErrorMessage name='nickname' />
                    </label>
                    <button type='submit'>Create</button>
                </Form>
            )}
        </Formik>
    );
}

export default CreateHeroForm;
