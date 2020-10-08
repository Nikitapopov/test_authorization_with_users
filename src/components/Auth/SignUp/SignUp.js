import React from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router';
import {withFormik} from 'formik';

import SignUpForm from './SignUpForm/SignUpForm';
import {signUp} from '../../../redux/auth_reducer';
import validationSchema from '../../../utils/validationSchema';

const SignUpWithFormik = withRouter(withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        username: '',
        email: '',
        password: '',
        lastName: '',
        firstName: '',
        passwordConfirmation: '',
    }),
    validateSchema: validationSchema,
    handleSubmit: async (values, {setSubmitting, props}) => {
        await props.onSubmit(values);
        setSubmitting(false);
        props.history.push('/users');
    },
    displayName: 'LoginForm',
})(SignUpForm));

let SignUp = () => {
    const dispatch = useDispatch();
    const onSubmit = (values) =>
        dispatch(signUp(values));

    return <SignUpWithFormik onSubmit={onSubmit}/>;
};

export default SignUp;