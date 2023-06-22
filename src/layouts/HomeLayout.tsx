import React from "react";
import * as S from "./HomeLayout.style";
import category from "data/category";
import Arrow from "assets/arrow.svg";
import Search from "assets/search.svg";
import Header from "components/header/Header";
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
      category: "스포츠",
      comments: [{ key: "", contents: "", author: "", company: "" }],
      company: "카카오",
      title: "test",
      contents: "asd asd",
      date: new Date(),
      author: "우비닝",
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

  const onCreatePost = () => {
    const newPostKey = push(child(ref(db), "article")).key;

    const postData = {
      key: newPostKey,
      title: "test",
      contents: "asd asd",
      category: "스포츠",
      company: "카카오",
      author: "우빈우빈",
      comments: [{ key: "", contents: "", author: "", company: "" }],
      date: new Date(),
      like: 0,
      view: 0,
    };
    const updates: { [key: string]: any } = {};
    updates["/article/" + newPostKey] = postData;

    return update(ref(db), updates);
  };

  return (
    <>
      <Header />
      <S.HomeLayout>
        <S.HomeContainer>
          <S.HomeCategoryContainer>
            <S.HomeCategorySearchContainer>
              <button onClick={onCreatePost}>asd</button>
              <S.HomeCategorySearchButton>
                <S.HomeCategorySearchButtonImg src={Search} />
              </S.HomeCategorySearchButton>
              <S.HomeCategorySearchInput placeholder="관심있는 내용을 검색해보세요!" />
            </S.HomeCategorySearchContainer>
            <S.HomeMainCategoryHeader>
              <S.HomeCategoryItemImage src="images/topic_best.svg" />
              <S.HomeCategoryItemTitle>토픽 베스트</S.HomeCategoryItemTitle>
              <S.HomeCategoryItemBlindhire src="" />
              <S.HomeCategoryItemMore>더보기</S.HomeCategoryItemMore>
              <S.HomeCategoryItemIcon src={Arrow} />
            </S.HomeMainCategoryHeader>
            <S.HomeMainCategoryHeader>
              <S.HomeCategoryItemImage src="images/popular.svg" />
              <S.HomeCategoryItemTitle>인기 채용</S.HomeCategoryItemTitle>
              <S.HomeCategoryItemBlindhire src="images/blindHire.png" />
              <S.HomeCategoryItemMore>더보기</S.HomeCategoryItemMore>
              <S.HomeCategoryItemIcon src={Arrow} />
            </S.HomeMainCategoryHeader>
            {category.map(({ name, src }) => (
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
                      <S.HomeCategoryPostContainer to={`/detail/${item.key}`}>
                        <S.HomeCategoryPostTitle>
                          {item.title}
                        </S.HomeCategoryPostTitle>
                        <S.HomeCategoryPostView>
                          {item.view}
                        </S.HomeCategoryPostView>
                      </S.HomeCategoryPostContainer>
                    );
                })}
              </S.HomeCategoryItemContainer>
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
