import * as s from "./Login.styled";
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import blind from "../assets/blind.svg";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            {/* <Header /> */}
            <s.LoginLayout>
                <s.logo><Link to="/">
                    <s.BlindIcon src={blind} />
                    <s.LogoIcon src={logo} />
                </Link></s.logo>
                <s.login>
                    <span>name</span>
                    <s.Input>
                        <input type='text' placeholder="이름을 입력하세요" />
                    </s.Input>
                    <span>coperation</span>
                    <s.Input>
                        <input type='text' placeholder="회사를 입력하세요" />
                    </s.Input>
                    <span>id</span>
                    <s.Input>
                        <input type='text' placeholder="아아디를 입력하세요" />
                    </s.Input>
                    <span>password</span>
                    <s.Input>
                        <input type='password' placeholder="비밀번호를 입력하세요" />
                    </s.Input>
                    <s.LoginBtn><span>로그인</span></s.LoginBtn>
                </s.login>
            </s.LoginLayout>

            <Footer />
        </div>
    )
}

export default Login;