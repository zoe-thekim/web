import React, {Component, Fragment, useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Member/Login";
import Join from "./Member/Join";


class App extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Router>
                <Fragment>
                    <Header />
                    <div className={"container-fluid"}>
                        <Routes>
                            <Route path={"/"} element={<Home/>}/>
                            <Route path={"/Member/Login"} element={<Login/>}/>
                            <Route path={"/Member/Join"} element={<Join/>}/>
                        </Routes>
                    </div>
                    <Footer />
                </Fragment>
            </Router>
        )
    }
}

export default App;