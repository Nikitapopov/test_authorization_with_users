import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { Provider, useSelector} from 'react-redux';
import store from './redux/redux';
import {getIsAuth} from './redux/selectors';
import Users from './components/Users/Users';
import Auth from './components/Auth/Auth';

function App() {
    const isAuth = useSelector(getIsAuth);
    return (
        <div className="wrapper">
            <Switch>
                <Route exact path={['/login', '/signup']} component={Auth}/>
                <Route exact path='/users' component={Users}/>
                {/*<Route exact path='/users' render={() => (isAuth ? <Users/> : <Redirect to='/login'/>)}/>*/}
                <Route path='/' render={() => (isAuth ? <Users/> : <Redirect to='/login'/>)}/>
            </Switch>
        </div>
    );
}

const AppContext = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>;
};

export default AppContext;
