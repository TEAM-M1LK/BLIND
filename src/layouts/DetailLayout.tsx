import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import * as S from "./DetailLayout.style";
import arrow from "../assets/tabimg2.png";
import time from "../assets/time.png";
import view from "../assets/view.png";
import comments from "../assets/comments.png";
import bookmark from "../assets/bookmark.png";
import more from "../assets/more.png";
import good from "../assets/good.png";
import comments2 from "../assets/comments_black.png";
import kakao from "../assets/kakao.png";
import face from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import url from "../assets/url.png";
import photo from "../assets/photo.png";
import good2 from "../assets/good2.png";
import recommend from "../data/recommend"
;
const DetailLayout = () => {
    return (
        <div>
            <Header />
            <S.container>
                <S.post>
                    <S.titleContainer>
                        <span>토픽</span><S.asrrowImg src={arrow}/><span>지름·쇼핑</span>
                        <S.title>제목</S.title>
                        <S.user><span>회사이름</span><span> · i*****</span></S.user>
                        <S.postinfo>
                            <S.postIcon src={time}/><span>1시간</span>
                            <S.postIcon src={view}/><span>10</span>
                            <S.postIcon src={comments}/><span>1</span>
                            <S.Icon>
                                <S.IconImg src={bookmark}/>
                                <S.IconImg src={more}/>
                            </S.Icon>
                        </S.postinfo>
                    </S.titleContainer>
                    <S.content>
                        <p>내용</p>
                    </S.content>
                    <S.bottomInfo>
                        <S.bottomInfoIcon src={good} /><span>1</span><S.bottomInfoIcon src={comments2}/><span>1</span>
                        <S.bottomIcon>
                           <S.bottomIconImg src={kakao} /><S.bottomIconImg src={face} /><S.bottomIconImg src={twitter} /><S.bottomIconImg src={url} />
                        </S.bottomIcon>
                    </S.bottomInfo>
                    <S.commentContainer>
                        <h3>댓글 <span>11</span></h3>
                        <S.commentBox>
                            <S.photo src={photo}/><input type="text" placeholder="댓글을 남겨주세요" />
                        </S.commentBox>
                        <S.comment>
                            <S.commentUser><span>회사이름</span><span> · i*****</span></S.commentUser>
                            <S.commentContent><p>내용</p></S.commentContent>
                            <S.commentInfo>
                                <S.commentInfoIcon src={time}/><span>1시간</span>
                                <S.commentInfoIcon src={good2}/><span>1</span>
                                <S.commentInfoIcon src={comments}/><span>1</span>
                                <S.commentMore src={more}/>
                            </S.commentInfo>
                        </S.comment>
                        <S.Recomment>
                            <S.commentUser><span>회사이름</span><span> · i*****</span></S.commentUser>
                            <S.commentContent><p>내용</p></S.commentContent>
                            <S.commentInfo>
                                <S.commentInfoIcon src={time}/><span>1시간</span>
                                <S.commentInfoIcon src={good2}/><span>1</span>
                                <S.commentInfoIcon src={comments}/><span>1</span>
                                <S.commentMore src={more}/>
                            </S.commentInfo>
                        </S.Recomment>
                    </S.commentContainer>
                </S.post>
                <S.side>
                    <S.recommendPost>
                        <h1>스포츠 추천 글</h1>
                        {recommend.map(({title}) => (
                            <S.postTitle key={title}><S.postTitleDot/>{title}</S.postTitle>
                        ))}
                    </S.recommendPost>
                    <S.Banner src="images/banner2.png" />
                </S.side>
            </S.container>
            <Footer />
        </div>
    )
}

export default DetailLayout;