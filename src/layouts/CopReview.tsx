import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import * as S from "./CopReview.style";
import React from "react";
import searchbar from "../assets/searchbar.png"
import background from "../assets/bg-company-main.png";
import coperation from "../data/coperation";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";


const CopReview = () => {
    return (
        <div>
            <Header />
            <S.topContainer>
                <S.title>진짜 현직자들의 회사 리뷰</S.title>
                <S.content>실제 직원들이 평가하는 연봉과 복지는 어떤지 확인 해보세요.</S.content>
                <S.searchbar>
                    <S.searchimg src={searchbar}></S.searchimg>
                    <input type="text" placeholder="회사 이름으로 검색하세요"></input>
                </S.searchbar>
                <S.application>찾으시는 회사가 없나요?<button>궁금한 회사를 직접 신청해주세요!</button></S.application>
            </S.topContainer>
            <S.Review>
                <S.reContent>
                    <h3>내 회사 리뷰하기</h3>
                    <p>회원님의 리뷰는 구직자들이 회사를<br/>검토하는데 도움이 됩니다.</p>
                    <a>리뷰 쓰기</a>
                    <S.reImg src={background}></S.reImg>
                </S.reContent>
            </S.Review>
            <S.popular>
                <S.popularbox>
                    <h3>인기 회사</h3>
                    <S.coperation>
                        {coperation.map(({ name, src, score }) => (
                        <S.popularCoperation key={name}>
                            <S.coperationImg src={src} />
                            <S.copReview>
                                <S.coperationName>{name}</S.coperationName>
                                <S.coperationScore>
                                    {coperationScore(Math.ceil(parseFloat(score)))}
                                    <p>{score}</p>
                                </S.coperationScore>
                                <ul>
                                    <li>리뷰</li>
                                    <li>게시물</li>
                                    <li>연봉</li>
                                    <li>채용</li>
                                </ul>
                                
                            </S.copReview>
                        </S.popularCoperation>
                        ))}
                    </S.coperation>
                </S.popularbox>
            </S.popular>

            <Footer />
        </div>
    )
}

function coperationScore(score:number) {
        const star = [];
        for(let i = 0; i < score; i ++) {
            star.push(<S.scoreStar key={score} src={star1}/>);
        }
        for(let i = score-1; i<4; i++) {
            star.push(<S.scoreStar key={score} src={star2}/>);
        }
        return star;
}

export default CopReview;