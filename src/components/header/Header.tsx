import React from "react";
import * as hs from "./style";
import Share from "assets/share.svg";
import Logo from "assets/logo.png";
import tabImg1 from "assets/tabimg.png";
import tabImg2 from "assets/tabimg2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSelect, setIsSelect] = React.useState("홈");

  return (
    <div>
      <hs.headerservice className="service">
        <hs.PopupLogoImage src={Share} />
        <b>Blind hub </b>
        <hs.headerText>기업 서비스 {">"}</hs.headerText>
      </hs.headerservice>
      <hs.header>
        <hs.headerContainer>
          <hs.LogoImg src={Logo} />
          <hs.tabList>
            <ul>
              <hs.LI select={isSelect === "홈" ? 1 : 0}>
                <Link onClick={() => setIsSelect("홈")} to="/">
                  홈
                </Link>
              </hs.LI>
              <hs.LI select={isSelect === "기업 리뷰" ? 1 : 0}>
                <Link onClick={() => setIsSelect("기업 리뷰")} to="/review">
                  기업 리뷰
                </Link>
              </hs.LI>
              <hs.LI select={isSelect === "채용 공고" ? 1 : 0}>
                <Link onClick={() => setIsSelect("채용 공고")} to="/recruit">
                  채용 공고
                </Link>
              </hs.LI>
            </ul>
            <hs.tabTxt>
              <hs.Buttons>
                <a href="">
                  <hs.tabImg src={tabImg1}></hs.tabImg>
                  <p>팀 블라인드 채용</p>
                  <hs.tabImg src={tabImg2}></hs.tabImg>
                </a>
                <button className="write">글쓰기</button>
                <button className="login">로그인</button>
              </hs.Buttons>
            </hs.tabTxt>
          </hs.tabList>
        </hs.headerContainer>
      </hs.header>
    </div>
  );
};

export default Header;
