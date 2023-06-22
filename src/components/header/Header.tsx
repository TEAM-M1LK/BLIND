import React from "react";
import * as hs from "./style";
import Share from "assets/share.svg";
import Logo from "assets/logo.png";
import tabImg1 from "assets/tabimg.png";
import tabImg2 from "assets/tabimg2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <hs.headerservice>
        <hs.PopupLogoImage src={Share} />
        <b>Blind hub </b>
        <hs.headerText>기업 서비스 {">"}</hs.headerText>
      </hs.headerservice>
      <hs.header>
        <hs.container>
        <hs.LogoImg src={Logo} />
        <hs.tabList>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">기업 리뷰</Link>
            </li>
            <li>
              <Link to="/">채용공고</Link>
            </li>
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
        </hs.container>
      </hs.header>
    </div>
  );
};

export default Header;
