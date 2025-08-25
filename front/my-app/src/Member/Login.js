import {useState} from "react";
import axios from "axios";
import {api} from "../api";
import {Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../Auth/Authenticator";

export default function Login() {
    const [MEMBER_ID, setMEMBER_ID] = useState("");
    const [MEMBER_PWD, setMEMBER_PWD] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    async function onSubmit(e){
        e.preventDefault();
        try{
            await login(MEMBER_ID, MEMBER_PWD);
            alert("로그인 성공");
            navigate("/");
        }catch(err){
            alert("로그인 실패");
            console.error(err?.response?.data || err.message);
        }
    }

    // const handleLogin = async(e) => {
    //     e.preventDefault();
    //     try{
    //         const res = await api.post("/login", {
    //             memberId: MEMBER_ID,
    //             memberPwd: MEMBER_PWD
    //         });
    //         if(res.data.status === "OK"){
    //             console.log("로그인 성공");
    //             Navigate("/Home");
    //         }
    //         else{
    //             alert("실패");
    //         }
    //     }catch(err){
    //         alert(err);
    //     }
        // try {
            // const res = await axios.post("/member/login/check", {
            //     memberId: MEMBER_ID,
            //     memberPwd: MEMBER_PWD
            // });
            // if(res.data.stats === "OK"){
            //     alert("회원가입 성공");
            //     navigate("/");
            // }
        // }catch(err){
        //     alert("회원가입 실패");
        // }
    // }
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
                    <form onSubmit={onSubmit}>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email"
                                   value={MEMBER_ID}
                                   onChange={(e) => setMEMBER_ID(e.target.value)}
                                   placeholder={"PWD"}
                                   id="MEMBER_ID" className="form-control"/>

                            <label className="form-label" htmlFor="MEMBER_ID">Email or username</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password"
                                   value={MEMBER_PWD}
                                   onChange={(e) => setMEMBER_PWD(e.target.value)}
                                   placeholder={"ID"}
                                   id="MEMBER_PWD" className="form-control"/>
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
            </div>
        </div>
    );
}