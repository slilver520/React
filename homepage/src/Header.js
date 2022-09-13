// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
  
const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });


    return (
      <BrowserRouter>
      <header className={scrollPosition < 60 ? "org_header" : "chg_header"}>
        <div className="util">
          <div className="logo">
          <div className="wrapper">
            <div className="main-div">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          </div>
          <nav className="snb">
            <ul>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/vision">VISION</Link>
                </li>
                <li>
                  <Link to="/business">BUSINESS</Link>
                </li>
                <li>
                  <Link to="/contect">CONTECT</Link>
                </li>
            </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/about" /> 
        <Route path="/vision" /> 
        <Route path="/business" /> 
        <Route path="/contect" />
    </Routes>
  </header>
  </BrowserRouter>
    )
  }
export default Header;