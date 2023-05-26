import Header from "components/Header";
import React from "react";
import * as S from "./HomeLayout.style";
import category from "data/category";
import Arrow from "assets/arrow.svg";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <S.HomeLayout>
        <S.HomeContainer>
          <S.HomeCategoryContainer>
            {category.map(({ name, src }) => (
              <S.HomeCategoryItemContainer key={name}>
                <S.HomeCategoryItemHeader>
                  <S.HomeCategoryItemImage src={src} />
                  <S.HomeCategoryItemTitle>{name}</S.HomeCategoryItemTitle>
                  <S.HomeCategoryItemMore>더보기</S.HomeCategoryItemMore>
                  <S.HomeCategoryItemIcon src={Arrow} />
                </S.HomeCategoryItemHeader>
              </S.HomeCategoryItemContainer>
            ))}
          </S.HomeCategoryContainer>
        </S.HomeContainer>
      </S.HomeLayout>
    </>
  );
};

export default HomeLayout;
