import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';
import {InfoCircleTwoTone, LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';

import AuthBlock from '../../common/AuthBlock/AuthBlock';
import s from './SignUp.module.sass';
import validateField from '../../../utils/helpers/validateField';
import validationSchema from '../../../utils/validationSchema';
import openNotification from '../../../utils/helpers/openNotification';

let SignUpForm = ({onSubmit}) => {
    let [success, setSuccess] = useState(false);
    return (
        <div className={s.auth}>
            <AuthBlock>
                {success ? (
                    <div className={s.auth__successBlock}>
                        <InfoCircleTwoTone/>
                        <h3>Подтвердите свой аккаунт</h3>
                        <p>на вашу почту ПОКА ЕЩЕ НЕ отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                ) : (
                    <div>
                        <div className={s.auth__top}>
                            <h2>Регистрация</h2>
                        </div>
                        <Formik enableReinitialize={true}
                                initialValues={{
                                    username: '',
                                    password: '',
                                    passwordConfirmation: '',
                                    email: '',
                                    firstName: '',
                                    lastName: ''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={async (values, {setSubmitting}) => {
                                    await onSubmit(values.username, values.password, values.firstName, values.lastName).then(() => {
                                        openNotification({
                                            title: 'Авторизация успешна!',
                                            type: 'success'
                                        });
                                    });
                                    setSuccess(true);
                                    setSubmitting(false);
                                }}
                        >
                            {({
                                  values,
                                  touched,
                                  errors,
                                  handleChange,
                                  handleBlur,
                                  isValid,
                                  isSubmitting,
                                  onSubmit,
                                  handleSubmit
                              }) => (
                                <Form className="login-form" onSubmit={onSubmit}>
                                    <Form.Item validateStatus={validateField('email', touched, errors)}
                                               help={!touched.email ? null : errors.email}
                                               hasFeedback={true}
                                    >
                                        <Input id="email"
                                               prefix={<MailOutlined size='large' className="site-form-item-icon"/>}
                                               placeholder="Электронная почта"
                                               size='large'
                                               value={values.email}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               className={s.auth__input}/>
                                    </Form.Item>
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
                                    <Form.Item validateStatus={validateField('lastName', touched, errors)}
                                               help={!touched.lastName ? null : errors.lastName}
                                               hasFeedback={true}
                                    >
                                        <Input id="lastName"
                                               prefix={<UserOutlined size='large' className="site-form-item-icon"/>}
                                               placeholder="Фамилия"
                                               size='large'
                                               value={values.lastName}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               className={s.auth__input}/>
                                    </Form.Item>
                                    <Form.Item validateStatus={validateField('firstName', touched, errors)}
                                               help={!touched.firstName ? null : errors.firstName}
                                               hasFeedback={true}
                                    >
                                        <Input id="firstName"
                                               prefix={<UserOutlined size='large' className="site-form-item-icon"/>}
                                               placeholder="Имя"
                                               size='large'
                                               value={values.firstName}
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
                                    <Form.Item validateStatus={validateField('passwordConfirmation', touched, errors)}
                                               help={!touched.passwordConfirmation ? null : errors.passwordConfirmation}
                                               hasFeedback
                                    >
                                        <Input.Password
                                            id="passwordConfirmation"
                                            prefix={<LockOutlined size='large' className="site-form-item-icon"/>}
                                            placeholder="Повторите пароль"
                                            size='large'
                                            value={values.passwordConfirmation}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={s.auth__input}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                type='primary'
                                                size='large'
                                                className={s.auth__buttonColor}
                                        >
                                            Зарегистрироваться
                                        </Button>
                                    </Form.Item>
                                    <Link className={s.auth__Link} to="/login">
                                        Войти
                                    </Link>
                                </Form>
                            )}
                        </Formik>
                    </div>
                )}
            </AuthBlock>
        </div>
    );
};

export default SignUpForm;