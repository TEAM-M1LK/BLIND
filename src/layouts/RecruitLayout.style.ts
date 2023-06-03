import styled, { css } from "styled-components";

export const RecruitLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RecruitContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RecruitBanner = styled.img`
  width: 76vw;
  margin: 30px 0 30px 0;
  height: auto;
`;

export const CategoryContainer = styled.div`
  width: 76vw;
  height: 30px;
  border-bottom: 1.5px solid #ccc;
  display: flex;
  gap: 20px;
  overflow: auto;
  white-space: nowrap;
  padding: 0 10px 0 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;

export const CategoryItem = styled.div<{ selected: string }>`
  font-size: 14px;
  height: 100%;
  font-weight: 500;
  color: black;
  ${({ selected }) =>
    selected === "t"
      ? css`
          border-bottom: 2px solid black;
        `
      : ""};
  cursor: pointer;
`;

export const PostContainer = styled.div`
  width: 76vw;
  flex-wrap: wrap;
  display: flex;
`;

export const PostItem = styled.div`
  width: 48%;
  border: 2px solid #ccc;
  border-top: none;
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:nth-child(even) {
    border-left: none;
    border-right: none;
  }

  &:nth-child(odd) {
    border-left: none;
  }
`;

export const PostCategoryBox = styled.div`
  display: flex;
  gap: 8px;
  margin: 14px 0 0 0;
`;

export const PostCategoryItem = styled.div`
  padding: 4px 8px 4px 8px;
  border-radius: 999px;
  font-size: 12px;
  background-color: #f2f3f7;
  color: black;

  &:nth-child(odd) {
    background-color: transparent;
    border: 1px solid #ccc;
  }
`;

export const PostCategoryTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  width: 400px;
`;

export const PostCategoryImage = styled.img`
  width: 80px;
  position: absolute;
  height: 80px;
  margin: 20px 0 0 420px;
`;

export const PostSubTitle = styled.div`
  font-size: 12px;
  color: black;
  margin-top: 30px;
`;

export const PostCategorySquare = styled.div`
  padding: 2px 8px 2px 8px;
  background-color: transparent;
  border: 1.5px solid #7766ff;
  color: #7766ff;
  border-radius: 0;
  font-size: 10px;
  margin-bottom: 18px;
`;
