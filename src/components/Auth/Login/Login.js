import React from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router';
import {withFormik} from 'formik';

import {login} from '../../../redux/auth_reducer';
import LoginForm from './LoginForm/LoginForm';
import validation from '../../../utils/validate';

const LoginWithFormik = withRouter(withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validate: values => {
        let errors = {};
        validation({isAuth: false, values, errors});
        return errors;
    },
    handleSubmit: async (values, {setSubmitting, props}) => {
        await props.onSubmit(values.username, values.password);
        setSubmitting(false);
        props.history.push('/users');
    },
    displayName: 'LoginForm',
})(LoginForm));

let Login = () => {
    const dispatch = useDispatch();
    const onSubmit = (username, password) =>
        dispatch(login(username, password));

    return <LoginWithFormik onSubmit={onSubmit}/>;
};

export default Login;