import React from "react";
import * as s from "./SignupLayout.style";
import Header from "components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import blind from "assets/blind.svg";
import logo from "assets/logo2.png";
import Footer from "components/footer/Footer";

const SignupLayout = () => {
  const [user, setUser] = React.useState({
    id: "",
    password: "",
    name: "",
    company: "",
  });
  const navigate = useNavigate();

  const onSignupUser = () => {
    const { id, password, name, company } = user;
    localStorage.setItem("id", id);
    localStorage.setItem("password", password);
    localStorage.setItem("name", name);
    localStorage.setItem("company", company);

    alert("회원가입이 완료되었습니다!");
    return navigate("/");
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
          <span>name</span>
          <s.Input>
            <input
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              type="text"
              placeholder="이름을 입력하세요"
            />
          </s.Input>
          <span>company</span>
          <s.Input>
            <input
              onChange={(e) => setUser({ ...user, company: e.target.value })}
              value={user.company}
              type="text"
              placeholder="회사를 입력하세요"
            />
          </s.Input>
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
          <s.LoginBtn onClick={onSignupUser}>
            <span>회원가입</span>
          </s.LoginBtn>
        </s.login>
      </s.LoginLayout>
      <Footer />
    </div>
  );
};

export default SignupLayout;
