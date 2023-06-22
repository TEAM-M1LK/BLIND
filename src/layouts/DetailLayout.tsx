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
import recommend from "../data/recommend";
import {
  getDatabase,
  ref,
  onValue,
  push,
  child,
  update,
} from "firebase/database";
import { useParams } from "react-router-dom";
import { Post } from "./HomeLayout";

const DetailLayout = () => {
  const db = getDatabase();
  const [post, setPost] = React.useState<Post>();
  const [views] = React.useState(Math.floor(Math.random() * 1000));
  const [commentContent, setCommentContent] = React.useState("");
  const { id } = useParams();

  React.useLayoutEffect(() => {
    onValue(ref(db, `article/${id}`), (res) => {
      setPost({
        ...res.val(),
        comments: res.val().comments && Object.values(res.val()?.comments),
      });
    });
  }, []);

  const onCreateComment = () => {
    const newPostKey = push(child(ref(db), "article")).key;
    const updates: { [key: string]: any } = {};
    updates[`/article/${id}/comments/${newPostKey}`] = {
      key: newPostKey,
      company: "부산소마고",
      author: "i********",
      contents: commentContent,
      recomments: [],
    };

    return update(ref(db), updates);
  };

  const onCountLike = () => {
    const updates: { [key: string]: any } = {};
    updates[`/article/${id}/like`] = (post?.like || 0) + 1;

    return update(ref(db), updates);
  };

  return (
    <div>
      <Header />
      <S.container>
        <S.post>
          <S.titleContainer>
            <span>토픽</span>
            <span>
              <S.asrrowImg src={arrow} />
            </span>
            <span>{post?.category}</span>
            <S.title>{post?.title}</S.title>
            <S.user>
              <span>{post?.company}</span>
              <span> · {post?.author}</span>
            </S.user>
            <S.postinfo>
              <S.postIcon src={time} />
              <span>{JSON.stringify(post?.date)}</span>
              <S.postIcon src={view} />
              <span>{views}</span>
              <S.postIcon src={comments} />
              <span>{post?.comments?.length || 0}</span>
              <S.Icon>
                <S.IconImg src={bookmark} />
                <S.IconImg src={more} />
              </S.Icon>
            </S.postinfo>
          </S.titleContainer>
          <S.content>
            <p>{post?.contents}</p>
          </S.content>
          <S.bottomInfo>
            <S.bottomInfoIcon src={good} onClick={onCountLike} />
            <span>{post?.like}</span>
            <S.bottomInfoIcon src={comments2} />
            <span>{post?.comments?.length || 0}</span>
            <S.bottomIcon>
              <S.bottomIconImg src={kakao} />
              <S.bottomIconImg src={face} />
              <S.bottomIconImg src={twitter} />
              <S.bottomIconImg src={url} />
            </S.bottomIcon>
          </S.bottomInfo>
          <S.commentContainer>
            <h3>
              댓글 <span>{post?.comments?.length || 0}</span>
            </h3>
            <S.commentBox>
              <S.photo src={photo} />
              <input
                type="text"
                placeholder="댓글을 남겨주세요"
                onChange={(e) => setCommentContent(e.target.value)}
                value={commentContent}
              />
              <button onClick={onCreateComment}>작성</button>
            </S.commentBox>
            {post?.comments?.map((item) => (
              <S.comment key={item.key}>
                <S.commentUser>
                  <span>{item.company}</span>
                  <span> · {item.author}</span>
                </S.commentUser>
                <S.commentContent>
                  <p>{item.contents}</p>
                </S.commentContent>
                <S.commentInfo>
                  <S.commentInfoIcon src={time} />
                  <span>1시간</span>
                  <S.commentInfoIcon src={good2} />
                  <span>0</span>
                  <S.commentInfoIcon src={comments} />
                  <span>0</span>
                  <S.commentMore src={more} />
                </S.commentInfo>
              </S.comment>
            ))}
            {/* <S.Recomment>
              <S.commentUser>
                <span>회사이름</span>
                <span> · i*****</span>
              </S.commentUser>
              <S.commentContent>
                <p>내용</p>
              </S.commentContent>
              <S.commentInfo>
                <S.commentInfoIcon src={time} />
                <span>1시간</span>
                <S.commentInfoIcon src={good2} />
                <span>1</span>
                <S.commentInfoIcon src={comments} />
                <span>1</span>
                <S.commentMore src={more} />
              </S.commentInfo>
            </S.Recomment> */}
          </S.commentContainer>
        </S.post>
        <S.side>
          <S.recommendPost>
            <h1>스포츠 추천 글</h1>
            {recommend.map(({ title }) => (
              <S.postTitle key={title}>
                <S.postTitleDot />
                {title}
              </S.postTitle>
            ))}
          </S.recommendPost>
          <S.Banner src="images/banner2.png" />
        </S.side>
      </S.container>
      <Footer />
    </div>
  );
};

export default DetailLayout;
