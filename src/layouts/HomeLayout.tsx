import React from "react";
import * as S from "./HomeLayout.style";
import category from "data/category";
import Arrow from "assets/arrow.svg";
import Search from "assets/search.svg";
import Header from "components/header/Header";
import recruit from "data/best_recruit";
import view from "../assets/view.png";
import good from "../assets/good2.png";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  update,
} from "firebase/database";

export interface Post {
  key: string;
  category: string;
  comments: {
    key: string;
    contents: string;
    author: string;
    company: string;
  }[];
  company: string;
  title: string;
  contents: string;
  author: string;
  date: Date;
  like: number;
  view: number;
}


const HomeLayout = () => {
  const [posts, setPosts] = React.useState<Post[]>([
    {
      key: "",
      title: "",
      contents: "",
      category: "",
      company: "",
      author: "",
      comments: [],
      date: new Date(),
      like: 0,
      view: 0,
    },
  ]);
  const db = getDatabase();

  

  React.useEffect(() => {
    onValue(ref(db, "article"), (res) => {
      setPosts(
        Object.entries(res.val()).map(
          ([...item]) => ({ ...item }[1]),
        ) as Post[],
      );
    });
  }, []);

const [topPosts, setTopPosts] = React.useState<Post[]>([]);

React.useEffect(() => {
  const sortedPosts = [...posts].sort((a, b) => b.like - a.like);
  const topFivePosts = sortedPosts.slice(0, 10);
  setTopPosts(topFivePosts);
}, [posts]);


  return (
    <>
      <Header />
      <S.HomeLayout>
        <S.HomeContainer>
          <S.HomeCategoryContainer>
            <S.HomeCategorySearchContainer>
              <S.HomeCategorySearchButton>
                <S.HomeCategorySearchButtonImg src={Search} />
              </S.HomeCategorySearchButton>
              <S.HomeCategorySearchInput placeholder="관심있는 내용을 검색해보세요!" />
            </S.HomeCategorySearchContainer>
            <S.HomeCategoryTopicBest>
            <S.HomeMainCategoryHeader>
              <S.HomeCategoryItemImage src="images/topic_best.svg" />
              <S.HomeCategoryItemTitle>토픽 베스트</S.HomeCategoryItemTitle>
              <S.HomeCategoryItemBlindhire src="" />
              <S.HomeCategoryItemMore>더보기</S.HomeCategoryItemMore>
              <S.HomeCategoryItemIcon src={Arrow} />
            </S.HomeMainCategoryHeader>
            {topPosts.map((item) => (
              <S.HomeCategoryPostContainer to={`/detail/${item.key}`} key={item.key}>
                <S.CategoryBox>{item.category}</S.CategoryBox>
                <S.HomeCategoryPostTitle>{item.title}</S.HomeCategoryPostTitle>
                <S.HomeCategoryPostView>
                  <img src={good}/>{item.like}
                </S.HomeCategoryPostView>
              </S.HomeCategoryPostContainer>
            ))}
            </S.HomeCategoryTopicBest>
            <S.HomeMainCategoryHeader>
              <S.HomeCategoryItemImage src="images/popular.svg" />
              <S.HomeCategoryItemTitle>인기 채용</S.HomeCategoryItemTitle>
              <S.HomeCategoryItemBlindhire src="images/blindHire.png" />
              <S.HomeCategoryItemMore>더보기</S.HomeCategoryItemMore>
              <S.HomeCategoryItemIcon src={Arrow} />
            </S.HomeMainCategoryHeader>
            <S.BestRecruitContainer>
            {recruit.map(({name,image, cp_image, title}) => (
              <S.BestRecruitItem key={name}>
              <S.RecruitImage src={image}/>
              <S.RecruitCp>
                <S.RecruitCpImage src={cp_image}/>
                <S.RecruitCpName>{name}</S.RecruitCpName>
              </S.RecruitCp>
              <S.RecruitTitle>{title}</S.RecruitTitle>
              </S.BestRecruitItem>
            ))}
            </S.BestRecruitContainer> 
            {category.map((item, index) => (
              <S.HomeCategoryDoubleContainer key={index}>
                {item.map(({ name, src }) => (
                  <S.HomeCategoryItemContainer key={name}>
                    <S.HomeCategoryItemHeader>
                      <S.HomeCategoryItemImage src={src} />
                      <S.HomeCategoryItemTitle>{name}</S.HomeCategoryItemTitle>
                      <S.HomeCategoryItemBlindhire src="" />
                      <S.HomeCategoryItemMore>더보기</S.HomeCategoryItemMore>
                      <S.HomeCategoryItemIcon src={Arrow} />
                    </S.HomeCategoryItemHeader>
                    {posts.map((item) => {
                      if (item.category === name)
                        return (
                          <S.HomeCategoryPostContainer
                            to={`/detail/${item.key}`}
                          >
                            <S.HomeCategoryPostTitle>
                              {item.title}
                            </S.HomeCategoryPostTitle>
                            <S.HomeCategoryPostView>
                              <img src={view}/>
                              {Math.floor(Math.random() * 1000)}
                            </S.HomeCategoryPostView>
                          </S.HomeCategoryPostContainer>
                        );
                    })}
                  </S.HomeCategoryItemContainer>
                ))}
              </S.HomeCategoryDoubleContainer>
            ))}
          </S.HomeCategoryContainer>
          <S.HomeAsideContainer>
            <S.HomeAsideContainerBanner src="images/banner.png" />
            <S.HomeAsideContainerBanner src="images/best.png" />
            <S.HomeAsideContainerBanner src="images/banner2.png" />
          </S.HomeAsideContainer>
        </S.HomeContainer>
      </S.HomeLayout>
    </>
  );
};
export default HomeLayout;
