import React, {useState} from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
//Switch -> Routes

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                        <>
                            <Route 
                                path={"/"} 
                                element={ < Home />}
                            >
                            </Route>
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
