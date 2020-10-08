import {instance} from './api';

export const authAPI = {
    login(username, password) {
        // username='test_super'
        // password='Nf<U4f<rDbtDxAPn'
        // return instance.post('api-token-auth/', {
        //     username,
        //     password
        // }).then(res => res.data);
        return Promise.resolve({username: username, password: password});
    },
    signUp(username, password) {
        return Promise.resolve({username: username, password: password});
    },
    getUsers() {
        return Promise.resolve([
            {id: 1, username: 'Alesha', first_name: 'Aleksei', last_name: 'LastName', password: "Password", is_active: false, last_login: 'Sun Oct 04 2020 22:13:05 GMT+0300', is_superuser: false},
            {id: 2, username: 'Username1', first_name: 'Firstname', last_name: 'LastName1', password: "Password1", is_active: true, last_login: 'Sun Oct 03 2020 22:13:05 GMT+0300', is_superuser: true},
            {id: 10, username: 'Username2', first_name: 'Firstname1', last_name: 'LastName2', password: "Password2", is_active: false, last_login: 'Sun Oct 04 2019 22:13:05 GMT+0300', is_superuser: false},
            {id: 9, username: 'Username3', first_name: 'Firstname2', last_name: 'LastName3', password: "Password3", is_active: true, last_login: 'Sun Oct 14 2018 22:13:05 GMT+0300', is_superuser: false},
        ]);
        // return instance.get('api/v1/users/').then(res => res.data);
    }
};