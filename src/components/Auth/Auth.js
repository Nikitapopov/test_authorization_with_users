import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Auth = () => {
    return (
        <div>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
        </div>
    );
};

export default Auth;