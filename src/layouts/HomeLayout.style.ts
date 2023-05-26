import styled from "styled-components";

export const HomeLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  width: 76vw;
  height: 100vh;
`;

export const HomeCategoryContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const HomeCategoryItemContainer = styled.div`
  width: 46%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeCategoryItemHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 6px;
  border-bottom: 2px solid #eee;
`;

export const HomeCategoryItemImage = styled.img`
  width: 32px;
  height: auto;
`;

export const HomeCategoryItemTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const HomeCategoryItemMore = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: auto;
`;

export const HomeCategoryItemIcon = styled.img`
  width: 10px;
  margin: 2px 0 0 2px;
`;
