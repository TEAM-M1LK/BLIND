import React from "react";
import * as S from "./HomeLayout.style";
import category from "data/category";
import Arrow from "assets/arrow.svg";
import Search from "assets/search.svg";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

const HomeLayout = () => {
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
      <Footer />
    </>
  );
};
export default HomeLayout;
