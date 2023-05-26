import React from 'react'
import * as hs from './style'
import Share from 'assets/share.svg'
import Logo from 'assets/logo.png'
import tabImg1 from 'assets/tabimg.png'
import tabImg2 from 'assets/tabimg2.png'


const Header = () => {
    return (
        <div>
            <hs.headerservice>
                <hs.PopupLogoImage src={Share} />
                <b>Blind hub </b>
                <hs.headerText>기업 서비스 {'>'}</hs.headerText>
            </hs.headerservice>
            <hs.header>
            <hs.container>
                <hs.LogoImg src={Logo} />
                <hs.tabList>
                    <ul>
                        <li><a href="">홈</a></li>
                        <li><a href="">기업 리뷰</a></li>
                        <li><a href="">채용공고</a></li>
                    </ul>
                    <hs.tabTxt>
                        <a href="">
                            <hs.tabImg src={tabImg1}></hs.tabImg>
                            <p><strong>팀 블라인드 채용</strong></p>
                            <hs.tabImg src={tabImg2}></hs.tabImg>
                        </a>
                        <button className="write"><strong>글쓰기</strong></button>
                        <button className="login"><strong>로그인</strong></button>
                    </hs.tabTxt>
                </hs.tabList>
            </hs.container>
            </hs.header>


        </div >
    )
}

export default Header;