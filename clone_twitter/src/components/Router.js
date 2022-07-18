import React, {useState} from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import {Navigate} from "react-router-dom";
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile'
import Navigation from 'components/Navigation'
//Switch -> Routes

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                        <>
                            <Route 
                                path={"/"} 
                                element={ < Home userObj={userObj} />}
                            >
                            </Route>
                            <Route 
                                path={"/profile"} 
                                element={ < Profile />}
                            >
                            </Route>
                            <Route path="/" element={<Navigate replace to="/" />} />
                        </> 
                ) : (
                    <Route 
                        path={"/"} 
                        element={ < Auth />}
                    >
                    </Route>
                )}
            </Routes>
        </Router>
    )
}
//로그인 (인증) 여부에 따라 달라지게함

export default AppRouter;
