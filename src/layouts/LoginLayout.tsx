import * as s from "./LoginLayout.style";
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import blind from "../assets/blind.svg";
import logo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = React.useState({
    id: "",
    password: "",
  });
  const navigate = useNavigate();

  const onLoginUser = () => {
    const { id, password } = user;
    if (
      id === localStorage.getItem("id") &&
      password === localStorage.getItem("password")
    ) {
      alert("로그인에 성공했습니다!");
      return navigate("/");
    }
    alert("아이디나 비밀번호가 일치하지 않습니다.");
  };

  return (
    <div>
      <Header />
      <s.LoginLayout>
        <s.logo>
          <Link to="/">
            <s.BlindIcon src={blind} />
            <s.LogoIcon src={logo} />
          </Link>
        </s.logo>
        <s.login>
          <span>id</span>
          <s.Input>
            <input
              onChange={(e) => setUser({ ...user, id: e.target.value })}
              value={user.id}
              type="text"
              placeholder="아아디를 입력하세요"
            />
          </s.Input>
          <span>password</span>
          <s.Input>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </s.Input>
          <s.LoginBtn onClick={onLoginUser}>
            <span>로그인</span>
          </s.LoginBtn>
          <span onClick={() => navigate("/signup")}>회원가입하기</span>
        </s.login>
      </s.LoginLayout>

      <Footer />
    </div>
  );
};

export default Login;
