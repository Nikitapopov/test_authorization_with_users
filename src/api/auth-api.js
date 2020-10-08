import {instance} from './api';

export const authAPI = {
    signUp({username, password, passwordConfirmation, firstName, lastName, email}) {
        return Promise.resolve({username, password,
            passwordConfirmation, firstName, lastName, email});
    },
    login(username, password) {
        // username='test_super'
        // password='Nf<U4f<rDbtDxAPn'
        // return instance.post('api-token-auth/', {
        //     username,
        //     password
        // }).then(res => res.data);
        return Promise.resolve({username: username, password: password});
    },
};