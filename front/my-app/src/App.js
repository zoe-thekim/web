import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Auth/Authenticator";
import Home from "./Components/Home";
import Login from "./Member/Login";
import Join from "./Member/Join";
import Success from "./Member/Success";

class App extends Component {
    render() {
        return (
            <Router>
                <AuthProvider>
                    <Fragment>
                        <Header />
                        <div className={"container-fluid"}>
                            <Routes>
                                {/* 홈 */}
                                <Route path="/" element={<Home />} />

                                {/* ✅ 소문자 기준 라우트 */}
                                <Route path="/member/login" element={<Login />} />
                                <Route path="/member/join" element={<Join />} />

                                {/* 호환용(대문자로 접근해도 소문자로 리다이렉트) */}
                                <Route path="/Member/Login" element={<Navigate to="/member/login" replace />} />
                                <Route path="/Member/Join" element={<Navigate to="/member/join" replace />} />
                            </Routes>
                        </div>
                        <Footer />
                    </Fragment>
                </AuthProvider>
            </Router>
        );
    }
}

export default App;
