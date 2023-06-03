import React from "react";
import * as S from "./RecruitLayout.style";
import Header from "components/header/Header";
import postCategory from "data/post_category";
import Footer from "components/footer/Footer";

const categoryItem = [
  "채용 전체",
  "엔지니어링",
  "교육",
  "디자인",
  "개발",
  "HR경영지원",
  "비즈니스",
  "건설",
  "영업MD",
  "생산제조",
  "마케팅광고홍보",
  "법무",
  "미디어",
  "의료제약",
  "서비스",
  "금융",
  "물류유통무역",
  "사업전략기획",
  "전문직",
];

const RecruitLayout = () => {
  const [category, setCategory] = React.useState("채용 전체");
  const onChangeCategory = (title: string) => {
    setCategory(title);
    console.log(title);
  };

  return (
    <S.RecruitLayout>
      <Header />
      <S.RecruitContainer>
        <S.RecruitBanner src="https://d2u3dcdbebyaiu.cloudfront.net/img/web_banner/web_banner_kr_1685004560.jpg" />
        <S.CategoryContainer>
          {categoryItem.map((title) => (
            <S.CategoryItem
              onClick={() => onChangeCategory(title)}
              key={title}
              selected={category === title ? "t" : "f"}
            >
              {title}
            </S.CategoryItem>
          ))}
        </S.CategoryContainer>
        <S.PostContainer>
          {postCategory.map((post) => (
            <S.PostItem key={post.image}>
              <S.PostCategoryBox>
                {post.categories.map((category) => (
                  <S.PostCategoryItem key={category}>
                    {category}
                  </S.PostCategoryItem>
                ))}
              </S.PostCategoryBox>
              <S.PostCategoryImage src={post.image} />
              <S.PostCategoryTitle>{post.title}</S.PostCategoryTitle>
              <S.PostSubTitle>{post.description}</S.PostSubTitle>
              <S.PostCategoryBox>
                {post.boxes.map((box) => (
                  <S.PostCategorySquare key={box}>{box}</S.PostCategorySquare>
                ))}
              </S.PostCategoryBox>
            </S.PostItem>
          ))}
        </S.PostContainer>
      </S.RecruitContainer>
      <Footer />
    </S.RecruitLayout>
  );
};

export default RecruitLayout;
