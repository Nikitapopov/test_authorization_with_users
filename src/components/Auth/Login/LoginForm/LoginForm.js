// import React from 'react';
// import {Form, Input, Button} from 'antd';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import {Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import {Formik} from 'formik';
//
// import s from './LoginForm.module.sass';
// import AuthBlock from '../../common/AuthBlock/AuthBlock';
// import validateField from '../../../utils/helpers/validateField';
// import validation from '../../../utils/validate';
// import openNotification from '../../../utils/helpers/openNotification';
//
// let LoginForm = (props) => {
//     debugger
//     const validate = values => {
//         let errors = {};
//
//         validation({isLogin: true, values, errors});
//
//         return errors;
//     };
//     return (
//         <div className={s.auth}>
//             <AuthBlock>
//                 <div className={s.auth__top}>
//                     <h2>Войти в аккаунт</h2>
//                     <p>Пожалуйста, войдите в свой аккаунт</p>
//                 </div>
//                 <Formik enableReinitialize={true}
//                         initialValues={{username: '', password: ''}}
//                         validate={validate}
//                         onSubmit={async (values, {setSubmitting}, history) => {
//                             debugger
//                             await props.onSubmit(values.username, values.password)
//                             openNotification({
//                                 title: 'Авторизация успешна!',
//                                 type: 'success'
//                             });
//
//                             setSubmitting(false);
//                         }}
//                 >
//                     {({
//                           values,
//                           touched,
//                           errors,
//                           handleChange,
//                           handleBlur,
//                           isSubmitting,
//                           onSubmit,
//                           handleSubmit
//                       }) => (
//                         <Form className="login-form" onSubmit={onSubmit}>
//                             <Form.Item validateStatus={validateField('username', touched, errors)}
//                                        help={!touched.username ? null : errors.username}
//                                        hasFeedback={true}
//                             >
//                                 <Input id="username"
//                                        prefix={<UserOutlined size='large' className="site-form-item-icon"/>}
//                                        placeholder="Имя пользователя"
//                                        size='large'
//                                        value={values.username}
//                                        onChange={handleChange}
//                                        onBlur={handleBlur}
//                                        className={s.auth__input}/>
//                             </Form.Item>
//                             <Form.Item validateStatus={validateField('password', touched, errors)}
//                                        help={!touched.password ? null : errors.password}
//                                        hasFeedback
//                             >
//                                 <Input id="password"
//                                        prefix={<LockOutlined size='large' className="site-form-item-icon"/>}
//                                        placeholder="Пароль"
//                                        size='large'
//                                        value={values.password}
//                                        onChange={handleChange}
//                                        onBlur={handleBlur}
//                                        className={s.auth__input}/>
//                             </Form.Item>
//                             <Form.Item>
//                                 <Button
//                                     onClick={handleSubmit}
//                                     disabled={isSubmitting}
//                                     type='primary'
//                                     size='large'
//                                     className={s.auth__buttonColor}
//                                 >
//                                     Войти
//                                 </Button>
//                             </Form.Item>
//                             <Link className={s.auth__link} to="/signup">
//                                 Зарегистрироваться
//                             </Link>
//                         </Form>
//                     )}
//                 </Formik>
//             </AuthBlock>
//         </div>
//     );
// };
//
// const LoginFormWithRouter = withRouter(LoginForm)
//
// export default LoginFormWithRouter;

import React from 'react';
import {Button, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';

import s from './LoginForm.module.sass';
import validateField from '../../../utils/helpers/validateField';
import AuthBlock from '../../common/AuthBlock/AuthBlock';
import openNotification from '../../../utils/helpers/openNotification';

let LoginForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <div className={s.auth}>
            <AuthBlock>
                <div className={s.auth__top}>
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Form name="normal_login"
                      className="login-form"
                      onSubmit={handleSubmit}>
                    <Form.Item validateStatus={validateField('username', touched, errors)}
                               help={!touched.username ? null : errors.username}
                               hasFeedback={true}
                    >
                        <Input id="username"
                               prefix={<UserOutlined size='large' className="site-form-item-icon"/>}
                               placeholder="Имя пользователя"
                               size='large'
                               value={values.username}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className={s.auth__input}/>
                    </Form.Item>
                    <Form.Item validateStatus={validateField('password', touched, errors)}
                               help={!touched.password ? null : errors.password}
                               hasFeedback
                    >
                        <Input.Password
                            id="password"
                            prefix={<LockOutlined size='large' className="site-form-item-icon"/>}
                            placeholder="Пароль"
                            size='large'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={s.auth__input}/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            type='primary'
                            size='large'
                            className={s.auth__buttonColor}
                        >
                            Войти
                        </Button>
                    </Form.Item>
                    <Link className={s.auth__link} to="/signup">
                        Зарегистрироваться
                    </Link>
                </Form>
            </AuthBlock>
        </div>
    );
};

export default LoginForm;