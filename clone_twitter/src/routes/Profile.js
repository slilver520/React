/* eslint-disable import/no-anonymous-default-export */
import { authService } from 'fbase';
import React from 'react';
import {Link} from 'react-router-dom'


export default () => {
    const onLogOutClick = () => authService.signOut();
    return (
        <>
            <button onClick={onLogOutClick}>
                Log Out
                <Link to='/'></Link>    
            </button>
        </>
    )
}
