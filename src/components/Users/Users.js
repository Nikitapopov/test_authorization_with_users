import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getIsUsersDownloaded, getUsers} from '../../redux/selectors';
import {fetchUsers} from '../../redux/user_reducer';
import s from './Users.module.sass';
import {UserTable} from './UserTable';

let Users = () => {
    const isUsersDownloaded = useSelector(getIsUsersDownloaded);
    const users = useSelector(getUsers);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <section className={s.user}>
            <div className={s.user__container}>
                {isUsersDownloaded &&
                <UserTable users={users}/>
                }
            </div>
        </section>
    );
};

export default Users;