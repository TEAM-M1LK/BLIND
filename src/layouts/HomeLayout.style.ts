import { Link } from "react-router-dom";
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
  display: flex;
`;

export const HomeCategoryContainer = styled.div`
  width: 67%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap:20px;
`;

export const HomeCategoryTopicBest = styled.div`
  width:100%;
`

export const HomeAsideContainer = styled.div`
  width: 26%;
  margin: 40px 0 0 auto;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

export const HomeAsideContainerBanner = styled.img`
  width: 100%;
  height: auto;
`;

export const HomeCategorySearchContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
`;

export const HomeCategorySearchButton = styled.div`
  width: 10%;
  height: 54px;
  border: 2px solid black;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  border-right: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeCategorySearchButtonImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const HomeCategorySearchInput = styled.input`
  width: 90%;
  height: 54px;
  border: 2px solid black;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  border-left: none;
  outline: none;
  font-size: 18px;

  &::placeholder {
    color: black;
  }
`;

export const HomeCategoryPostContainer = styled(Link)`
  margin: 8px 0 8px 0;
  display: flex;
  text-decoration: none;
  color: black;
  width: 100%;
  align-items: center;
`;

export const HomeCategoryPostTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const HomeCategoryPostView = styled.span`
  font-size: 13px;
  color: gray;
  font-weight: 400;
  margin-left: auto;
  display: flex;
  align-items: center;
  img {
    width:16px;
    height:15px;
    padding-top: 1px;
    margin-right: 3px;
  }
`;

export const HomeCategoryItemContainer = styled.div`
  width: 46%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-left: 6px;
  font-size: 18px;
  font-weight: 700;
`;

export const HomeCategoryItemMore = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const HomeCategoryItemIcon = styled.img`
  width: 10px;
  margin: 2px 0 0 2px;
`;

export const HomeCategoryItemBlindhire = styled.img`
  margin-left: auto;
  width: 70px;
`;

export const HomeMainCategoryHeader = styled.div`
  width: 100%;
  padding: 6px;
  border-bottom: 2px solid #eee;
  display: flex;
  align-items: center;
`;

export const HomeCategoryDoubleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > * {
    margin-bottom: auto;
  }
`;

export const BestRecruitContainer = styled.div`
  width:100%;
  display: flex;
  gap:20px;
  overflow-x: scroll;
  white-space: nowrap;
`

export const BestRecruitItem = styled.div`
  width:200px;
  height:242px;
  padding-top:16px;
`;

export const RecruitImage = styled.img`
  width:200px;
  height:100px;
`
export const RecruitCp = styled.div`
  width:100%;
  padding-top:12px;
  display: flex;
  align-items: center;
`

export const RecruitCpImage = styled.img`
  width:26px;
  height:26px;
  border-radius: 100%;
  margin-right:7px;
`

export const RecruitCpName = styled.div`
  font-size: 12px;
`

export const RecruitTitle = styled.div`
  margin-top:8px;
  font-size: 16px;
  font-weight: bold;
  min-height: 40px;
`

export const CategoryBox = styled.div`
  width:57px;
  height:18px;
  color:#94969b;
  text-align: center;
  border:1px solid #eee;
  font-size: 12px;
  margin-right:4px;
`
