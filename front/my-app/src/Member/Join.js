import {useState} from "react";

function Join() {
    const [memberId, setMemberId] = useState("");

    return (
        <div style={{width:'400px', margin:'20px auto'}}>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-login" data-mdb-pill-init href="../Member/Login" role="tab"
                       aria-controls="pills-login" aria-selected="false">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-register" data-mdb-pill-init href="../Member/Join"
                       role="tab"
                       aria-controls="pills-register" aria-selected="true">Register</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel"
                     aria-labelledby="tab-login">
                    <form method="post" action="/member/join/new">
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" name="MEMBER_ID" id="MEMBER_ID" className="form-control"/>

                            <label className="form-label" htmlFor="MEMBER_ID">Email or username</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" name="MEMBER_PWD" id="MEMBER_PWD" className="form-control"/>
                            <label className="form-label" htmlFor="MEMBER_PWD">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck"
                                           checked/>
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                className="btn btn-primary btn-block mb-4">Register
                        </button>
                    </form>
                </div>
                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div className="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control"/>
                            <label className="form-label" htmlFor="registerName">Name</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control"/>
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control"/>
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control"/>
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control"/>
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                                   checked
                                   aria-describedby="registerCheckHelpText"/>
                            <label className="form-check-label" htmlFor="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>

                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                className="btn btn-primary btn-block mb-3" >Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Join;